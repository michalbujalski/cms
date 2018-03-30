<template>
  <section class="field-details">
    <div class="field-details__header">Field details</div>
    <div class="field-details__form">
      <b-field class="field-details__form__field-params field-input"
        label="Display label"
        message="For display purposes, spaces allowed">
        <b-input class="field-details__form__field-params__input" v-model="displayLabel"></b-input>
      </b-field>
      <b-field class="field-details__form__field-params field-input"
        label="Reference name"
        message="Used to reference in calculations, no spaces allowed">
        <b-input class="field-details__form__field-params__input" @change="referenceNameChange" v-model="referenceName"></b-input>
      </b-field>
      <b-field class="field-details__form__field-params field-input" label="Default value">
        <b-input class="field-details__form__field-params__input" v-model="defaultValue"></b-input>
      </b-field>
      <b-field class="field-details__form__field-params field-input" label="Default validation"
        message="Any regex pattern can be used for input validation">
        <b-input class="field-details__form__field-params__input" v-model="validationRegex"></b-input>
      </b-field>
    </div>
    <field-tags class="field-details__field-tags">></field-tags>
    <field-groups class="field-details__field-groups"></field-groups>
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
      referenceName: ''
    }
  },
  props: {
  },
  computed: {
    newFieldForm () {
      const newForm = {
        displayLabel: this.displayLabel,
        defaultValue: this.defaultValue,
        validationRegex: this.validationRegex,
        referenceName: this.referenceName
      }
      return newForm
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
    ...mapMutations(['updateFormField'])
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
