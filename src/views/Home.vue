<template>
  <v-container>
    <v-row>
      <v-col class="blue-grey darken-4" cols="3">
        <div class="d-flex flex-column justify-center align-center">
          <v-avatar style="border: 4px solid white;" size="230px" class="neon">
            <v-img src="../assets/pfp.png"/>
          </v-avatar>
          <h1 class="mt-2 text-center coolvetica-rg mini-neon white--text">Roniel Isaac Contreras Medina</h1>
          <span class="text-size-2 text-center inter-weight-light white--text">Nombre Artistico: Sphirye</span>
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
              <v-list two-line class="transparent mx-10">
                <v-list-item>
                  <v-list-item-content>
                    <v-list-item-title class="text-size-2">
                      <span> <span class="inter-weight-bold mr-2">{{lang.xp_laboral_1.name}}</span>({{lang.xp_laboral_1.date}})</span>
                    </v-list-item-title>
                    <v-list-item-subtitle class="inter-weight-medium text-wrap">{{lang.xp_laboral_1.description}}</v-list-item-subtitle>
                  </v-list-item-content>
                </v-list-item>

                <v-divider class="mx-15 my-3"/>

                <v-list-item>
                  <v-list-item-content>
                    <v-list-item-title class="text-size-2">
                      <span> <span class="inter-weight-bold mr-2">{{lang.xp_laboral_2.name}}</span>({{lang.xp_laboral_2.date}})</span>
                    </v-list-item-title>
                    <v-list-item-subtitle class="inter-weight-medium text-wrap">
                      <span>
                        {{lang.xp_laboral_2.description}}
                      </span>
                      <v-spacer class="my-2"/>
                      <span class="font-weight-bold my-2">
                        {{lang.xp_laboral_2.edit}}
                      </span>

                      <v-img class="my-2" :src="require('@/assets/riffexample.png')"/>

                    </v-list-item-subtitle>
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
                  <span style="word-break: normal !important;" class="inter-weight-bold mini-neon text-center text-wrap" v-line-clamp="2">{{skill.name}}</span>
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
                <v-list-item>
                  <v-list-item-avatar class="mx-0 align-self-start">
                    <span class="font-weight-bold text-h3">·</span>
                  </v-list-item-avatar>
                  <v-list-item-content>
                    <v-list-item-title class="text-size-2">
                      <span class="inter-weight-bold">{{lang.personal_project_1.name}}</span>
                    </v-list-item-title>
                    <v-list-item-subtitle class="inter-weight-medium text-wrap">{{lang.personal_project_1.description}}</v-list-item-subtitle>
                    <v-container class="d-flex justify-center">
                      <div style="width: 80%;">
                        <v-img width="100%" style="border-radius: 10px; border: 1px solid grey;" :src="require('@/assets/tBot.png')"/>
                      </div>
                    </v-container>
                  </v-list-item-content>
                </v-list-item>

                <v-list-item>
                  <v-list-item-avatar class="mx-0 align-self-start">
                    <span class="font-weight-bold text-h3">·</span>
                  </v-list-item-avatar>
                  <v-list-item-content>
                    <v-list-item-title class="text-size-2">
                      <span class="inter-weight-bold">{{lang.personal_project_2.name}}</span>
                    </v-list-item-title>
                    <v-list-item-subtitle class="inter-weight-medium text-wrap">{{lang.personal_project_2.description}}</v-list-item-subtitle>
                    <v-container class="d-flex justify-center">
                      <v-row justify="center">
                        <v-col cols="auto">
                          <v-img style="border-radius: 10px; border: 1px solid grey;" :src="require('@/assets/gdx1.png')"/>
                        </v-col>

                        <v-col cols="auto">
                          <v-img style="border-radius: 10px; border: 1px solid grey;" :src="require('@/assets/gdx2.png')"/>
                        </v-col>
                      </v-row>
                    </v-container>
                  </v-list-item-content>
                </v-list-item>

                <v-list-item>
                  <v-list-item-avatar class="mx-0 align-self-start">
                    <span class="font-weight-bold text-h3">·</span>
                  </v-list-item-avatar>
                  <v-list-item-content>
                    <v-list-item-title class="text-size-2">
                      <span class="inter-weight-bold">{{lang.personal_project_3.name}}</span>
                    </v-list-item-title>
                    <v-list-item-subtitle class="inter-weight-medium text-wrap">{{lang.personal_project_3.description}}</v-list-item-subtitle>
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
import spanish from "@/lang/spanish"


@Component({ components: { VueHexagonal } })

export default class Home extends Vue {

  //Change to "english" if need to switch between language
  lang: any = spanish
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
