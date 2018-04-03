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
  },
  createNewField ({ commit }) {
    commit('initNewFieldCreate')
    return new Promise((resolve, reject) => {
      setTimeout(
        () => {
          // mock server response
          commit('endNewFieldCreate', { isSuccess: true, error: null })
          resolve()
        }
      , 1000)
    })
  }
}