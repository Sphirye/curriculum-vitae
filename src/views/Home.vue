<template>
  <v-container>
    <v-row>
      <v-col class="blue-grey darken-4" cols="3">
        <div class="d-flex flex-column justify-center align-center">
          <v-avatar style="border: 4px solid white;" size="230px" class="neon">
            <v-img src="../assets/pfp.png"/>
          </v-avatar>
          <h1 class="mt-2 text-center coolvetica-rg mini-neon white--text">Roniel Isaac Contreras Medina</h1>
          <span class="text-size-2 text-center inter-weight-light white--text">Alias: Sphirye</span>
        </div>

        <v-card class="brown lighten-4">
          <v-list class="transparent">
            <v-subheader class="inter-weight-bold"><h2>Contacto</h2></v-subheader>
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

          <div>
            <v-divider class="my-3"/>
          </div>
        </v-card>
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
              <span class="text-size-4 ml-3 ml-1 coolvetica-rg neon grey--text text--darken-4">Perfil Profesional</span>
            </v-col>
          </v-row>

          <v-row align="center" no-gutters class="brown lighten-5 rounded-xl">
            <v-col cols="12" class="rounded-xl px-4 py-3">
              <p class="inter-weight-medium my-auto">
                Desarrollador web desde 2018, con experiencia usando tecnologías como Vue.js para el diseño optimo de paginas web y 
                Typescript para asegurar un codigo limpio y legible. Capacitado para implementar responsive design y garantizar una 
                interfaz de usuario estable en navegadores tanto moviles como de escritorio.
              </p>

              <p class="inter-weight-light mt-4">Tal vez algún día me dedique a componer musica de nuevo.</p>
            </v-col>
          </v-row>

          <v-divider class="my-3"/>

          <v-row align="center" no-gutters class="brown lighten-3 rounded-xl">
            <v-col cols="12" class="px-8 py-3 d-flex justify-start align-center">
              <v-avatar style="border: 3px solid #3E2723;">
                <v-icon>
                  fas fa-user
                </v-icon>
              </v-avatar>
              <span class="text-size-4 ml-3 ml-1 coolvetica-rg neon grey--text text--darken-4">Experiencia Laboral</span>
            </v-col>
          </v-row>

          <v-row align="center" no-gutters class="brown lighten-5 rounded-xl">
            <v-col cols="12" class="rounded-xl">
              <v-list two-line class="transparent">
                <v-list-item v-for="(experience, key) in profile.experiences" :key="key">
                  <v-list-item-avatar class="mx-0">
                    <span class="font-weight-bold text-h3">·</span>
                  </v-list-item-avatar>
                  <v-list-item-content>
                    <v-list-item-title class="text-size-2">
                      <span> <span class="inter-weight-bold">{{experience.name}}</span> / Ubicacion {{experience.date}}</span>
                    </v-list-item-title>
                    <v-list-item-subtitle class="inter-weight-medium text-wrap">{{experience.description}}</v-list-item-subtitle>
                  </v-list-item-content>
                </v-list-item>
              </v-list>
            </v-col>
          </v-row>

          <v-divider class="my-3"/>

          <v-row align="center" no-gutters class="my-3 brown lighten-3 rounded-xl">
            <v-col cols="12" class="px-8 py-3 d-flex justify-start align-center">
              <v-avatar style="border: 3px solid #3E2723;">
                <v-icon>
                  fas fa-pizza-slice
                </v-icon>
              </v-avatar>
              <span class="text-size-4 mr-3 ml-1 coolvetica-rg neon grey--text text--darken-4">Habilidades</span>
            </v-col>
          </v-row>

          <v-row justify="center" align="stretch" no-gutters>
            <v-col cols="3" class="pa-2" v-for="(skill, key) in profile.skills" :key="key">
              <v-card flat dark outlined height="100%" rounded="lg" class="brown darken-4">
                <v-card-title class="flex-column align-center justify-center">
                  <v-progress-circular :rotate="90" :size="100" :width="15" :value="skill.percentage" color="indigo lighten-2">
                    <v-icon large class="neon">{{skill.icon}}</v-icon>
                  </v-progress-circular>
                  <span class="inter-weight-bold mini-neon text-wrap">{{skill.name}}</span>
                </v-card-title>
              </v-card>
            </v-col>
          </v-row>

          <v-divider class="my-3"/>

          <v-row align="center" no-gutters class="brown lighten-3 rounded-xl">
            <v-col cols="12" class="px-8 py-3 d-flex justify-start align-center">
              <v-avatar style="border: 3px solid #3E2723;">
                <v-icon>
                  fas fa-user
                </v-icon>
              </v-avatar>
              <div>
                <span class="text-size-4 mr-3 ml-1 coolvetica-rg neon grey--text text--darken-4">Proyectos Personales</span> <span class="inter-weight-light text-size-2">(accesibles desde Github).</span>
              </div>
            </v-col>
          </v-row>

          <v-row align="center" justify="center" no-gutters class="brown lighten-5 my-3 py-2 rounded-xl">
            <v-col cols="12" class="rounded-xl">
              <v-list two-line class="transparent">
                <v-list-item v-for="(proyect, key) in profile.personalProyects" :key="key">
                  <v-list-item-avatar class="mx-0 align-self-start">
                    <span class="font-weight-bold text-h3">·</span>
                  </v-list-item-avatar>
                  <v-list-item-content>
                    <v-list-item-title class="text-size-2">
                      <span class="inter-weight-bold">{{proyect.title}}</span>
                    </v-list-item-title>
                    <v-list-item-subtitle class="inter-weight-medium text-wrap">{{proyect.description}}</v-list-item-subtitle>
                    <v-container v-if="proyect.images">
                      <v-row justify="center">
                        <v-col cols="auto" v-for="(image, key) in proyect.images" :key="key">
                          <v-img style="border-radius: 10px; border: 1px solid grey;" :src="require('@/assets/'+image.url)"/>
                        </v-col>
                      </v-row>
                    </v-container>
                  </v-list-item-content>
                </v-list-item>
              </v-list>
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
