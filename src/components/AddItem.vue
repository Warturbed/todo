<template>
    <div class="add-task">
        <div class="add-task__container">
          <div class="add-task__title">{{type ? 'Добавить неотложное дело' : 'Добавить категорию'}}</div>
          <input class="add-task__input" type="text" v-model="addValue">
          <Button
            :name="'Добавить'"
            @click="addItem"
          />
        </div>
      </div>
</template>

<script>
import {mapGetters, mapActions} from 'vuex'
import Button from '@/components/Button.vue'

export default {
  name: 'Task',
  components: {
    Button,
  },
  data() {
    return {
        addValue: ''
    }
  },
computed: {
    ...mapGetters([
      'CATEGORIES'
    ]),
    type() {
        if (this.$route.params.index) {
            return true
        } else {
            return false
        }
    }
},
methods: {
    ...mapActions([
      'ADD_ITEM'
    ]),
    addItem() {
        if (this.type) {
          this.ADD_ITEM([ this.addValue,this.$route.params.index ])
          this.$router.back()
        } else if (!this.type && this.CATEGORIES.length < 5){
          this.ADD_ITEM(this.addValue)
          this.$router.back()
        }
    }
}
}
</script>

<style lang="scss">
.add-task {
	background-color: #fff;
	padding: 30px 30px 40px 30px;
	border-radius: 20px 20px 0 0;
	height: 80%;
	width: 85%;
	margin: 0 auto;
	&__container {
		height: 100%;
		display: flex;
		flex-direction: column;
		align-items: center;
		* {
			margin-top: 20px;
		}
		input {
			font-size: 18px;
			width: 250px;
			height: 30px;
			border: 1px solid #333;
			border-radius: 2px;
		}
	}
	&__title {
		font-size: 20px;
		font-weight: 700;
	}
}

</style>