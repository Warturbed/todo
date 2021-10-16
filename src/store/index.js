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
    ADD_ITEM_IN_STATE: (state, item) => {
      if (item.index) {
        state.categories[item.index].tasks.push({
          name: item.value,
          checked: false
        })
      } else {
        state.categories.push({
          name: item.value,
          tasks: []
        })
      }
    },
    DELETE_CATEGORY_FROM_STATE: (state, index) => {
      state.categories.splice(index, 1)
    },
    DELETE_TASK_FROM_CATEGORY: (state, object) => {
      state.categories[object.categoryIdx].tasks.splice(object.taskIdx, 1)
    },
  },
  actions: {
    CHANGE_STATUS({commit}, item) {
      commit('CHANGE_STATUS_IN_STATE', item);
    },
    ADD_ITEM({commit}, item) {
      commit('ADD_ITEM_IN_STATE', item);
    },
    DELETE_CATEGORY({commit}, index) {
      commit('DELETE_CATEGORY_FROM_STATE', index);
    },
    DELETE_TASK({commit}, object) {
      commit('DELETE_TASK_FROM_CATEGORY', object);
    },
  },
  getters: {
    CATEGORIES(state) {
      return state.categories;
    },
  }
})
