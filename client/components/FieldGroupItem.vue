<template>
  <div class="group-item" @click="toggleSelected" :class="{'group-item--selected':selected}">
    <h5 class="group-item__title">{{title}}</h5>
    <div class="group-item__subtitle">{{`${usagesNum} other inputs`}}</div>
  </div>
</template>
<script>
export default {
  props: {
    id: {
      type: String,
      required: true
    },
    selected:{
      type: Boolean,
      default: false
    },
    usagesNum: {
      type: Number,
      default: 0
    },
    title: {
      type: String,
      required: true
    }
  },
  methods: {
    toggleSelected (){
      this.$emit('on-select', { id: this.id })
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
