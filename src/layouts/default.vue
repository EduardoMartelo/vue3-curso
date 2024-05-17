<template>
  <v-app id="inspire">
    <v-navigation-drawer v-model="drawer">
      <!--  Navegação lateral -->

      <v-list>
        <v-list-item
          prepend-avatar=""
          subtitle="projeto curso"
          title="Estudos vue"
        >
        </v-list-item>
      </v-list>

      <v-divider></v-divider>

      <router-link v-for="(item, i) in items" :key="i" :to="item.to">
        <v-list :lines="false" density="compact" nav>
          <v-list-item :value="item" color="primary">
            <template v-slot:prepend>
              <v-icon :icon="item.icon"></v-icon>
            </template>

            <v-list-item-title :textContent="item.text"></v-list-item-title>
          </v-list-item>
        </v-list>
      </router-link>
    </v-navigation-drawer>

    <v-app-bar>
      <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>

      <v-app-bar-title>Menu</v-app-bar-title>
    </v-app-bar>

    <v-main>
      <router-view></router-view>
    </v-main>
  </v-app>
</template>

<script setup>
import { ref } from "vue";

const drawer = ref(null);

const items = [
  { text: "Home", icon: "mdi-folder", to: "/" },
  { text: "Página 2", icon: "mdi-account-multiple", to: "/page2" },
  { text: "Página 3", icon: "mdi-star", to: "/page3" },
];

const admins = [
  ["Management", "mdi-account-multiple-outline"],
  ["Settings", "mdi-cog-outline"],
];
const cruds = [
  ["Create", "mdi-plus-outline"],
  ["Read", "mdi-file-outline"],
  ["Update", "mdi-update"],
  ["Delete", "mdi-delete"],
];
</script>


<!-- scoped - somente pra esse componente -->
<style scoped>
a {
  text-decoration: none;
  color: #505050;
}
</style>
