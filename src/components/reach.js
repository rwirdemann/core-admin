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
      <select v-model="selectedModel" v-on:change="fetchSubstances()">
        <option v-for="model in models">
          {{ model.model_name }}
          {{ model.base_model }} 
          {{ model.model_year }} 
        </option>
      </select>
      <ul>
        <li v-for="s in substances">{{ s.TeivonDE }} {{ s.CAS }} {{ s.NameDE }}</li>
      </ul>
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
  methods: {
    loadModels: function () {
      this.models = this.vinMap[this.selected.trim()]
      this.substances = []
    },
    fetchSubstances: function (event) {
      var a = this.selectedModel.trim().split(" ");
      var baseModel = a[a.length - 2].trim()
      var modelYear = a[a.length - 1].trim()
      var url = "https://" + this.baseUrl + "/api/v2/substances/" + baseModel + "/" + modelYear
      fetch(url)
        .then(response => response.json())
        .then(json => {
          this.substances = json.vehicle.reach
          console.log(json)
        })
        .catch((err) => console.error(err))
    }
  }
})