import Vue from 'vue'

Vue.component('stage', {
  template: `
    <div><q
      CoRE-DS Version: <span>{{coredsVersion}}</span>
    </div>
  `,
  data() {
    return {
      baseUrl: "core-ds-dev.phantomworksngwcore.de",
      coredsVersion: "",
    }
  },
  created() {
    fetch('https://' + this.baseUrl + '/about')
      .then(response => response.json())
      .then(json => {
        this.coredsVersion = json["CoRE-DS Version"]
      })
      .catch((err) => console.error(err))
  },
  methods: {
    loadModels: function () {
      this.models = this.vinMap[this.selected.trim()]
      this.substances = []
    },
  }
})