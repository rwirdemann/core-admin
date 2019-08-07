<template>
  <div id="app">
    <div class="row">
      <div class="col-4">
        <Stage stage="Development" coredsBaseURL="core-ds-dev.phantomworksngwcore.de"></Stage>
      </div>
      <div class="col-4">
        <Stage stage="QA" coredsBaseURL="core-ds-qa.phantomworksngwcore.de"></Stage>
      </div>
      <div class="col-4">
        <Stage stage="Integration" coredsBaseURL="core-ds-int.phantomworksngwcore.de"></Stage>
      </div>
    </div>
  </div>
</template>

<script>
import Stage from "./components/Stage.vue";

export default {
  name: "app",
  components: {
    Stage,
  },
  data() {
    return {
      msg: "The CoRE Admin Panel"
    };
  }
};
</script>