<template>
  <v-container>
    <v-row>
      <v-col cols="4" class="info">
        <div class="hexagon hexagon2">
          <div class="hexagon-in1">
            <v-img class="hexagon-in2" src="../assets/alchemist.png"/>
          </div>
        </div>
      </v-col>

      <v-col cols="8" class="success">
        <VueHexagonal class="info" width="50px" height="50px" img="https://gdj-inr5u0ip5pewom.stackpathdns.com/wp-content/uploads/2015/11/free_CV_Resume_psd_template_7.jpg"/>
      </v-col>

      <v-col cols="2" class="warning">
        <span class="mdi mdi-magnify"></span>
      </v-col>
    </v-row>
  </v-container>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator"
import DefaultComponent from "@/components/DefaultComponent.vue"
import { VueHexagonal } from 'vue-hexagonal-container'

@Component({
  components: { DefaultComponent, VueHexagonal }
})

export default class Home extends Vue {

}

</script>

<style>
.hexagon {
  overflow: hidden;
  background-color: transparent;
  visibility: hidden;
  -webkit-transform: rotate(120deg);
     -moz-transform: rotate(120deg);
      -ms-transform: rotate(120deg);
       -o-transform: rotate(120deg);
          transform: rotate(120deg);
  cursor: pointer;
}

.hexagon-in1 {
  overflow: hidden;
  width: 100%;
  height: 100%;
  background-color: transparent;
  -webkit-transform: rotate(-60deg);
    -moz-transform: rotate(-60deg);
      -ms-transform: rotate(-60deg);
      -o-transform: rotate(-60deg);
          transform: rotate(-60deg);
}

.hexagon-in2 {
  width: 100%;
  height: 100%;
  background-repeat: no-repeat;
  background-position: 50%;
  visibility: visible;
  background-color: transparent;

  -webkit-transform: rotate(-60deg);
     -moz-transform: rotate(-60deg);
      -ms-transform: rotate(-60deg);
       -o-transform: rotate(-60deg);
          transform: rotate(-60deg);
}

.hexagon1 {
  width: 400px;
  height: 200px;
  background-color: transparent;
  margin: 0 0 0 -80px;
}

.hexagon2 {
  width: 200px;
  height: 400px;
  background-color: transparent;
  margin: -80px 0 0 20px;
}

</style>
