<template>
  <div class="field-add">
    <field-types class="field-add__types"></field-types>
    <field-details class="field-add__details"></field-details>
    <div class="field-add__controls">Controls</div>
  </div>
</template>

<script>
import FieldDetails from 'components/FieldDetails'
import FieldTypes from 'components/FieldTypes'
export default {
  components: {
    FieldDetails, FieldTypes
  }
}
</script>

<style lang="scss">
@import '../style/_vars.scss';
.field-add{
  display: grid;
  grid-template-rows: auto 72px;
  grid-template-columns: 300px auto;
  &__types{
    grid-column-start: 1;
    grid-column-end: 2;
  }
  &__details{
    grid-column-start: 2;
    grid-column-end: 3;
  }
  &__controls{
    grid-column-start: 1;
    grid-column-end: 3;
    padding-top: 20px;
    font-size: 0.8rem;
  }
}
.field{
  &-input{
    margin-top:8px;
    & > label{
      font-size: 0.9rem;
      padding-top: 2px;
      padding-bottom: 2px;
    }
  }
}
</style>

