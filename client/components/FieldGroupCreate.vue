<template>
  <div clas="field-groups__add-new">
    <b-field class="field-groups__add-new__field field-input" label="New group name">
      <b-input class="field-groups__add-new__field__input"
        v-model="newGroupTitle"
        v-validate="'required|min:2'"
        name="newGroupTitle"
        :disabled="isLoading"></b-input>
      <div
        class="field-groups__add-new__field__error"
        v-show="errors.has('newGroupTitle')">
        {{ errors.first('newGroupTitle') }}
      </div>
    </b-field>
    <div class="field-groups__add-new__actions" v-show="!isLoading">
      <button @click="cancelAddingNewGroup" class="button field-groups__add-new__actions__btn-cancel">Cancel</button>
      <button @click="saveNewGroup" :disabled="errors.has('newGroupTitle')" class="button field-groups__add-new__actions__btn-save">Save</button>
    </div>
    <img v-show="isLoading" class="field-groups__add-new__progress" src="/static/progress.webp"><img>
  </div>
</template>
<script>
export default {
  props:{
    isLoading: {
      type: Boolean,
      default: false
    }
  },
  data () {
    return {
      newGroupTitle: ''
    }
  },
  methods: {
    saveNewGroup () {
      this.$emit('save',{})
    },
    cancelAddingNewGroup () {
      this.$emit('cancel',{})
    }
  },
  watch: {
    newGroupTitle (newVal) {
      this.$emit('on-title-update', {title: newVal})
    }
  }
}
</script>
<style lang="scss">
@import '../style/_vars.scss';
$height: 32px;
.field-groups__add-new{
  display: flex;
  flex-direction: column;
  align-items: center;
  &__progress{
    width: 30px;
    height: 30px;
  }
  &__actions{
    display: flex;
    flex-direction: row;
    padding-bottom: 16px;
    &__btn-save{
      @include btn-action-confirm();
      height: $height;
      margin-left: 8px;
    }
    &__btn-cancel{
      @include btn-action-cancel();
      height: $height;
      margin-right: 8p;
    }
  }
  &__field{
    flex-direction: column;
    &__error{
      @include error()
    }
  }
}
</style>

