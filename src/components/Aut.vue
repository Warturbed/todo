<template>
  <div class="aut-popup">
    <div class="aut-popup__container">
        <h3 class="aut-popup__title">Введите ключевое слово</h3>
        <input class="aut-popup__input" type="text" v-model.trim="inputValue">
        <p class="aut-popup__success" v-show="isSuccessTextVisible">Чертовски верно :)</p>
    </div>
  </div>
</template>

<script>

export default {
  name: 'Aut',
  data() {
    return {
      inputValue: '',
      isSuccessTextVisible: false
    }
  },
  watch: {
    inputValue: function () {
      if (this.inputValue.toLowerCase() === 'пуська') {
        this.isSuccessTextVisible = !this.isSuccessTextVisible
        setTimeout(() => this.$emit('closeAut'), 2000);
      }
    },
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
.aut-popup {
    z-index: 2;
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    background: var(--color-green);
    display: flex;
    justify-content: center;
    align-items: center;
    &__container {
        height: 150px;
    }
    &__title {
        color: #fff;
        font-size: 25px;
    }
    &__input {
        font-size: 18px;
        height: 35px;
        padding: 5px 10px;
        width: 100%;
        border: 2px solid #333;
        border-radius: 5px;
    }
    &__success {
        margin-top: 5px;
        font-size: 20px;
        text-align: center;
    }
}
</style>