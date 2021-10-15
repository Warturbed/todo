<template>
    <div class="task">
        <div class="task__row">
          <h3 class="task__title">{{ CATEGORIES[$route.params.idx].name }}</h3>
          <span class="category__counter">{{CATEGORIES[$route.params.idx].tasks.filter( item => {return item.checked === true}).length}}/{{ CATEGORIES[$route.params.idx].tasks.length }} дел выполнено</span>
        </div>
        <div class="task__container">
          <ul class="task__list">
            <TaskItem
                v-for="task, index in CATEGORIES[$route.params.idx].tasks"
                :key="index"
                :task_data="task"
                :category_index="Number($route.params.idx)"
                :task_index="index"
            />
          </ul>
          <Button
            :item_data="CATEGORIES[$route.params.idx]"
            :name="'Добавить задачу'"
            @click="addTask"
          />
        </div>
      </div>
</template>

<script>
import {mapGetters} from 'vuex'
import Button from '@/components/Button.vue'
import TaskItem from '@/components/TaskItem.vue'

export default {
  name: 'Task',
  components: {
    Button,
    TaskItem
  },
  data() {
    return {
    }
  },
computed: {
    ...mapGetters([
      'CATEGORIES'
    ]),
},
methods: {
    addTask() {
        this.$router.push({ name: 'add', params: { index: this.$route.params.idx } })
    }
}
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
.task {
	background-color: #fff;
	padding: 30px 30px 40px 30px;
	border-radius: 20px 20px 0 0;
	height: 90%;
	width: 100%;
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	&__row {
		display: flex;
		justify-content: space-between;
		align-items: center;
	}
	&__title {
		font-size: 18px;
		font-weight: bold;
		display: inline-block;
	}
	&__counter {
		color: #666;
	}
	&__container {
		height: 90%;
		width: 100%;
		display: flex;
		flex-direction: column;
		justify-content: space-between;
	}
	&__list {
		display: flex;
		align-items: center;
		justify-content: center;
		flex-direction: column;
		width: 100%;
	}
	&__item {
		background-color: var(--color-grey);
		padding: 5px 15px;
		border-radius: 5px;
		width: 100%;
		display: flex;
		justify-content: space-between;
		align-items: center;
		& + & {
			margin-top: 10px;
		}
		input {
			display: none;
		}
		input:checked + label:before {
			background-image: url('../img/ok.png');
		}
		label {
			position: relative;
			&::before {
				content: '';
				width: 18px;
				height: 18px;
				border: 2px solid #666;
				border-radius: 2px;
				background-repeat: no-repeat;
				background-position: 50%;
				background-size: 70%;
				position: absolute;
				top: -10px;
				right: 3px;
			}
		}
	}
	&__name {
		font-size: 16px;
	}
	&__button {
		display: block;
		align-self: center;
	}
}

</style>