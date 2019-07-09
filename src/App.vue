<template>
  <div class="container-fluid" id="app">
    <h1>{{ msg }}</h1>
    <div class="row">
      <div class="col">
        <stage stage="Development" baseURL="core-ds-dev.phantomworksngwcore.de"></stage>
      </div>
      <div class="col">
        <stage stage="QA" baseURL="core-ds-qa.phantomworksngwcore.de"></stage>
      </div>
      <div class="col">
        <stage stage="Integration" baseURL="core-ds-int.phantomworksngwcore.de"></stage>
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
      msg: "The CoRE Admin Panel"
    };
  }
};
</script>