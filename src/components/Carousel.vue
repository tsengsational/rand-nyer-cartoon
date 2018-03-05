<template>
  <div class="outer">
    <div id="carousel">
      <button id="back" @click="handlePrev"><</button>
      <div class="prev">
        <cartoon v-for="(num, index) in previous" :num="num" :key="index" />
      </div>
      <div class="current" v-bind:class="{fadeIn, fadeOut, hide}">
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
        previous: [],
        fadeIn: false,
        fadeOut: false,
        hide: false
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
        let self = this
        if (this.next.length === 1) {
          var next = this.randomCartoon()
          let counter = 0
          this.fadeOut = true
          setTimeout(function () {
            self.fadeOut = false
            while (!self.checkUnique(next)) {
              counter++
              next = self.randomCartoon()
              if (counter >= 15) {
                throw 'Error: No more cartoons';
              }
              if (self.checkUnique(next)) {
                break;
              }
            }
            self.previous.push(self.current)
            self.current = self.next.shift()
            self.next.push(next)
          }, 250);
        }
        if (this.next.length > 1) {
          this.previous.push(this.current)
          this.current = this.next.shift()
        }
        this.fadeIn = true
        setTimeout(function () {
          self.fadeIn = false
        }, 250);
      },
      handlePrev: function() {
        if (this.previous.length >= 1) {
          this.next.unshift(this.current)
          this.fadeIn = false
          this.fadeOut = true
          let self = this
          setTimeout(function () {
            self.fadeOut = false
            self.current = self.previous.pop()
            self.fadeIn = true
          }, 250);
          setTimeout(function() {
            self.fadeIn = false
          }, 250);
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
  .fadeIn {
    -webkit-animation-name: fadeIn;
    animation-name: fadeIn;
    animation-duration: .25s;
  }
  .fadeOut {
    -webkit-animation-name: fadeOut;
    animation-name: fadeOut;
    animation-duration: .25s;
  }
  .hide {
    opacity: 0;
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

  @-webkit-keyframes fadeIn {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
  @keyframes fadeIn {
    from {
      opacity: 0;
    }

    to {
      opacity: 1;
    }
  }
  @-webkit-keyframes fadeOut {
    from {
      opacity: 1;
    }

    to {
      opacity: 0;
    }
  }

@keyframes fadeOut {
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
  }
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
