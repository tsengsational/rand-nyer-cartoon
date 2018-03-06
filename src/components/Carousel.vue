<template>
  <div class="outer" v-bind:class="{flip}">
    <div id="carousel">
      <div class="front">
        <div class="prev">
          <cartoon v-for="(num, index) in previous" :num="num" :key="index" />
        </div>
        <div class="current" v-bind:class="{fadeIn, fadeOut, hide}">
          <cartoon id="current" :num="current" />
        </div>
        <div class="next">
          <cartoon v-for="(num, index) in next" :num="num" :key="index" />
        </div>
        <button id="back" @click="handlePrev"><</button>
        <button id="next" @click="handleNext">></button>
      </div>
      <div class="back">
        <div class="back-text">
          Your last 5 viewed
        </div>
        <div class="grid">
          <cartoon v-for="(num, index) in cartoons" :num="num" :key="index" />
        </div>
      </div>
    </div>
    <div id="flip"><font-awesome-icon :icon="icon" @click="handleFlip"/></div>
  </div>
</template>

<script>
  import Cartoon from './Cartoon'
  import FontAwesomeIcon from '@fortawesome/vue-fontawesome'
  import faThLarge from '@fortawesome/fontawesome-free-solid/faThLarge'

  export default {
    data: function () {
      return {
        current: '',
        next: [],
        previous: [],
        fadeIn: false,
        fadeOut: false,
        hide: false,
        flip: false
      }
    },
    components: {Cartoon, FontAwesomeIcon},
    methods: {
      checkUnique: function(next) {
        let unique
        this.current === next || this.previous.includes(next) || this.next.includes(next) ? unique = false : unique = true;
        return unique
      },
      handleFlip: function() {
        this.flip = !this.flip
      },
      handleNext: function() {
        let self = this
        if (this.next.length === 1) {
          let next = this.randomCartoon()
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
    },
    computed: {
      cartoons: function() {
        let toons = this.previous.slice(0, this.previous.length)
        toons.push(this.current)
        toons.concat(this.next)
        if (toons.length >= 5) {
          let length = toons.length
          let del = length - 5
          toons.splice(0, del)
        }
        console.log(toons)
        return toons
      },
      icon: function() {
        return faThLarge
      }
    }
  }
</script>

<style lang="scss">
  button {
    background-color: rgba(0, 0, 0, 0);
    box-shadow: 0 0 rgba(0, 0, 0, 0);
    border: none;
    border-radius: 50%;
    color: #F00012;
    cursor: pointer;
    font-size: 30px;
    height: 40px;
    position: absolute;
    width: 40px;
    bottom: -5px;
  }
  #back {
    left: calc(50% - 45px);
  }
  #flip {
    bottom: 25px;
    color: gray;
    cursor: pointer;
    left: calc(50% - 8px);
    opacity: .6;
    position: absolute;
  }
  #next {
    right: calc(50% - 45px);
  }

  #carousel {
    transition: 0.6s;
    transform-style: preserve-3d;
  }
  .back {
    position: absolute;
    right: 0;
    top: 0;
    transform: rotateY(180deg);
    width: 100%
  }
  .back-text {
    position: absolute;
    left: calc(50% - 65px);
    top: 20px;
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
  .front, .back {
    backface-visibility: hidden;
  }
  .front {
    z-index: 2;
		transform: rotateY(0deg)
  }
  .grid {
    align-items: center;
    display: grid;
    grid-column-gap: 10px;
    grid-row-gap: 10px;
    grid-template-columns: repeat(5, 20%);
    grid-auto-rows: 20%;
  }
  .hide {
    opacity: 0;
  }
  .next {
    overflow: hidden;
    position: absolute;
    right: -200px;
    width: 100px;
  }
  .outer {
    overflow: hidden;
    position: relative;
    padding: 25px 20px;
    perspective: 1000px;
  }
  .outer.flip #carousel {
    transform: rotateY(180deg)
  }
  .outer.flip>#flip {
    left: calc(50% - 8px);
    top: 5%;
  }
  .prev {
    left: -200px;
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
    #flip {
      top: calc(50% - 7px);
      left: 50px;
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
