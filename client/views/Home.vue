<template>
  <div class="page">
    <section class="field-types">
      <div class="field-types__header">Field types</div>
      <b-field class="field-types__name field-input" label="Field types">
        <b-input value="aaa"></b-input>
      </b-field>
      <ul>
        <li v-for="type in types" :key="type.id">
          <field-type @on-select="onSelect" 
            :selected="type.id === currentlySelectedId"
            :field-type="type"></field-type>
        </li>
      </ul>
    </section>
    <section class="field-details">
      <div class="field-details__container">
        <div class="field-details__container__header">Field details</div>
      </div>
      <div class="field-details__groups">
        <div class="field-details__groups__header">
          Field groups
        </div>
        <p class="field-details__groups__subtitle">
          Choose a group for this input
        </p>
      </div>
    </section>
  </div>
</template>

<script>
import FieldType from 'components/FieldType'

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
@mixin header(){
  margin-top:10px;
  padding-top:0px;
  font-size: 1.5rem;
  font-weight: bold;
}
.page{
  display: flex;
  flex-direction: row;
}
.field{
  &-input{
    margin-top:8px;
    & > label{
      font-size:0.8rem;
    }
  }
  &-types{
    @include section();
    overflow: hidden;
    overflow-y: auto;
    border-top-right-radius: 0px;
    border-bottom-right-radius: 0px;
    background-color:$section-left-bg;
    width:400px;
    height:500px;
    &__header {
      @include header();
    }
    &__name {
      &>label{
        font-size: 0.9rem;
        padding-top: 2px;
        padding-bottom: 2px;
      }
      padding-bottom:5px;
    }
    &__header {
      @include header();
    }
  }
  &-details{
    @include section();
    border-top-left-radius: 0px;
    border-bottom-left-radius: 0px;
    border-left-width: 0px;
    width: 100%;
    height:500px;
    display: flex;
    flex-direction: row;
    background-color: $section-main-bg;
    &__container{
      flex-grow: 1;
      &__header{
        @include header();
      }
    }
    &__groups{
      @include section();
      margin-top: 46px;
      width:200px;
      height:400px;
      padding: 8px;
      &__header{
        @include header();
        font-size: 1rem;
      }
      &__subtitle{
        margin-top: 6px;
        font-size: 0.6rem;
        color: $section-subtitle-text;
      }
    }
  }
}
</style>

