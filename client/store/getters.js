export default {
  fieldTypes: state => state.fieldTypes,
  newFieldType: state => state.newField.type,
  tagGroups: state => Object.keys(state.tagGroups)
    .map(key => {
      return {
        name: key,
        tags: state.tagGroups[key].map(tag => {
          return {
            name: tag,
            selected: state.newField.tags.includes(tag)
          }
        }),
        selected: state.newField.selectedTagGroups.includes(key)
      }
    }),
  fieldGroups: state => Object.keys(state.fieldGroups)
    .map(key => {
      return { ...state.fieldGroups[key], id: key }
    }),
  newGroup: state => state.newGroup,
  currentGroup: state => state.newField.fieldGroup,
  isNewFormValid: state => {
    const { displayLabel, referenceName, type } = state.newField
    return type !== null && displayLabel.length > 2 && referenceName.length > 2
  },
  newField: state => state.newField
}
