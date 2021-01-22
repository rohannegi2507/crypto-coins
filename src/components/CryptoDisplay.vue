<template>
  <div class="flex-container">
    <div class="header">
      <h1>Crypto Coins</h1>
    </div>
    <div class="pagination mt-3">
      <b-pagination
        v-model="currentPage"
        :total-rows="rows"
        :per-page="perPage"
        aria-controls="my-table"
        size="med"
      ></b-pagination>
    </div>
    <div>
      <div class="dropselect flex">
        <span>Rows per page</span>
        <span class="drop-down">
          <b-form-select v-model="perPage" :options="options"></b-form-select>
        </span>
      </div>
      <b-table
        striped
        hover
        bordered
        responsive
        :items="items"
        :fields="filterColumn"
        :per-page="perPageRow"
        :current-page="currentPage"
      >
        <template #cell(index)="data">
          {{ data.index + 1 }}
        </template>
        <template #cell(Icon)="data">
          <span v-html="data.value"></span>
        </template>
      </b-table>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import cryptoCurrencyService from "./crypto-currency.services";
import CryptoCoins from "./crypto-currency-model";
import store from "../../src/store";
@Component
export default class CryptoDisplay extends Vue {
  items: Array<any> = [];
  rows = 0;
  currentPage = 1;
  perPage = 10;
  filterColumn: any = [];
  options = [10, 25, 50, 100];

  created() {
    this.filterColumn = [
      "index",
      {
        key: "Icon"
      },
      {
        key: "Name",
        sortable: true
      },
      {
        key: "Symbol",
        sortable: true
      },
      {
        key: "Price",
        sortable: true
      },
      {
        key: "Change in Price",
        sortable: true
      }
    ];
  }

  async getCoins() {
    const result: any = await cryptoCurrencyService.getCyrptoCoins();
    this.updateRow(result);
  }

  get perPageRow() {
    return this.perPage;
  }

  updateRow(coinsData: any) {
    store.commit("setCoinData", coinsData);
    this.items = store.getters.getCoinsData;
    this.rows = this.items.length;
  }
}
</script>

<style>
* {
  box-sizing: border-box;
  padding: 0;
  margin: 0;
}

.flex-container {
  display: flex;
  flex-flow: column wrap;
  justify-content: space-evenly;
  max-width: 800px;
  width: 85%;
  min-height: 80vh;
  margin: 0 auto;
  padding: 30px 0px;
}

.header {
  flex: 0 1 10%;
  text-align: center;
  padding-bottom: 30px;
}

.table {
  flex: 1 0 auto;
}

.pagination {
  flex: 0 1 10%;
  align-self: center;
}

.drop-down {
  height: 40px;
  width: 40px;
}
</style>
