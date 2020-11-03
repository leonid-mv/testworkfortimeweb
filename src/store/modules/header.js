const header = {
  state: {
    header: {
      background: null,
      logo: 'Logo',
      topMenu: [
        {
          id: 1,
          title: 'Item 1',
          link: '#'
        },
        {
          id: 2,
          title: 'Item 2',
          link: '#'
        },
        {
          id: 3,
          title: 'Item 3',
          link: '#'
        },
        {
          id: 4,
          title: 'Item 4',
          link: '#'
        },
        {
          id: 5,
          title: 'Item 5',
          link: '#'
        }
      ],
      phone: '8-800-343-02-40',
      mainTitle: 'Main Title',
      mainDescription: 'Main Description',
      buttonTitle: 'Send Message',
      buttonLink: '#'
    }
  },
  mutations: {
    updateHeader(state, changes) {
      Object.assign(state.header, changes)
    },
    updateHeaderMenu(state, changes) {
      const topMenu = state.header.topMenu.concat()
      topMenu.forEach((item, i) => {
        if (item.id === changes.id) {
          topMenu[i] = changes
        }
      })
      state.header.topMenu = topMenu
    },
    addHeaderMenu(state, payload) {
      state.header.topMenu.push(payload)
    },
    removeItemMenu(state, id) {
      state.header.topMenu = state.header.topMenu.filter(item => item.id !== id)
    }
  },
  getters: {
    getHeader(state) {
      return state.header
    }
  },
  namespaced: true
}

export default header