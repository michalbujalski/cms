import Vue from 'vue'
import initState from './initState'
export default {
  setFieldType (state, { id }) {
    Vue.set(state.newField, 'type', id)
  },
  updateFormField (state, { displayLabel, defaultValue, validationRegex, referenceName, selectedTags, selectedTagGroups }) {
    Vue.set(state, 'newField',
      { ...state.newField,
        displayLabel: displayLabel,
        defaultValue: defaultValue,
        validationRegex: validationRegex,
        referenceName: referenceName,
        tags: selectedTags,
        selectedTagGroups: selectedTagGroups
      }
    )
  },
  toggleNewGroupActive (state, { isActive }) {
    Vue.set(state, 'newGroup', { ...state.newGroup, isActive: isActive, title: '' })
  },
  updateNewGroup (state, { title }) {
    Vue.set(state, 'newGroup', { ...state.newGroup, title: title })
  },
  initNewGroupCreate (state) {
    Vue.set(state, 'newGroup', { ...state.newGroup, isLoading: true, error: null, isSuccess: false })
  },
  endNewGroupCreate (state, { isSuccess, error }) {
    Vue.set(state, 'newGroup', { ...state.newGroup, isLoading: false, error: error, isSuccess: isSuccess })
  },
  addFieldGroup (state, { group }) {
    Vue.set(state, 'fieldGroups', { ...state.fieldGroups, [group.id]: group })
  },
  toggleGroupSelection (state, { id }) {
    const selection = state.newField.fieldGroup !== id ? id : null
    Vue.set(state, 'newField',
      { ...state.newField, fieldGroup: selection }
    )
  },
  endNewFieldCreate (state, { isSuccess, error }) {
    let newField = null
    if (isSuccess) {
      // reset to initial state
      newField = { ...initState.newField, isSuccess: isSuccess, isLoading: false, error: null }
    } else {
      newField = { ...state.newField, isLoading: false, error: error, isSuccess: false }
    }
    Vue.set(state, 'newField', newField)
  },
  initNewFieldCreate (state) {
    Vue.set(state, 'newField',
      { ...state.newField, isLoading: true }
    )
  }
}
