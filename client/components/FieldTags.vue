<template>
  <section class="tags">
    <div class="tags__header">Tags</div>
    <div class="tags__container">
      <div class="tags__container__group">
        <h6 class="tags__container__group__header">Tag group</h6>
        <div class="tags__container__group__tags">
          <tag></tag>
          <tag></tag>
          <tag></tag>
          <tag></tag>
          <tag></tag>
          <tag></tag>
          <tag></tag>
          <tag></tag>
          <tag></tag>
          <tag></tag>
          <tag></tag>
          <tag></tag>
          <tag></tag>
        </div>
      </div>
      <div class="tags__container__tag-items">
        <h6 class="tags__container__tag-items__header">Tags</h6>
        <div class="tags__container__tag-items__tags">
          <tag></tag>
          <tag></tag>
          <tag></tag>
          <tag></tag>
          <tag></tag>
          <tag></tag>
          <tag></tag>
          <tag></tag>
          <tag></tag>
          <tag></tag>
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
  }
}
</script>
<style lang="scss">
@mixin header(){
  font-weight: bold;
  font-size: 0.9rem;
}
@mixin tags(){
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  padding-top: 8px;
}
.tags{
  font-size: 16px;
  &__container{
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    &__group{
      flex: 1;
      min-width: 150px;
      &__header{
        @include header();
      }
      &__tags{
        @include tags();
      }
    }
    &__tag-items{
      flex: 1;
      min-width: 150px;
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
    align-self: stretch;
    font-weight: bold;
    padding-bottom: 15px;
    padding-top: 8px;
  }
}
</style>

