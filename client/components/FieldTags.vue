<template>
  <section class="tags">
    <div class="tags__header">Tags</div>
    <div class="tags__container">
      <div class="tags__container__group">
        <h6 class="tags__container__group__header">Tag group</h6>
        <div class="tags__container__group__tags">
          <tag v-for="tagGroup in tagGroups"
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
    selectedTagGroup: {
      type: Array,
      default: () => []
    }
  },
  methods: {
    notifyTagsChanged (tags) {
      this.$emit('on-tags-update',
        {
          tags: tags
        }
      )
    },
    //Toggle (append or delete) tag
    getSelected ({name, tags}) {
      const rawTags = tags.filter(tag=>tag.selected).map(tag=>tag.name)
      if(rawTags.includes(name)){
        return rawTags.filter(tagName=>tagName !== name)
      }else{
        return rawTags.concat(name)
      }
    },
    toggleGroupTagSelect (groupTagName) {
      const selectedGroupsKeys = this.getSelected({ name: groupTagName, tags: this.tagGroups })
      this.$emit('on-group-tag-update', {
        groupTags: selectedGroupsKeys
      })

      //If group uselected unselect also tags belonging to it
      const selectedTagsRaw = this.tagGroups
        .filter( tagGroup => selectedGroupsKeys.includes(tagGroup.name))
        .map(tagGroup => tagGroup.tags)
        .reduce((prev, next)=>{
          return prev.concat(next)
        }, [])
        .map(tag=>tag.name)
      
      this.notifyTagsChanged(selectedTagsRaw)
    },
    toggleTagSelect (tagName) {
      this.notifyTagsChanged(this.getSelected({ name: tagName, tags: this.tags }))
    }
  },
  computed: {
    tags () {
      return [].concat.apply(
        [],
        this.tagGroups
          .filter(group=>group.selected)
          .map(group=>group.tags)
      )
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

