<template>
  <div class="dashboardPage">
    <h1 class="subtitle-1 grey--text my-4">Painel de Controle</h1>

    <v-container class="my-5">


      <v-layout row class="mb-3">

        <v-tooltip top>
          <template v-slot:activator="{ on }">
            <v-btn small flat color="amber lighten-3 mx-3" @click="sortBy('title')" v-on="on">
              <v-icon left small>mdi-folder</v-icon>
              <span class="caption lowercase">Por prjeto</span>
            </v-btn>
          </template>
          <span>Ordenar a lista por nome do projeto</span>
        </v-tooltip>

        <v-tooltip top>
          <template v-slot:activator="{ on }">
            <v-btn small flat color="amber lighten-3" @click="sortBy('person')" v-on="on">
              <v-icon left small>mdi-account</v-icon>
              <span class="caption lowercase">Por pessoa</span>
            </v-btn>
          </template>
          <span>Ordenar a lista por nome do colaborador</span>
        </v-tooltip>        
      </v-layout>

      <v-card class="pa-3 green lighten-5 px-3" v-for="project in projects" :key="project.title">
        <v-row row wrap :class="`pa-3 project ${project.status}`">
          <v-col cols="12" md="6">
            <div class="caption grey--text">Nome do Projeto</div>
            <div>{{ project.title }}</div>
          </v-col>
          <v-col xs="2">
            <div class="caption grey--text">Pessoa</div>
            <div>{{ project.person }}</div>
          </v-col>
          <v-col xs="2">
            <div class="caption grey--text">Data de entrega</div>
            <div>{{ project.due }}</div>
          </v-col>
          <v-col xs="2" class="pa-6">
            <div class="text-right">
              <v-chip small :color="`${project.status}`" :class="`v-chip--active white--text text-uppercase my-2`">

                {{project.status}}

              </v-chip>
            </div>
          </v-col>
        </v-row>
        <v-row cols="12">
          <v-divider></v-divider>
        </v-row>
      </v-card>
    </v-container>

  </div>
</template>

<script>


export default {
  data() {
    return {
      projects: [

        { title: 'Projetar um novo Website.', person: 'Igor Töebe', due: '1 novembro 2022', status: 'desenvolvimento', content: "Conteúdo em texto para essa atividade" },
        { title: 'Implementar a Homepage.', person: 'Mateus Lupi', due: '10 outubro 2022', status: 'completo', content: "Conteúdo em texto para essa atividade" },
        { title: 'Migração Unimed.', person: 'Júlio Makoto', due: '30 junho 2022', status: 'desenvolvimento', content: "Conteúdo em texto para essa atividade" },
        { title: 'Estruturar o banco de dados.', person: 'Felipe Lupi', due: '20 outubro 2022', status: 'completo', content: "Conteúdo em texto para essa atividade" },
        { title: 'Criar um forum comunitário.', person: 'Júlio Makoto', due: '1 abril 2022', status: 'atrasado', content: "Conteúdo em texto para essa atividade" }
      ]
    }
  },
  methods: {
    sortBy(prop) {
      this.projects.sort((a, b) => a[prop] < b[prop] ? -1 : 1)
    }
  }

}
</script>

<style>
.project.completo {
  border-left: 4px solid #3cd1c2;
}

.project.desenvolvimento {
  border-left: 4px solid orange;
}

.project.atrasado {
  border-left: 4px solid tomato;
}

.v-chip.completo {
  background: #32ad65;
}

.v-chip.desenvolvimento {
  background: orange;
}

.v-chip.atrasado {
  background: tomato;
}
</style>

