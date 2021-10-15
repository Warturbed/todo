import { createStore } from 'vuex'

export default createStore({
  state: {
    categories: [
      {
        id: 1,
        name: 'Дела по дому',
        tasks: [
          {
            name: 'Помыть полы',
            checked: true
          },
          {
            name: 'Помыть посуду',
            checked: false
          },
          {
            name: 'Развесить бельё',
            checked: false
          }
        ]
      },
      {
        id: 2,
        name: 'На вечер',
        tasks: [
          {
            name: 'Прогуляться',
            checked: true
          },
          {
            name: 'Дыхательная гимнастика',
            checked: true
          },
          {
            name: 'Почитать книгу',
            checked: false
          }
        ]
      }
    ]
  },
  mutations: {
    CHANGE_STATUS_IN_STATE: (state, item) => {
      state.categories[item.categoryIdx].tasks[item.taskIdx].checked = !state.categories[item.categoryIdx].tasks[item.taskIdx].checked
    },
    ADD_ITEM_IN_STATE: (state, value) => {
      if (value.length > 1) {
        state.categories[value[1]].tasks.push({
          name: value[0],
          checked: false
        })
      } else {
        state.categories.push({
          name: value,
          tasks: []
        })
      }
    },
  },
  actions: {
    CHANGE_STATUS({commit}, item) {
      commit('CHANGE_STATUS_IN_STATE', item);
    },
    ADD_ITEM({commit}, value) {
      commit('ADD_ITEM_IN_STATE', value);
    },
  },
  getters: {
    CATEGORIES(state) {
      return state.categories;
    },
  }
})
