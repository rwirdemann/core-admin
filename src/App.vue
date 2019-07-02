<template>
  <div id="app">
    <h1>{{ msg }}</h1>
    <reach></reach>
  </div>
</template>

<script>
import reach from './components/reach'

export default {
  name: "app",
  data() {
    return {
      msg: "REACH Web UI"
    };
  }
};
</script>