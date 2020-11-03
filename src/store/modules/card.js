const card = {
  state: {
    card: {
      title: 'Card Section',
      items: [
        {
          id: 1,
          img: null,
          title: 'Card Title 1',
          description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tempore, blanditiis! Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tempore, blanditiis!',
          buttonName: 'More',
          link: '#'
        },
        {
          id: 2,
          img: null,
          title: 'Card Title 2',
          description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tempore, blanditiis! Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tempore, blanditiis!',
          buttonName: 'More',
          link: '#'
        },
        {
          id: 3,
          img: null,
          title: 'Card Title 3',
          description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tempore, blanditiis! Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tempore, blanditiis!',
          buttonName: 'More',
          link: '#'
        },
      ]
    }
  },



  mutations: {
    updateCard(state, changes) {
      Object.assign(state.card, changes)
    },


    updateCardItem(state, changes) {
      const keyObject = Object.keys(changes)[1]
      const items = state.card.items.concat()
      items.forEach((item, i) => {
        if (item.id === changes.id) {
          items[i][keyObject] = changes[keyObject]
        }
      })
      state.card.items = items
    },


    
    addHeaderMenu(state, payload) {
      state.header.topMenu.push(payload)
    },
    removeItemMenu(state, id) {
      state.header.topMenu = state.header.topMenu.filter(item => item.id !== id)
    }
  },



  getters: {
    getCard(state) {
      return state.card
    }
  },
  namespaced: true
}

export default card