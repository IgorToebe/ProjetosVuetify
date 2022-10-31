<template>
    <nav>
        <v-toolbar app>
            <v-app-bar-nav-icon class="amber--text" @click="drawer = !drawer"></v-app-bar-nav-icon>
            <v-toolbar-title class="text-uppercase grey--text">
                <span class="font-weight-light">Makode</span>
                <span>Sistemas</span>
            </v-toolbar-title>
            <v-spacer></v-spacer>           
            <v-menu offset-y>
                <template v-slot:activator="{ on }">
                    <v-btn flat v-on="on" color="grey">
                        <v-icon left>mdi-expand-all-outline</v-icon>
                        <v-span>Menu</v-span>
                    </v-btn>
                </template>
                <v-list>
                    <v-list-item v-for="link in links" :key="link.text" router :to="link.route">
                        <v-list-item-title>{{ link.text }}</v-list-item-title>
                    </v-list-item>
                </v-list>
            </v-menu>
            <v-btn plain color="grey darken-2">
                <span>Encerrar Sessão</span>
                <v-icon right large class="amber--text">
                    mdi-power
                </v-icon>
            </v-btn>
        </v-toolbar>

        <v-navigation-drawer app v-model="drawer" class="amber lighten-3" temporary>
            <v-layout column align-center>
                <v-col class="mt-5">
                    <v-avatar tile height="60" width="190">
                        <img src="/logo_makode.png" alt="">
                    </v-avatar>
                    <p class="text-center subheading mx-4">
                        Soluções em TI
                    </p>
                </v-col>
                <v-col align="center" class="mt-4 mb-3">
                    <PopupButton/>
                </v-col>
            </v-layout>
            <v-list>
                <v-list-item v-for="link in links" :key="link.text" router :to="link.route">
                    <v-list-item-action>
                        <v-icon>{{link.icon}}</v-icon>
                    </v-list-item-action>
                    <v-list-item-content>
                        <v-list-item-title>
                            {{link.text}}
                        </v-list-item-title>
                    </v-list-item-content>
                </v-list-item>
            </v-list>
        </v-navigation-drawer>

    </nav>

</template>


<script>
import PopupButton from './PopupButton'

export default {
    components: { PopupButton },
    data() {
        return {
            drawer: false,
            links: [
                { icon: 'mdi-view-dashboard', text: 'Painel de Controle', route: '/' },
                { icon: 'mdi-folder', text: 'Meus Projetos', route: '/ProjectsPage' },
                { icon: 'mdi-account', text: 'Equipe', route: '/TeamPage' },
                { icon: 'mdi-account-outline', text: 'Login', route: '/LoginView' }
            ]
        }
    }

}
</script>