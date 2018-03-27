<template>
  <div class="page">
    <field-types></field-types>
    <field-details></field-details>
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
.page{
  display: flex;
  flex-direction: row;
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

