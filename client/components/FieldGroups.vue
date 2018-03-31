<template>
  <div class="field-groups">
    <div class="field-groups__header">
      Field groups
    </div>
    <p class="field-groups__subtitle">
      Choose a group for this input
    </p>
    <div class="field-groups__groups-list">
      <field-group-item
        v-for="group in fieldGroups" :key="group.id"
        :title="group.title"
        :usagesNum="group.usagesNum"
        class="field-groups__groups-list__item"></field-group-item>
    </div>
    <button class="button field-groups__add-button">Add A New Group</button>
  </div>
</template>
<script>
import FieldGroupItem from './FieldGroupItem'
export default {
  components: {
    'field-group-item': FieldGroupItem
  },
  props: {
    fieldGroups: {
      type: Array,
      default: []
    }
  }
}
</script>

<style lang="scss">
@import '../style/_vars.scss';
.field-groups{
  @include section();
  display: flex;
  flex-direction: column;
  padding: 10px;
  background-color: $field-groups-bg;
  overflow: hidden;
  overflow-y: auto;
  &__add-button{
    background-color: $btn-add-group-bg;
    border-color: $btn-add-group-border;
    border-radius: $btn-add-group-border-radius;
    border-width: 1px;
    min-height: 30px;
    color: $btn-add-group-text;
    font-size: 0.75rem;
    font-weight: bold;
    cursor: pointer;
    &:hover{
      background-color: $btn-add-group-bg-hover;
    }
    &:focus{
      outline-color: $btn-add-group-otuline;
      outline-width: 4px;
      outline-offset: -2px;
    }
  }
  &__groups-list{
    &__item{
      margin-top: 20px;
      margin-bottom: 20px;
    }
  }
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
