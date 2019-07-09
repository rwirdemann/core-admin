import Vue from 'vue'

Vue.component('stage', {
  props: ['stage', "baseURL"],
  template: `
    <div>
      <h4>{{stage}}</h4>
      CoRE-DS Version: <span>{{coredsVersion}}</span>
    </div>
  `,
  data() {
    return {
      coredsVersion: "",
    }
  },
  created() {
    fetch('https://' + this.baseURL + '/about')
      .then(response => response.json())
      .then(json => {
        this.coredsVersion = json["CoRE-DS Version"]
      })
      .catch((err) => {
        this.coredsVersion = "N/A"
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