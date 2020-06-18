
const shoppingList = [
  { item: "Ous", quantity: 2, units: ["dotzena", "dotzenes"] },
  { item: "Llet", quantity: 1, units: ["litre", "litres"] },
  { item: "Oli", quantity: 2, units: ["litre", "litres"] },
	/*...*/
  { item: "Patates", quantity: 15, units: ["kilogram", "kilograms"] },
];


var vm = new Vue({
  el: "#app",
  data: {
    shoppingList: shoppingList,
  },
  methods: {
    esborrar: function(index) {
      this.shoppingList.splice(index, 1);
    }
  },
  template: `<ul>
   <li v-for="(item, index) in shoppingList">
    {{item.item}} ({{item.quantity}} {{item.quantity == 1 ? item.units[0] : item.units[1] }})
     <button v-on:click="esborrar(index)">esborrar</button>
   </li>
  </ul>`,
});
