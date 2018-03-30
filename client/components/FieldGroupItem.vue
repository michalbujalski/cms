<template>
  <div class="group-item" @click="toggleSelected" :class="{'group-item--selected':selected}">
    <h5 class="group-item__title">Rental Vehicle Coverage Package</h5>
    <div class="group-item__subtitle">7 other inputs</div>
  </div>
</template>
<script>
export default {
  data () {
    return {
      selected: false
    }
  },
  methods: {
    toggleSelected (){
      this.selected = !this.selected
    }
  }
}
</script>
<style lang="scss">
@import '../style/_vars.scss';
.group-item{
  @include section();
  background-color: $group-item-bg;
  padding: 8px;
  cursor: pointer;
  &__title{
    font-weight: bold;
    font-size: 0.75rem;
  }
  &__subtitle{
    font-size: 0.7rem;
  }
  &--selected{
    @include selected();
  }
}
</style>
