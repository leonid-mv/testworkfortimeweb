const footer = {
  state: {
    footer: {
      copyright: 'Copyright 2020',
      phone: '8-800-343-02-40'
    }
  },
  mutations: {
    updateFooter(state, changes) {
      Object.assign(state.footer, changes)
    }
  },
  getters: {
    getFooter(state) {
      return state.footer
    }
  },
  namespaced: true
}

export default footer