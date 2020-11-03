const textSection = {
  state: {
    textSection: {
      title: 'Section Title',
      left: '<p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quasi, quae sed dolor quam eaque vitae fugiat sequi debitis nobis iste vel, dolorum quaerat tempora nulla cum cupiditate mollitia consequatur culpa. Beatae, earum officia molestias at repellendus sequi, commodi nam inventore mollitia totam explicabo fugit animi praesentium, maiores quae accusamus ad?</p><p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quasi, quae sed dolor quam eaque vitae fugiat sequi debitis nobis iste vel, dolorum quaerat tempora nulla cum cupiditate mollitia consequatur culpa. Beatae, earum officia molestias at repellendus sequi, commodi nam inventore mollitia totam explicabo fugit animi praesentium, maiores quae accusamus ad?</p><p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quasi, quae sed dolor quam eaque vitae fugiat sequi debitis nobis iste vel, dolorum quaerat tempora nulla cum cupiditate mollitia consequatur culpa. Beatae, earum officia molestias at repellendus sequi, commodi nam inventore mollitia totam explicabo fugit animi praesentium, maiores quae accusamus ad?</p>',
      right: '<p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quasi, quae sed dolor quam eaque vitae fugiat sequi debitis nobis iste vel, dolorum quaerat tempora nulla cum cupiditate mollitia consequatur culpa. Beatae, earum officia molestias at repellendus sequi, commodi nam inventore mollitia totam explicabo fugit animi praesentium, maiores quae accusamus ad?</p><p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quasi, quae sed dolor quam eaque vitae fugiat sequi debitis nobis iste vel, dolorum quaerat tempora nulla cum cupiditate mollitia consequatur culpa. Beatae, earum officia molestias at repellendus sequi, commodi nam inventore mollitia totam explicabo fugit animi praesentium, maiores quae accusamus ad?</p><p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quasi, quae sed dolor quam eaque vitae fugiat sequi debitis nobis iste vel, dolorum quaerat tempora nulla cum cupiditate mollitia consequatur culpa. Beatae, earum officia molestias at repellendus sequi, commodi nam inventore mollitia totam explicabo fugit animi praesentium, maiores quae accusamus ad?</p>'
    }
  },
  mutations: {
    updateTextSection(state, changes) {
      Object.assign(state.textSection, changes)
    }
  },
  getters: {
    getTextSection(state) {
      return state.textSection
    }
  },
  namespaced: true
}

export default textSection