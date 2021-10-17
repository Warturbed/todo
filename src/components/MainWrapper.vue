<template>
  <div class="container">
    <Header/>
    <MotivationText/>
    <router-view></router-view>
    <transition name="fade">
      <Aut
        v-if="isAutPopupVisible"
        :isAutPopupVisible="isAutPopupVisible"
        @closeAut="closeAut"
      />
    </transition>
  </div>
</template>

<script>
import Header from '@/components/Header.vue'
import MotivationText from '@/components/MotivationText.vue'
import Aut from '@/components/Aut.vue'

export default {
  name: 'MainWrapper',
  components: {
    Header,
    MotivationText,
    Aut
  },
  data() {
    return {
      inputValue: '',
      isAutPopupVisible: true
    }
  },
  methods: {
    closeAut() {
      this.isAutPopupVisible = !this.isAutPopupVisible
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
.container {
  z-index: 1;
	position: absolute;
	top: 0;
	bottom: 0;
	width: 100%;
	background-color: var(--color-green);
	display: flex;
	flex-direction: column;
	justify-content: space-between;
}
.fade-enter-active, .fade-leave-active {
  transition: opacity 1s ease;
}
.fade-enter-from, .fade-leave-to {
  opacity: 0;
}
</style>
