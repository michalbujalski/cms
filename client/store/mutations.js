import Vue from 'vue'
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
    Vue.set(state, 'newField',
      { ...state.newField, fieldGroup: id }
    )
  }
}
