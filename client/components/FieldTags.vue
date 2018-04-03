<template>
  <section class="tags">
    <div class="tags__header">Tags</div>
    <div class="tags__container">
      <div class="tags__container__group">
        <h6 class="tags__container__group__header">Tag group</h6>
        <div class="tags__container__group__tags">
          <tag v-for="tagGroup in groups"
            :key="tagGroup.name"
            :name="tagGroup.name"
            :selected="tagGroup.selected"
            @on-select="toggleGroupTagSelect"
            ></tag>
        </div>
      </div>
      <div class="tags__container__group">
        <h6 class="tags__container__group__header">Tags</h6>
        <div class="tags__container__group__tags">
          <tag v-for="tag in tags"
            :key="tag.name"
            :name="tag.name"
            :selected="tag.selected"
            @on-select="toggleTagSelect">
          </tag>
        </div>
      </div>
    </div>
  </section>
</template>
<script>
import Tag from './Tag'

export default {
  components: {
    Tag
  },
  props:{
    tagGroups: {
      type: Array,
      default: () => []
    },
  },
  data () {
    return {
      selectedGroups: {}
    }
  },
  methods: {
    toggleGroupTagSelect (groupTagName) {
      const selectedGroup = this.selectedGroups[groupTagName]
      if(!!selectedGroup){
          //remove group tag
          const updatedGroups = {...this.selectedGroups}
          delete updatedGroups[groupTagName]
          this.selectedGroups = updatedGroups
      }else{
          //add group tag
          const groupToAdd = this.tagGroups.find(tag=>tag.name===groupTagName)
          const tags = groupToAdd.tags.map(tag=>{
            return {...tag, selected: true}
          })
          const newSelectedGroup = {...groupToAdd, tags: tags, selected: true}
          this.selectedGroups = {...this.selectedGroups, [newSelectedGroup.name]: newSelectedGroup}
      }
    },
    toggleTagSelect (tagName) {
      this.selectedGroups = 
        Object.entries(this.selectedGroups)
          .map(([key, value]) => {
            // find group containing tag name
            if(!!value.tags.find(tag=>tag.name===tagName)){
              // toggle tag selection
              const updatedTags = value.tags.map(tag=>{
                if(tag.name===tagName){
                  return {...tag, selected: !tag.selected}
                }else{
                  return tag
                }
              })
              return [key, {...value, tags: updatedTags}]
            }
            return [key, value]
          })
          .reduce((prev,[key, value])=>{
            prev[key] = value
            return prev
          },{})
    }
  },
  watch: {
    selectedGroups (tags) {
      this.$emit('on-tags-update', { tags })
    }
  },
  computed: {
    groups () {
      return this.tagGroups.map(group=>{
        if(!!this.selectedGroups[group.name]){
          return {...group, selected: this.selectedGroups[group.name].selected}
        }else{
          return {...group, selected: false}
        }
      })
    },
    tags () {
      return Object.values(this.selectedGroups)
        .map(group=>group.tags)
        .reduce((prev, next)=>{
          return prev.concat(next)
        },[])
    }
  }
}
</script>
<style lang="scss">
@import "~bulma/sass/utilities/_all";
@mixin header(){
  font-weight: bold;
  font-size: 0.9rem;
}
@mixin tags(){
  display: flex;
  flex-flow: row wrap;
  padding-top: 8px;
}
.tags{
  font-size: 16px;
  display: flex;
  flex-direction: column;
  align-items: stretch;
  &__container{
    display: flex;
    min-height: 130px;
    flex-flow: row nowrap;
    @include mobile(){
      flex-flow: row wrap;
    }
    @include tablet-only(){
      flex-flow: row wrap;
    }
    &__group{
      &:first-child{
        margin-right: 4px;
      }
      &:last-child{
        margin-left: 4px;
      }
      flex-grow: 1;
      width: 100%;
      &__header{
        @include header();
      }
      &__tags{
        @include tags();
      }
    }
  }
  &__header{
    align-self: left;
    font-size: 1rem;
    font-weight: bold;
    padding-bottom: 15px;
    padding-top: 8px;
  }
}
</style>

