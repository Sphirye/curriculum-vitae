<template>
  <v-app>
    <v-main class="blue-grey darken-2">
      <router-view/>
    </v-main>
  </v-app>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator"

@Component({
  components: { }
})

export default class App extends Vue {

}

</script>

<style>
</style>