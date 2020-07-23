<template>
  <div id="footer" class="footer">
    <v-footer color="white lighten-1" padless>
      <v-row justify="center" no-gutters>
        <v-btn
          v-for="link in links"
          :key="link"
          color="primary"
          text
          rounded
          class="my-2"
          route :to="link.route"
        >{{ link.text }}</v-btn>
        <v-col class="primary lighten-2 py-4 text-center white--text" cols="12">
          {{ new Date().getFullYear() }} —
          <strong>Copyright KSY INNOVATION PRODUCTS CO.,LTD.</strong>
        </v-col>
      </v-row>
    </v-footer>
  </div>
</template>

<script>
export default {
  name: "Footer",
  data() {
    return {
      links: [
        { text: "Home", route:"/"},
        { text: "Product", route:"/products" },
        { text: "Services", route:"/service" },
        { text: "About", route:"/about" }
      ]
    };
  }
};
</script>

<style>
</style>