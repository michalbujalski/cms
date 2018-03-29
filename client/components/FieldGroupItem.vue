<template>
  <div class="group-item">
    <h5 class="group-item__title">Rental Vehicle Coverage Package</h5>
    <div class="group-item__subtitle">7 other inputs</div>
  </div>
</template>
<style lang="scss">
@import '../style/_vars.scss';
.group-item{
  @include section();
  background-color: $group-item-bg;
  padding: 8px;
  &__title{
    font-weight: bold;
    font-size: 0.75rem;
  }
  &__subtitle{
    font-size: 0.7rem;
  }
}
</style>
