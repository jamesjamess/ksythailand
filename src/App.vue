<template>
  <v-app>
    <Menubar />
    <v-content>
      <router-view></router-view>
    </v-content>
    <Footer />
  </v-app>
</template>

<script>
import Menubar from "../src/components/layout/Menubar";
import Footer from "../src/components/layout/Footer.vue";

export default {
  name: "App",

  components: {
    Menubar,
    Footer
  }
};
</script>
