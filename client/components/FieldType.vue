<template>
  <div @click="toggleSelected" :class="{'field-type--selected':selected}" class="field-type">
    <header class="field-type__header">{{fieldType.name}}</header>
    <label class="field-type__label">Definition</label>
    <div class="field-type__value">{{fieldType.definition}}</div>
    <label class="field-type__label">Default display</label>
    <div class="field-type__value">{{fieldType.defaultDisplay}}</div>
  </div>
</template>
<script>
export default {
  props: {
    fieldType:{
      type: Object,
      required: true
    },
    selected: {
      type: Boolean,
      required: true
    }
  },
  methods: {
    toggleSelected(){
      if(!this.selected){
        this.$emit('on-select',{id: this.fieldType.id })
      }
    }
  }
}
</script>
<style lang="scss">
@import '../style/_vars.scss';
.field-type{
  @include section();
  background-color: $bc-white;
  margin-top: 20px;
  margin-bottom: 20px;
  cursor: pointer;
  display: flex;
  flex-direction: column;
  padding: 6px;
  &__header{
    margin-bottom: 6px;
    font-size: 1.1rem;
    font-weight: bold;
  }
  &__label{
    font-size: 0.7rem;
    margin-top: 6px;
    color: $section-selected-title;
  }
  &__value{
    font-size: 0.8rem;
    margin-top: 5px;
    margin-bottom: 5px;
    font-weight: 500;
  }
  &--selected{
    @include selected();
    & >h5{
      color: rgba(255, 255, 255, 0.8);
    }
    & >label{
      color: rgba(255, 255, 255, 0.75);
    }
  }
  > h5{
    font-size: 1rem;
    font-weight: bold;
  }
}
</style>
