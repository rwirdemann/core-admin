import Vue from 'vue'

Vue.component('reach', {
  template: `
    <div>
      <select v-model="selected" v-on:change="loadModels()">
        <option v-for="vin in vins">
          {{ vin.vin_class }}
          {{ vin.vin_year }} 
        </option>
      </select>
    </div>
  `,
  data() {
    return {
      baseUrl: "reach-dev.skunkworksngwsa.de",
      selected: "",
      selectedModel: "",
      vins: [],
      models: [],
      substances: [],
      vinMap: {}
    }
  },
  created() {
    fetch('https://' + this.baseUrl + '/api/v2/models')
      .then(response => response.json())
      .then(json => {
        this.vins = json
        var self = this;
        this.vins.forEach(function (element) {
          var key = element.vin_class + " " + element.vin_year
          self.vinMap[key] = element.models
        });
      })
      .catch((err) => console.error(err))
  },
})