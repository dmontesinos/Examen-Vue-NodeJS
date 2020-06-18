
const forecast = [
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
];

/*
if (scale == FAHRENHEIT_SCALE) { // Convert to FAHRENHEIT_SCALE
  return temperature * 1.8 + 32;
} else { // Convert to CELSIUS_SCALE
  return (temperature - 32) / 1.8;
}
*/


var vm = new Vue({
  el: "#app",
  data: {
    forecast: forecast,
    scale: "celsius",//bool
  },
  methods: {
    swapScale: function() {
      if (this.scale == "celsius") {
        this.scale = "fahrenheit";
      } else {
        this.scale = "celsius";
      }
    },
    rightTemp: function(t, s) {
      if (s == this.scale) {
        return t;
      } else if (s == "celsius") {
        return t * 1.8 + 32;
      } else { //s == "FAHRENHEIT"
        return (t - 32) / 1.8;
      }
    }
  },
  template: `<div>
  View in <button v-on:click="swapScale" v-bind:disabled="scale == 'celsius'">ºC</button>
  <button v-on:click="swapScale" v-bind:disabled="scale != 'celsius'">ºF</button>
<hr />
<table>
  <tr>
    <th v-for="day in forecast">{{day.weekday}}</th>
  </tr>
  <tr>
    <td v-for="day in forecast">
      <span class="event">{{day.type}}</span>
      <span class="temperature">{{Math.round(100*rightTemp(day.temperature, day.scale))/100}}
      {{day.scale == "celsius"? "ºC" : "ºF"}}</span>
    </td>
  </tr>
</table>
  </div>`,
});

/*



*/
