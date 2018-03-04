<template>
  <div class="cartoon-container">
    <img :src="webPackPath">
  </div>
</template>

<script>
  export default {
    props: ['num'],
    data: function (){
      return {
        src: ''
      }
    },
    computed: {
      webPackPath: function() {
        return require("../assets/cartoons/" + this.num + ".jpg")
      }
    }
  }
</script>

<style scoped>
img {
  align-self: center;
  border-radius: 10px;
  max-width: 100%;
  max-height: 100%;
}

.cartoon-container {
  display: flex;
  height: 70vh;
  justify-content: center;
}
</style>
