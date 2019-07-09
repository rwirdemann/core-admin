import Vue from 'vue'

Vue.component('stage', {
  props: ['stage', "coredsBaseURL"],
  template: `
    <div>
      <h4>{{stage}}</h4>
      <p>CoRE-DS: <span>{{coredsVersion}}</span></p>
      <p>CoRE: <span>{{coreVersion}}</span></p>
    </div>
  `,
  data() {
    return {
      coredsVersion: "N/A",
      coreVersion: "N/A",
    }
  },
  created() {
    fetch('https://' + this.coredsBaseURL + '/about')
      .then(response => response.json())
      .then(json => {
        this.coredsVersion = json["CoRE-DS Version"]
        this.coreVersion = json["CoRE Version"]
      })
      .catch((err) => {
        console.error(err)
      })
  },
  methods: {
    loadModels: function () {
      this.models = this.vinMap[this.selected.trim()]
      this.substances = []
    },
  }
})