<template>
  <div class="container">
    <Header/>
    <router-view></router-view>
  </div>
</template>

<script>
import Header from '@/components/Header.vue'

export default {
  name: 'MainWrapper',
  components: {
    Header,
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
.container {
	position: absolute;
	top: 0;
	bottom: 0;
	width: 100%;
	background-color: var(--color-green);
	display: flex;
	flex-direction: column;
	justify-content: space-between;
}
</style>
