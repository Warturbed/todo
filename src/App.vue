<template>
    <MainWrapper/>
</template>

<script>
import MainWrapper from '@/components/MainWrapper.vue'

export default {
  name: 'App',
  components: {
    MainWrapper
  },
}

</script>

<style lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Bad+Script&display=swap');
* {
	color: #333;
	letter-spacing: 1px;
	font-family: 'Bad Script', cursive;
	box-sizing: border-box;
	list-style: none;
	outline: none;
	text-decoration: none;
	margin: 0;
	padding: 0;
}
:root {
	--color-green: #88b680;
	--color-grey: #f0f4f5;
}
</style>
