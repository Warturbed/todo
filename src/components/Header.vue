<template>
    <header class="header">
        <img class="header__avatar" src="../img/sus.jpg" alt="">
        <h1 class="header__title">Список сусных дел</h1>
    </header>
</template>

<script>
export default {
  name: 'Header',
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
.header {
	font-size: 18px;
	font-weight: 400;
	height: 70px;
	display: flex;
	justify-content: center;
	align-items: center;
	&__avatar {
		border-radius: 50px;
		overflow: hidden;
		width: 40px;
		height: 40px;
		margin-right: 10px;
	}
	&__title {
		color: #fff;
	}
}
</style>