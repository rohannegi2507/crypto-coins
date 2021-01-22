<template>
  <div id="app">
    <CryptoDisplay />
  </div>
</template>
<script lang="ts">
import { Vue, Component } from "vue-property-decorator";
import CryptoDisplay from "@/components/CryptoDisplay.vue";

@Component({
  components: {
    CryptoDisplay
  }
})
export default class App extends Vue {}
</script>

<style></style>
