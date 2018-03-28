<template>
  <div class="field-groups">
    <div class="field-groups__header">
      Field groups
    </div>
    <p class="field-groups__subtitle">
      Choose a group for this input
    </p>
  </div>
</template>
<style lang="scss">
@import '../style/_vars.scss';
@import "~bulma/sass/utilities/_all";
.field-groups{
  @include section();
  flex-basis: auto;
  width: 200px;
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
</style>
