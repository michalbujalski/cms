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
        :id="group.id"
        :selected="selectedGroup === group.id"
        @on-select="toggleGroupSelect"
        class="field-groups__groups-list__item"></field-group-item>
    </div>
    <field-group-create
      ref="groupCreate"
      @cancel="cancelCreatingGroup"
      @save="saveNewGroup"
      @on-title-update="updateNewGroupTitle"
      :isLoading="newGroup.isLoading"
      v-if="newGroup.isActive"></field-group-create>
    <button
      v-show="!newGroup.isActive"
      @click="initCreateGroup"
      class="button field-groups__add-button">Add A New Group</button>
  </div>
</template>
<script>
import FieldGroupItem from './FieldGroupItem'
import FieldGroupCreate from './FieldGroupCreate'
import {mapGetters, mapMutations, mapActions} from 'vuex'

export default {
  components: {
    'field-group-item': FieldGroupItem,
    'field-group-create': FieldGroupCreate
  },
  props: {
    selectedGroup: {
      type: String
    },
    fieldGroups: {
      type: Array,
      default: []
    }
  },
  computed: {
    ...mapGetters(['newGroup'])
  },
  methods: {
    ...mapMutations(['updateNewGroup', 'toggleNewGroupActive', 'toggleGroupSelection']),
    ...mapActions(['uploadGroup']),
    toggleGroupSelect ({id}) {
      this.toggleGroupSelection({id})
    },
    cancelCreatingGroup () {
      this.toggleNewGroupActive({ isActive: false })
    },
    initCreateGroup () {
      this.toggleNewGroupActive({ isActive: true })
    },
    updateNewGroupTitle({title}){
      this.updateNewGroup({title})
    },
    saveNewGroup(){
      this.uploadGroup({group: this.newGroup})
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
