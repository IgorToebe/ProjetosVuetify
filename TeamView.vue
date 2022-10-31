<template>
    <div class="teamPage">
      <h1 class="subtitle-1 grey--text my-4">Equipe</h1>

      <v-container class="my-5">
        <v-row row wrap>
          <v-col cols="12" sm="6" md="4" lg="3" v-for="person in team" :key="person.name">
            <v-card class="text-center ma-3">
              <v-responsive class="pt-4">
                <v-avatar size="100" class="amber">
                  <img :src="person.avatar">
                </v-avatar>
              </v-responsive>
              <v-card-text>
                <div class="subheading">{{ person.name }}</div>
                <div class="grey--text">{{ person.role }}</div>
              </v-card-text>
              <v-card-actions>
                <v-btn small flat color="amber">
                  <v-icon smal left color="grey darken-3">mdi-card-account-details</v-icon>
                  <span>Contato</span>
                </v-btn>
              </v-card-actions>
            </v-card>
          </v-col>
        </v-row>
      </v-container>

    </div>
    </template>
    
    <script>
    
    
      export default {
        data(){
          return{
            team: [
              { name: 'Mateus Lupi', role: 'Desenvolvedor Full-Stack', avatar: '/Screenshot_2.png'},
              { name: 'Felipe Lupi', role: 'Scrum Master', avatar: '/Screenshot_4.png'},
              { name: 'Igor Töebe', role: 'Desenvolvedor Full-Stack', avatar: '/Screenshot_5.png'},
              { name: 'Júlio Makoto', role: 'Mestre Jedi', avatar: '/Screenshot_6.png'},
              { name: 'Fernando Soncin', role: 'Mestre Jedi', avatar: '/Screenshot_1.png'},
              { name: 'Edson Carminatti', role: 'Executor Infiltrado', avatar: '/Screenshot_3.png'}

            ]
          }
        }
    
      }
    </script>
    