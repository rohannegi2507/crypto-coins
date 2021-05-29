import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    coins: []
  },
  getters: {
    getCoinsData: state => {
      return state.coins;
    }
  },
  mutations: {
    setCoinData(state, data: any) {
      const coins: any = [];
      if(data){
      data.forEach((element: any) => {
        const row: any = {};
        row["Icon"] =
          '<img style="height:20px; width:20px" src=' + element.iconUrl + ">";
        row["Name"] = element.name;
        row["Symbol"] = element.symbol;
        const price: number = parseInt(element.price);
        row["Price"] = price.toPrecision(6);
        const changedPrice: number = parseInt(element.change);
        row["Change in Price"] = changedPrice.toPrecision(6);
        coins.push(row);
      });
      state.coins = coins;
    }
  }
  }
});
