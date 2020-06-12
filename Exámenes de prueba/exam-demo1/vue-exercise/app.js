var vm = new Vue({
  el: "#app",
  data: {
    celsius: true,
    forecast: [
      { weekday: "Wednesday", type: "Rainy",  temperature: 20, scale: "celsius" },
      { weekday: "Thursday", type: "Storms", temperature: 15, scale: "celsius" },
      { weekday: "Friday", type: "Rainy",  temperature: 16, scale: "celsius" },
      { weekday: "Saturday", type: "Clowdy", temperature: 21, scale: "celsius" },
      { weekday: "Sunday", type: "Sunny",  temperature: 29, scale: "celsius" },
      { weekday: "Monday", type: "Sunny", temperature: 30, scale: "celsius" },
      { weekday: "Tuesday", type: "Clowdy", temperature: 25, scale: "celsius" },
      { weekday: "Wednesday", type: "Rainy",  temperature: 20, scale: "celsius" },
      { weekday: "Thursday", type: "Storms", temperature: 15, scale: "celsius" },
      { weekday: "Friday", type: "Rainy",  temperature: 10, scale: "celsius" },
      { weekday: "Saturday", type: "Clowdy", temperature: 5, scale: "celsius" },
      { weekday: "Sunday", type: "Sunny",  temperature: 0, scale: "celsius" },
    ],
  },
  template: `<div>
  View in
  <button v-bind:disabled="celsius" v-on:click="cambiarUnidad()">ºC</button>
  <button v-bind:disabled="!celsius" v-on:click="cambiarUnidad()">ºF</button>
  <table>
    <tr>
      <th v-for="dia in this.forecast">{{dia.weekday}}</th>
    </tr>
    <tr>
      <td v-for="dia in this.forecast">
        <span class="event">{{dia.type}}</span>
        <span v-if="dia.scale == 'celsius'" class="temperature">{{dia.temperature}} ºC</span>
        <span v-if="dia.scale != 'celsius'" class="temperature">{{dia.temperature}} ºF</span>
      </td>
    </tr>
  </table>
  </div>`,

  watch: {
    celsius: function(){
      for(let i = 0; i<this.forecast.length; i++){
        if (this.forecast[i].scale == "celsius") { //Convert to FAHRENHEIT_SCALE
          this.forecast[i].temperature = this.forecast[i].temperature * 1.8 + 32;
          this.forecast[i].scale = "fahreinheit";
        } else { //Convert to CELSIUS_SCALE
          this.forecast[i].temperature = (this.forecast[i].temperature - 32) / 1.8;
          this.forecast[i].scale = "celsius";
        }
      }
    },
  },
  methods: {
    cambiarUnidad: function() {
      if (this.celsius == true) {
        this.celsius = false;
      } else {
        this.celsius = true;
      }
    },
  },
});
