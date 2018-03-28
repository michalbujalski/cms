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
    <field-tag-groups class="field-details__field-tag-groups">></field-tag-groups>
    <field-groups class="field-details__field-groups"></field-groups>
  </section>
</template>
<script>
import FieldGroups from './FieldGroups'
import FieldTagdGroups from './FieldTagGroups'
export default {
  components:{
    FieldGroups,'field-tag-groups': FieldTagdGroups
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
  height:500px;
  display: grid;
  grid-template-columns: auto 200px;
  grid-template-rows: 96px auto 100px;;
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
    padding-right: 42px;
    @include desktop(){
      display: flex;
      flex-direction: row;
      flex-wrap: wrap;
      justify-content: space-between;
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
          width:350px;
        }
        @include mobile(){
          width:150px;
        }
      }
    }
  }
}
</style>
