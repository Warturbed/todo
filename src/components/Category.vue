<template>
    <div class="category">
        <div class="category__row">
			<h3 class="category__title">Категории</h3>
			<span class="category__counter">{{CATEGORIES.length}}/5</span>
			<button class="category__edit" @click="deleteButtonToggle">
				<svg viewBox="0 0 194.436 194.436" fill="#333" width="25px" height="25px">
					<g>
					<path d="M192.238,34.545L159.894,2.197C158.487,0.79,156.579,0,154.59,0c-1.989,0-3.897,0.79-5.303,2.196l-32.35,32.35
						c-0.004,0.004-0.008,0.01-0.013,0.014L54.876,96.608c-1.351,1.352-2.135,3.166-2.193,5.076l-1.015,33.361
						c-0.063,2.067,0.731,4.068,2.193,5.531c1.409,1.408,3.317,2.196,5.303,2.196c0.076,0,0.153-0.001,0.229-0.004l33.36-1.018
						c1.909-0.058,3.724-0.842,5.075-2.192l94.41-94.408C195.167,42.223,195.167,37.474,192.238,34.545z M154.587,61.587L132.847,39.85
						l21.743-21.743l21.738,21.741L154.587,61.587z M89.324,126.85l-22.421,0.685l0.682-22.422l54.655-54.656l21.741,21.738
						L89.324,126.85z"/>
					<path d="M132.189,117.092c-4.142,0-7.5,3.357-7.5,7.5v54.844H15.001V69.748h54.844c4.142,0,7.5-3.357,7.5-7.5s-3.358-7.5-7.5-7.5
						H7.501c-4.142,0-7.5,3.357-7.5,7.5v124.687c0,4.143,3.358,7.5,7.5,7.5h124.687c4.142,0,7.5-3.357,7.5-7.5v-62.344
						C139.689,120.449,136.331,117.092,132.189,117.092z"/>
					</g>
				</svg>
			</button>
        </div>
        <div class="category__container">
			<ul class="category__list">
				<div class="category__item"
					v-for="category, index in CATEGORIES"
					:key="index" 
					>
					<router-link class="category__name" :to="{name: 'category', params: {idx: index}}">{{category.name}}</router-link>
					<DeleteButton
						@click="deleteCategory(index)"
						v-if="isDeleteBtnVisible"
					/>
				</div>
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
import {mapGetters,mapActions} from 'vuex'
import Button from '@/components/Button.vue'
import DeleteButton from '@/components/DeleteButton.vue'

export default {
  name: 'Category',
  components: {
    Button,
	DeleteButton
  },
  data() {
	return {
		isDeleteBtnVisible: false
	}
  },
  computed: {
    ...mapGetters([
      'CATEGORIES'
    ]),
  },
  methods: {
	...mapActions([
      'DELETE_CATEGORY'
    ]),
    addCategory() {
        this.$router.push({ name: 'add' })
    },
	deleteButtonToggle() {
		this.isDeleteBtnVisible = !this.isDeleteBtnVisible
	},
	deleteCategory(index) {
		this.DELETE_CATEGORY(index)
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
		position: relative;
	}
	&__title {
		font-size: 18px;
		font-weight: bold;
		display: inline-block;
	}
	&__counter {
		color: #666;
		margin-right: 50px;
	}
	&__edit {
		position: absolute;
		right: 0;
		bottom: 0;
		width: 35px;
		height: 35px;
		border: none;
		background: transparent;
		cursor: pointer;
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
		display: flex;
		align-items: center;
		justify-content: center;
		flex-direction: column;
		width: 100%;
	}
	&__item {
		display: inline-block;
		z-index: 1;
		background-color: var(--color-grey);
		padding: 5px 15px;
		border-radius: 5px;
		width: 100%;
		display: flex;
		align-items: center;
		cursor: pointer;
		position: relative;
		& + & {
			margin-top: 10px;
		}
	}
	&__name {
		font-size: 16px;
		width: 95%;
	}
	&__button {
		display: block;
		align-self: center;
	}
}
</style>