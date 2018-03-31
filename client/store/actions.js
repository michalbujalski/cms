export default {
  uploadGroup ({ commit }, { group }) {
    commit('initNewGroupCreate')
    setTimeout(() => {
      commit('endNewGroupCreate', { isSuccess: true, error: null })
      commit('toggleNewGroupActive', { isActive: false })
      // mock server response
      commit('addFieldGroup', {
        group: {
          id: group.title, title: group.title, usageNum: 0
        }
      })
    }, 1000)
  }
}