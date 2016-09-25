<template>
  <div id="app">
    <h1>Remaining Time: {{ remainingTime }}</h1>
    <button name="button" @click="start" v-bind:disabled="active">Start</button>
    <button name="button" @click="stop" v-bind:disabled="!active">Stop</button>
    <button name="button" @click="reset" v-bind:disabled="active">Reset</button>
  </div>
</template>

<script>
import { mapActions } from 'vuex'

export default {
  computed: {
    remainingTime () {
      return this.$store.state.remainingTime
    },
    active () {
      return this.$store.state.active
    }
  },
  methods: mapActions(['start', 'stop', 'reset'])
}
</script>

<style>
html {
  height: 100%;
}

body {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
}

#app {
  color: #2c3e50;
  margin-top: -100px;
  max-width: 600px;
  font-family: Source Sans Pro, Helvetica, sans-serif;
  text-align: center;
}

</style>
