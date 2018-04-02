<template>
  <section class="field-details">
    <div class="field-details__header">Field details</div>
    <div class="field-details__form">
      <b-field class="field-details__form__field-params field-input"
        label="Display label"
        message="For display purposes, spaces allowed">
        <b-input
          class="field-details__form__field-params__input"
          v-model="displayLabel"
          name="displayLabel"
          v-validate="'required|min:2'"></b-input>
        <div
          class="field-details__form__field-params__error"
          v-show="errors.has('displayLabel')">
          {{ displayLabelError }}
        </div>
      </b-field>
      <b-field class="field-details__form__field-params field-input"
        label="Reference name"
        message="Used to reference in calculations, no spaces allowed">
        <b-input
          class="field-details__form__field-params__input"
          v-validate="'required|min:2'"
          name="referenceName"
          v-model="referenceName"></b-input>
        <div
          class="field-details__form__field-params__error"
          v-show="errors.has('referenceName')">
          {{ referenceNameError }}
        </div>
      </b-field>
      <b-field class="field-details__form__field-params field-input" label="Default value">
        <b-input class="field-details__form__field-params__input" v-model="defaultValue"></b-input>
      </b-field>
      <b-field class="field-details__form__field-params field-input" label="Default validation"
        message="Any regex pattern can be used for input validation">
        <b-input class="field-details__form__field-params__input" v-model="validationRegex"></b-input>
      </b-field>
    </div>
    <field-tags
      @on-tags-update="updateTags"
      :tagGroups="tagGroups"
      :selectedTagGroups="selectedTagGroups"
      @on-group-tag-update="updateGroupTags"
      class="field-details__field-tags"></field-tags>
    <field-groups
      :fieldGroups="fieldGroups"
      :selectedGroup="selectedGroup"
      class="field-details__field-groups"></field-groups>
  </section>
</template>
<script>
import FieldGroups from './FieldGroups'
import FieldTags from './FieldTags'
import {mapMutations} from 'vuex'
export default {
  components: {
    FieldGroups,'field-tags': FieldTags
  },
  data () {
    return {
      displayLabel: '',
      defaultValue: '',
      validationRegex: '',
      referenceName: '',
      selectedTags: [],
      selectedTagGroups: []
    }
  },
  props: {
    tagGroups: {
      type: Array,
      default: () => []
    },
    fieldGroups: {
      type: Array,
      default: () => []
    },
    selectedGroup: {
      type:String
    }
  },
  computed: {
    hasReferenceError () {
      return this.errors.first('referenceName')
    },
    referenceNameError () {
      return this.hasReferenceError !== null ? 
            this.hasReferenceError.replace('referenceName', 'reference name') :
            null
    },
    hasDisplayError () {
      return this.errors.first('displayLabel')
    },
    displayLabelError () {
      return this.hasDisplayError !== null ? 
            this.hasDisplayError.replace('displayLabel', 'display label') :
            null
    },
    newFieldForm () {
      return {
        displayLabel: this.displayLabel,
        defaultValue: this.defaultValue,
        validationRegex: this.validationRegex,
        referenceName: this.referenceName,
        selectedTags: this.selectedTags,
        selectedTagGroups: this.selectedTagGroups
      }
    },
  },
  watch:{
    displayLabel (value){
      this.referenceName = value.split(' ').join('_')
    },
    newFieldForm (value) {
      this.updateFormField(value)
    }
  },
  methods: {
    ...mapMutations(['updateFormField']),
    updateGroupTags ({groupTags}) {
      this.selectedTagGroups = groupTags
    },
    updateTags ({ tags }) {
      this.selectedTags = tags
    }
  }
}
</script>
<style lang="scss">
@import '../style/_vars.scss';
@import "~bulma/sass/utilities/_all";
.field-details{
  @include section();
  border-top-left-radius: 0px;
  border-bottom-left-radius: 0px;
  border-left-width: 0px;
  width: 100%;
  display: grid;
  grid-template-columns: auto 275px;
  grid-template-rows: 46px auto 180px;
  grid-column-gap: 30px;
  background-color: $section-main-bg;
  &__field-tag-groups{
    grid-column-start: 1;
    grid-column-end: 2;
  }
  &__field-groups{
    grid-column-start: 2;
    grid-column-end: 3;
    grid-row-start: 2;
    grid-row-end: 4;
  }
  &__header{
    @include section-header();
    grid-column-start: 1;
    grid-column-end: 3;
  }
  &__form{
    grid-column-start: 1;
    grid-column-end: 2;
    @include desktop(){
      display: flex;
      flex-direction: row;
      flex-wrap: wrap;
      justify-content: space-between;
      align-content: flex-start;
    }
    &__field-params{
      flex-direction: column;
      &__error {
        color: red;
        font-size: 0.7rem;
      }
      &:nth-child(3){
        margin-right: 100%;
      }
      &__field-groups{
        align-self: flex-end;
      }
      &__input{
        @include desktop(){
          width: 280px;
        }
        @include tablet-only(){
          width:300px;
        }
        @include mobile(){
          width:150px;
        }
      }
    }
  }
}
</style>
