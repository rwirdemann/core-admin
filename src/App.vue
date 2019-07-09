<template>
  <div id="app">
    <h1>{{ msg }}</h1>
    <div class="row">
      <div class="col-sm">
        <stage></stage>
      </div>
      <div class="col-sm">
        <stage></stage>
      </div>
      <div class="col-sm">
        <stage></stage>
      </div>
    </div>
  </div>
</template>

<script>
import reach from './components/stage'

export default {
  name: "app",
  data() {
    return {
      msg: "CoRE Admin Panel"
    };
  }
};
</script>