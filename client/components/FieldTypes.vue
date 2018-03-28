<template>
  <section class="field-types">
    <div class="field-types__header">Field types</div>
    <b-field class="field-types__name field-input" label="Field types">
      <b-input value=""></b-input>
    </b-field>
    <ul>
      <li v-for="type in types" :key="type.id">
        <field-type @on-select="onSelect" 
          :selected="type.id === currentlySelectedId"
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
  methods: {
    onSelect(payload){
      this.currentlySelectedId = payload.id
    }
  },
  mounted(){
    this.currentlySelectedId = this.types[0].id
  },
  data () {
    return {
      currentlySelectedId: 0,
      types: [
        {
          id: 1,
          icon: "icon-text",
          name: "Text",
          definition: "String of text",
          defaultDisplay: "Free-form text input"
        },
        {
          id: 2,
          icon: "icon-date",
          name: "Date",
          definition: "Standard ISO format date",
          defaultDisplay: "Datepicker, with configurable format"
        },
        {
          id: 3,
          icon: "icon-car",
          name: "VIN",
          definition: "Vehicle Identification Number",
          defaultDisplay: "Free-form text input"
        }
      ]
    }
  }
}
</script>

<style lang="scss">
@import '../style/_vars.scss';
.field-types{
  @include section();
  overflow: hidden;
  overflow-y: auto;
  min-width: 200px;
  border-top-right-radius: 0px;
  border-bottom-right-radius: 0px;
  background-color:$section-left-bg;
  width:400px;
  height:600px;
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

