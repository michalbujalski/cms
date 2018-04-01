<template>
  <div class="field-add">
    <h1 class="field-add__header">Commercial Property - Add Field</h1>
    <field-types
      :types="fieldTypes"
      :currentType="newFieldType"
      @on-select="onTypeSelect"
      class="field-add__types"></field-types>
    <field-details
      class="field-add__details"
      :selectedGroup="currentGroup"
      :fieldGroups="fieldGroups"
      :tagGroups="tagGroups"></field-details>
    <div class="field-add__controls">
      <button class="button field-add__controls__btn-save">Save Changes</button>
      <span class="field-add__controls__void"></span>
      <button class="button field-add__controls__btn-cancel">Cancel Changes</button>
      <button class="button field-add__controls__btn-delete">Delete Input</button>
    </div>
  </div>
</template>

<script>
import FieldDetails from 'components/FieldDetails'
import FieldTypes from 'components/FieldTypes'
import {mapGetters, mapMutations} from 'vuex'
export default {
  components: {
    FieldDetails, FieldTypes
  },
  methods: {
    ...mapMutations(['setFieldType']),
    onTypeSelect({id}){
      this.setFieldType({id})
    }
  },
  computed: {
    ...mapGetters(['fieldTypes', 'newFieldType', 'tagGroups', 'fieldGroups', 'currentGroup'])
  }
}
</script>

<style lang="scss">
@import '../style/_vars.scss';
@import "~bulma/sass/utilities/_all";
.field-add{
  padding: $page-padding;
  display: grid;
  grid-template-rows: auto auto 72px;
  grid-template-columns: $field-types-width-desktop auto;
  @include mobile(){
    grid-template-columns: $field-types-width-mobile auto;
  }
  @include tablet-only(){
    grid-template-columns: $field-types-width-tablet auto;
  }
  &__header{
    grid-column-start: 1;
    grid-column-end: 3;
    font-weight: 200;
    padding-bottom: 32px;
  }
  &__types{
    grid-column-start: 1;
    grid-column-end: 2;
  }
  &__details{
    grid-column-start: 2;
    grid-column-end: 3;
  }
  &__controls{
    grid-column-start: 1;
    grid-column-end: 3;
    padding-top: 20px;
    font-size: 0.8rem;
    display: flex;
    flex-direction: row;
    &__void{
      flex-grow: 1;
    }
    &__btn{
      &-save{
        @include btn-action-confirm();
      }
      &-cancel{
        @include btn-action-cancel();
        margin-right: 34px;
      }
      &-delete{
        @include btn-action-delete();
      }
    }
  }
}
.field{
  &-input{
    margin-top:8px;
    & > label{
      font-size: 0.9rem;
      padding-top: 2px;
      padding-bottom: 2px;
    }
  }
}
</style>

