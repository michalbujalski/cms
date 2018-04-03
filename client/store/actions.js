import { uploadGroup, createNewField } from '../api'

export default {
  uploadGroup: async ({ commit }, { group }) => {
    commit('initNewGroupCreate')
    const uploadedGroup = await uploadGroup(group)
    commit('endNewGroupCreate', { isSuccess: true, error: null })
    commit('toggleNewGroupActive', { isActive: false })
    commit('addFieldGroup', {
      group: {
        id: uploadedGroup.title, title: uploadedGroup.title, usageNum: 0
      }
    })
  },
  createNewField: async ({ commit, state }) => {
    commit('initNewFieldCreate')
    const newField = await createNewField(state.newField)
    commit('endNewFieldCreate', { isSuccess: true, error: null })
  }
}
