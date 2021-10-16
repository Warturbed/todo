<template>
    <div class="task__item">
        <span class="task__name">{{task_data.name}}</span>
        <input class="task__input" type="checkbox" :id="task_index" v-model="isChecked">
        <label :for="task_index" @click="changeStatus" v-if="!deleleBtnVisible"></label>
        <DeleteButton
          class="task__delete"
          v-if="deleleBtnVisible"
          @click="deleteTask"
				/>
    </div>
</template>

<script>
import {mapGetters, mapActions} from 'vuex'
import DeleteButton from '@/components/DeleteButton.vue'

export default {
  name: 'TaskItem',
  components: {
    DeleteButton
  },
  props: {
    task_data: Object,
    task_index: Number,
    category_index: Number,
    deleleBtnVisible: Boolean
  },
  data() {
    return {
      isChecked: this.task_data.checked
    }
  },
  computed: {
    ...mapGetters([
      'CATEGORIES'
    ]),
  },
  methods: {
    ...mapActions([
      'CHANGE_STATUS',
      'DELETE_TASK'
    ]),
    changeStatus() {
      this.CHANGE_STATUS({taskIdx: this.task_index, categoryIdx: this.category_index})
    },
    deleteTask() {
      this.DELETE_TASK({taskIdx: this.task_index, categoryIdx: this.category_index})
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
</style>