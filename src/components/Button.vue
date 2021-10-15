<template>
    <button class="button category__button" >{{name}}</button>
</template>

<script>

export default {
  name: 'Category',
  props: {
	item_data: Object,
	name: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
.button {
	color: #fff;
	font-family: serif;
	font-size: 18px;
	font-weight: bold;
	width: 220px;
	height: 40px;
	border: none;
	border-radius: 5px;
	background-color: var(--color-green);
	cursor: pointer;
}
</style>