<template>
  <div class="projectsPage">
    <h1 class="subtitle-1 grey--text my-4">Meus Projetos</h1>

    <v-container class="my-5">
      <v-expansion-panels>
        <v-expansion-panel v-for="project in myProjects" :key="project.title">
          <v-expansion-panel-header>{{ project.title }}</v-expansion-panel-header>
          <v-expansion-panel-content>
            <v-card flat>
              <v-card-text class="px-4 py-0 grey--text">
                <div class="font-weight-bold">Data de entrega: {{ project.due }}</div>
                <div>{{ project.content }}</div>
              </v-card-text>
            </v-card>
          </v-expansion-panel-content>
        </v-expansion-panel>
      </v-expansion-panels>
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
  computed: {
    myProjects(){
      return this.projects.filter(project => {
        return project.person === 'Júlio Makoto'
      })
    }
  }

}
</script>
  