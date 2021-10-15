<template>
    <div class="category">
        <div class="category__row">
          <h3 class="category__title">Категории:</h3><span class="category__counter">{{CATEGORIES.length}}/5</span>
        </div>
        <div class="category__container">
          <ul class="category__list">
                <router-link  class="category__item"
                    v-for="category, index in CATEGORIES"
                    :key="index"
                    :to="{name: 'category', params: {idx: index}}" 
                    >
                    <span class="category__name">{{category.name}}</span>
                </router-link >
          </ul>
          <Button
            v-if="CATEGORIES.length < 5"
            :name="'Добавить категорию'"
            @click="addCategory"
          />
        </div>
      </div>
</template>

<script>
import {mapGetters} from 'vuex'
import Button from '@/components/Button.vue'

export default {
  name: 'Category',
  components: {
    Button,
  },
  computed: {
    ...mapGetters([
      'CATEGORIES'
    ]),
  },
  methods: {
    addCategory() {
        this.$router.push({ name: 'add' })
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
.category {
	background-color: #fff;
	padding: 30px 30px 40px 30px;
	border-radius: 20px 20px 0 0;
	height: 70%;
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
		margin-top: 10px;
		height: 90%;
		width: 100%;
		display: flex;
		flex-direction: column;
		justify-content: space-between;
	}
	&__list {
		overflow-y: auto;
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
		align-items: center;
		cursor: pointer;
		& + & {
			margin-top: 10px;
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