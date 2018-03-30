<template>
  <section class="field-details">
    <div class="field-details__header">Field details</div>
    <div class="field-details__form">
      <b-field class="field-details__form__field-params field-input"
        label="Display label"
        message="For display purposes, spaces allowed">
        <b-input class="field-details__form__field-params__input" value=""></b-input>
      </b-field>
      <b-field class="field-details__form__field-params field-input"
        label="Reference name"
        message="Used to reference in calculations, no spaces allowed">
        <b-input class="field-details__form__field-params__input" value=""></b-input>
      </b-field>
      <b-field class="field-details__form__field-params field-input" label="Default value">
        <b-input class="field-details__form__field-params__input" value=""></b-input>
      </b-field>
    </div>
    <field-tags class="field-details__field-tags">></field-tags>
    <field-groups class="field-details__field-groups"></field-groups>
  </section>
</template>
<script>
import FieldGroups from './FieldGroups'
import FieldTags from './FieldTags'
export default {
  components:{
    FieldGroups,'field-tags': FieldTags
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
  grid-column-gap: 42px;
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
