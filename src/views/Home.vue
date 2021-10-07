<template>
  <v-container>
    <v-row>
      <v-col class="blue-grey darken-4" cols="3">
        <div class="d-flex flex-column justify-center align-center">
          <v-avatar style="border: 4px solid white;" size="230px" class="neon">
            <v-img src="../assets/alchemist.png"/>
          </v-avatar>
          <span class="mt-2 text-size-3 text-center inter-weight-bold mini-neon white--text">Roniel Isaac Contreras Medina</span>
          <span class="text-size-2 text-center inter-weight-light white--text">Alias: Sphirye</span>
        </div>

        <v-card class="brown lighten-4">
          <v-list class="transparent">
            <v-list-item v-for="(contact, key) in profile.contact" :key="key">
              <v-list-item-avatar class="rounded-0 mr-2">
                <v-icon :color="contact.color" large>
                  {{contact.icon}}
                </v-icon>
              </v-list-item-avatar>
              <v-list-item-content>
                <v-list-item-title class="inter-weight-medium">{{contact.url}}</v-list-item-title>
              </v-list-item-content>
            </v-list-item>
          </v-list>
        </v-card>


        <div class="d-flex justify-center align-center">
          <VueHexagonal heptagon width="50px" height="60px" outlined/>
          <span class="mr-3 ml-1 white--text inter-weight-bold text-size-2 mini-neon">PERFIL</span>
          <v-divider dark/>
        </div>

        <v-sheet class="ml-6 mt-3" color="transparent">
          <p class="white--text">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Consequatur architecto quas provident tempora cupiditate dolores officiis, qui facere doloremque vel atque! Explicabo, veniam! Quos, itaque. Ea provident maxime dolorum necessitatibus.
          </p>
        </v-sheet>

        <div class="d-flex justify-center align-center">
          <VueHexagonal heptagon width="50px" height="60px" outlined/>
          <span class="mr-3 ml-1 white--text inter-weight-bold mini-neon">CONTACT ME</span>
          <v-divider dark/>
        </div>
      </v-col>

      <v-col class="brown lighten-4" cols="9">

        <v-container>

          <v-row align="center" no-gutters class="brown lighten-3 rounded-xl">
            <v-col cols="12" class="px-8 py-3 d-flex justify-start align-center">
              <v-avatar style="border: 3px solid #3E2723;">
                <v-icon>
                  fas fa-user
                </v-icon>
              </v-avatar>
              <span class="text-size-3 mr-3 ml-1 inter-weight-medium neon grey--text text--darken-4">Experiencia Laboral</span>
            </v-col>
          </v-row>

          <v-row align="center" no-gutters class="brown lighten-5 my-3 rounded-xl">
            <v-col cols="12" style="border: 2px solid #3E2723;" class="rounded-xl">
              <v-list two-line class="transparent">
                <v-list-item v-for="(experience, key) in profile.experiences" :key="key">
                  <v-list-item-avatar class="mx-0">
                    <span class="font-weight-bold text-h3">·</span>
                  </v-list-item-avatar>
                  <v-list-item-content>
                    <v-list-item-title>
                      <span> <span class="inter-weight-bold">{{experience.name}}</span> / Ubicacion {{experience.date}}</span>
                    </v-list-item-title>
                    <v-list-item-subtitle class="inter-weight-medium text-wrap">{{experience.description}}</v-list-item-subtitle>
                  </v-list-item-content>
                </v-list-item>
              </v-list>
            </v-col>
          </v-row>

          <v-row align="center" no-gutters class="my-3 brown lighten-3 rounded-xl">
            <v-col cols="12" class="px-8 py-3 d-flex justify-start align-center">
              <v-avatar style="border: 3px solid #3E2723;">
                <v-icon>
                  fas fa-pizza-slice
                </v-icon>
              </v-avatar>
              <span class="text-size-3 mr-3 ml-1 inter-weight-medium neon grey--text text--darken-4">Habilidades</span>
            </v-col>
          </v-row>

          <v-row justify="center" no-gutters>
            <v-col cols="3" class="pa-2" v-for="(skill, key) in profile.skills" :key="key">
              <v-card flat dark outlined rounded="lg" class="brown darken-4">
                <v-card-title class="flex-column align-center justify-center">
                  <v-progress-circular :rotate="90" :size="100" :width="15" :value="skill.percentage" color="indigo lighten-2">
                    <v-icon large class="neon">{{skill.icon}}</v-icon>
                  </v-progress-circular>
                  <span class="inter-weight-bold mini-neon">{{skill.name}}</span>
                </v-card-title>
              </v-card>
            </v-col>
          </v-row>

          <v-row align="center" no-gutters>
            <v-col cols="12" class="grey lighten-2 d-flex justify-center align-center">
              <VueHexagonal class="mx-3" width="50px" height="60px" heptagon outlined/>
              <span class="mr-3 ml-1">PROEFICIENCY</span>
              <v-divider/>
            </v-col>

          </v-row>

        </v-container>
      </v-col>
    </v-row>
  </v-container>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator"
import { VueHexagonal } from '@sphirye/vue-hexagonal-container' //@ts-ignore
import info from "@/assets/Info.json"

@Component({ components: { VueHexagonal } })

export default class Home extends Vue {

  profile = info

}

</script>

<style>
.neon {
  filter: drop-shadow( 0px 0px 3px rgba(255, 255, 255, 0.527))
    drop-shadow( 0px 0px 10px rgba(255, 255, 255, 0.493));
}

.mini-neon {
  filter: drop-shadow( 0px 0px 3px rgba(255, 255, 255, 0.514));
}
</style>
