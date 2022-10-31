<template>
  <v-dialog max-width="600px">
    <template v-slot:activator="{ on }">
      <v-btn color="blue darken-1" v-on="on" dark>Novo projeto</v-btn>
    </template>
    <v-card>
      <v-card-title>
        <h3>Adicionar novo projeto</h3>
      </v-card-title>
      <v-card-text>
        <v-form class="px-3" ref="form">
          <v-text-field label="Title" v-model="Title" prepend-icon="mdi-folder-outline" :rules="[v =>  v && v.length >= 3 || 'Minimum length is 3 characters']" required></v-text-field>
          <v-textarea label="Information" prepend-icon="mdi-pencil-outline" v-model="content" :rules="inputRules"></v-textarea>

          <v-menu max-width="290">
            <template v-slot:activator="{ on }">
              <v-text-field :value="formattedDate" label="Data Entrega" prepend-icon="mdi-calendar-range" v-on="on" :rules="inputRules">
              </v-text-field>
            </template>
            <v-date-picker v-model="due" locale="pt-br"></v-date-picker>
          </v-menu>

          <v-btn flat class="success mx-0 mt-3" @click="submit">adicionar projeto</v-btn>
        </v-form>
      </v-card-text>
    </v-card>
  </v-dialog>
</template>




<script>
import moment from 'moment'
moment.locale('pt-br');
export default {
  data() {
    return {
      title: '',
      content: '',
      due: null,
      inputRules: [
        v => v.length > 3 || 'You must agree to continue!'

      ]
    }
  },
  methods: {
    submit() {
      if(this.$refs.form.validate())
      console.log(this.title, this.content)
    }
  },
  computed: {
    formattedDate() {

      return this.due ? moment(this.due).format("LL") : "";

    }
  }
}
</script>