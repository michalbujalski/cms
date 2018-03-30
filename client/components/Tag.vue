<template>
  <div
    @click="onClick"
    class="tag"
    :class="{'tag--selected': selected}">
    {{name}}
  </div>
</template>
<script>
export default {
  props: {
    name: {
      type: String,
      required: true
    },
    selected: {
      type: Boolean,
      default: false
    }
  },
  methods: {
    onClick () {
      // this.selected = !this.selected
    }
  }
}
</script>

<style lang="scss" scoped>
@import '../style/_vars.scss';
.tag{
  @include section();
  background-color: $tag-bg;
  padding: 8px;
  font-weight: bold;
  size: $tag-text;
  cursor: pointer;
  &--selected{
    background-color: $tag-bg-selected;
    color: $tag-text-selected;
  }
}
</style>


