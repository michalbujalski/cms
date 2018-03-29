<template>
  <section class="tags">
    <div class="tags__header">Tags</div>
    <div class="tags__container">
      <div class="tags__container__group">
        Tag group
      </div>
      <div class="tags__container__tag-items">
        Tags
      </div>
      <tag></tag>
      <tag></tag>
      <tag></tag>
      <tag></tag>
    </div>
  </section>
</template>
<script>
import Tag from './Tag'
export default {
  components: {
    Tag
  }
}
</script>
<style lang="scss">
.tags{
  display: flex;
  flex-direction: column;
  font-size: 16px;
  align-items: stretch;
  flex-wrap: wrap;
  &__container{
    display: flex;
    flex-grow: 1;
    flex-direction: row;
    flex-wrap: wrap;
    &__group{
      min-width: 200px;
      flex-grow: 1;
    }
    &__tag-items{
      min-width: 200px;
      flex-grow: 1;
    }
  }
  &__header{
    align-self: left;
    font-size: 16px;
    align-self: stretch;
    font-weight: bold;
    padding-bottom: 30px;
    padding-top: 8px;
  }
}
</style>

