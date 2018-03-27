<template>
  <section class="field-details">
    <div class="field-details__container">
      <div class="field-details__container__header">Field details</div>
      <div class="field-details__container__form">
        <b-field class="field-details__container__form__field-params__input field-input" label="Display label">
          <b-input value="aa"></b-input>
        </b-field>
        <b-field class="field-details__container__form__field-params__input field-input" label="Reference name">
          <b-input value="vv"></b-input>
        </b-field>
        <b-field class="field-details__container__form__field-params__input field-input" label="Default value">
          <b-input value="vv"></b-input>
        </b-field>
      </div>
    </div>
    <div class="field-details__groups">
      <div class="field-details__groups__header">
        Field groups
      </div>
      <p class="field-details__groups__subtitle">
        Choose a group for this input
      </p>
    </div>
  </section>
</template>
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
  &__groups{
    @include section();
    margin-top: 46px;
    margin-left: 42px;
    flex-basis: auto;
    @include tablet() {
      width: 180px;
    }
    @include desktop() {
      width: 200px;
    }
    height:400px;
    padding: 8px;
    &__header{
      @include section-header();
      font-size: 1rem;
    }
    &__subtitle{
      margin-top: 6px;
      font-size: 0.6rem;
      color: $section-subtitle-text;
    }
  }
}
</style>
