<template>
  <section class="field-types">
    <div class="field-types__header">Field types</div>
    <b-field class="field-types__name field-input" label="Field types">
      <b-input value=""></b-input>
    </b-field>
    <ul>
      <li v-for="type in types" :key="type.id">
        <field-type @on-select="onSelect" 
          :selected="type.id === currentType"
          :field-type="type"></field-type>
      </li>
    </ul>
  </section>
</template>
<script>
import FieldType from './FieldType'
export default {
  components: {
    FieldType
  },
  props: {
    types: {
      type: Array,
      default: () => []
    },
    currentType: {
      type: Number,
      required: true
    }
  },
  methods: {
    onSelect(payload){
      this.$emit('on-select',{ id: payload.id })
    }
  },
  mounted(){
  },
  data () {
    return {
      currentlySelectedId: 0
    }
  }
}
</script>

<style lang="scss">
@import '../style/_vars.scss';
@import "~bulma/sass/utilities/_all";
.field-types{
  @include section();
  overflow: hidden;
  overflow-y: auto;
  @include mobile(){
    width: $field-types-width-mobile;
  }
  @include tablet-only(){
    width: $field-types-width-tablet;
  }
  width: $field-types-width-desktop;
  border-top-right-radius: 0px;
  border-bottom-right-radius: 0px;
  background-color:$section-left-bg;
  &__header {
    @include section-header();
  }
  &__name {
    padding-bottom:5px;
  }
  &__header {
    @include section-header();
  }
}
</style>

