var vm = new Vue({
  el: "#app",
  data: {
    shoppingList: [{
        item: "Ous",
        quantity: 2,
        units: ["dotzena", "dotzenes"]
      },
      {
        item: "Llet",
        quantity: 1,
        units: ["litre", "litres"]
      },
      {
        item: "Oli",
        quantity: 2,
        units: ["litre", "litres"]
      },
      /*...*/
      {
        item: "Patates",
        quantity: 15,
        units: ["kilogram", "kilograms"]
      }
    ]
  },
  methods: {
    calculateUnits: function(index) {
      let str = "(";
      let quantity = this.shoppingList[index].quantity;
      str += quantity;
      if (quantity == 1) {
        str += " " + this.shoppingList[index].units[0];
      } else {
        str += " " + this.shoppingList[index].units[1];
      }

      str += ")"
      return str;
    },
    deleteItem: function(index) {
      this.shoppingList.splice(index, 1);
    }
  },
  template: `<div>
  <ul>
    <li v-for="(item,index) in shoppingList"> {{item.item}} {{calculateUnits(index)}}
    <button v-on:click="deleteItem(index)">esborrar</button> </li>
  </ul>

  </div>`
})