<template>
  <section class="field-details">
    <div class="field-details__container">
      <div class="field-details__container__header">Field details</div>
      <div class="field-details__container__form">
        <b-field class="field-details__container__form__field-params field-input"
          label="Display label"
          message="For display purposes, spaces allowed">
          <b-input class="field-details__container__form__field-params__input" value=""></b-input>
        </b-field>
        <b-field class="field-details__container__form__field-params field-input"
          label="Reference name"
          message="Used to reference in calculations, no spaces allowed">
          <b-input class="field-details__container__form__field-params__input" value=""></b-input>
        </b-field>
        <b-field class="field-details__container__form__field-params field-input" label="Default value">
          <b-input class="field-details__container__form__field-params__input" value=""></b-input>
        </b-field>
      </div>
    </div>
    <field-groups></field-groups>
  </section>
</template>
<script>
import FieldGroups from './FieldGroups'
export default {
  components:{
    FieldGroups
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
  display: flex;
  flex-direction: row;
  background-color: $section-main-bg;
  &__input{
  }
  &__container{
    flex-grow: 1;
    &__header{
      @include section-header();
    }
    &__form{
      @include desktop(){
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        justify-content: space-between;
      }
      &__field-params{
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
}
</style>
