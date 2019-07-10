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
    getVersion(this.coredsBaseURL).then(json => {
      this.coredsVersion = json["CoRE-DS Version"]
      this.coreVersion = json["CoRE Version"]
    })
  },
  methods: {
  }
})

async function getVersion(url) {
  let response = await fetch('https://' + url + '/about')
  let data = await response.json()
  return data
}