

<template>
    <v-app  class="amber lighten-4">
    <v-content>
        <v-container class="fill-height" fluid>
        <v-row justify="center">
            <v-col align="center">
                <v-card flat width="195" class="amber lighten-4">
                    <v-avatar tile height="60" width="190">
                        <img src="/logo_makode.png" alt="">
                    </v-avatar>
                </v-card>

                <v-card flat width="500" class="mt-15 rounded-lg">
                    <v-card-title class="justify-center font-weight-light"> Área de Login: </v-card-title>
                    <v-card-text>
                        <v-text-field class="mx-10" outlined prepend-inner-icon="mdi-account-circle-outline orange--text mr-2" label="Usuário" color="orange"></v-text-field>
                        <v-text-field class="mx-10" outlined prepend-inner-icon="mdi-lock-outline orange--text mr-2" label="Senha" :type="showPassword ? 'text' : 'password'"
                            :append-icon="showPassword ? 'mdi-eye' : 'mdi-eye-off'"
                            @click:append="showPassword = !showPassword" color="orange">
                        </v-text-field>
                    </v-card-text>
                    <v-devider></v-devider>
                    <v-card-actions>
                        <v-btn block large class="mx-auto amber lighten-2">Entrar</v-btn>
                    </v-card-actions>
                    <v-card-actions>
                        <span class="mx-auto my-5">
                            Esqueceu sua senha?
                            <a href="https://www.makode.com.br/" class="mx-auto">
                                Clique Aqui
                            </a>
                        </span>
                    </v-card-actions>
                </v-card>                
            </v-col>
        </v-row>
    </v-container>
    </v-content>
</v-app>
</template>
    
<script>


export default {
    data() {
        return {
            showPassword: false


        }
    }

}
</script>
    