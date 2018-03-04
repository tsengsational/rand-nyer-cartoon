<template>
  <div class="outer">
    <div id="carousel">
      <button id="back" @click="handlePrev"><</button>
      <div class="prev">
        <cartoon v-for="(num, index) in previous" :num="num" :key="index" />
      </div>
      <div class="current">
        <cartoon id="current" :num="current" />
      </div>
      <div class="next">
        <cartoon v-for="(num, index) in next" :num="num" :key="index" />
      </div>
      <button id="next" @click="handleNext">></button>
    </div>
  </div>
</template>

<script>
  import Cartoon from './Cartoon'

  export default {
    data: function () {
      return {
        cartoons: [],
        current: '',
        next: [],
        previous: []
      }
    },
    components: {Cartoon},
    methods: {
      checkUnique: function(next) {
        let unique
        this.current === next || this.previous.includes(next) || this.next.includes(next) ? unique = false : unique = true;
        return unique
      },
      handleNext: function() {
        if (this.next.length === 1) {
          let next = this.randomCartoon()
          let counter = 0
          while (!this.checkUnique(next)) {
            counter++
            next = this.randomCartoon()
            if (counter >= 15) {
              throw 'Error: No more cartoons';
            }
            if (this.checkUnique(next)) {
              break;
            }
          }
          this.next.push(next)
        }
        this.previous.push(this.current)
        this.current = this.next.shift()
      },
      handlePrev: function() {
        if (this.previous.length >= 1) {
          this.next.unshift(this.current)
          this.current = this.previous.pop()
        }
      },
      randomCartoon: function () {
        const num = Math.floor(Math.random() * Math.floor(14) + 1).toString();
        return num
      },
    },
    created: function() {
      const current = this.randomCartoon()
      const next = this.randomCartoon()
      this.current = current
      this.next.push(next)
    }
  }
</script>

<style scoped>
  button {
    background-color: rgba(0, 0, 0, 0);
    box-shadow: 0 0 rgba(0, 0, 0, 0);
    border: none;
    border-radius: 50%;
    color: #F00012;
    font-size: 30px;
    height: 40px;
    position: absolute;
    width: 40px;
    bottom: 20px;
  }
  #back {
    left: calc(50% - 40px);
  }
  #next {
    right: calc(50% - 40px);
  }
  .next {
    overflow: hidden;
    position: absolute;
    right: -100px;
    width: 100px;
  }
  .outer {
    overflow: hidden;
    position: relative;
    padding: 25px 20px;
  }
  .prev {
    left: -100px;
    overflow: hidden;
    position: absolute;
    width: 100px;
  }

  @media (min-width: 600px) {
    #back {
      left: 20px;
    }
    #next {
      right: 20px;
    }
    .outer {
      padding: 50px;
    }
    button {
      top: calc(50% - 20px)
    }
  }
</style>
