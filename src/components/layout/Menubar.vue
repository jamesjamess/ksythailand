<template>
  <v-container>
    <v-app-bar app color="white" light height="75">
      <div class="d-flex align-center">
        <v-img
          :src="imgUrl"
          alt="KSY Logo"
          class="shrink mr-2"
          contain
          transition="scale-transition"
          width="150"
        />
      </div>

      <v-spacer></v-spacer>

      <div class="btnBar">
        <v-btn color="info" text to="/">HOME</v-btn>
        <v-btn color="info" text to="/products">PRODUCT</v-btn>
        <v-btn color="info" text to="/service">SERVICES</v-btn>
        <v-btn color="info" text to="/about">ABOUT</v-btn>
      </div>
    </v-app-bar>
  </v-container>
</template>

<script>
export default {
  name: "Menubar",
  data() {
    return {
      imgUrl: require("/Users/jamesjames/Desktop/KSY/ksy/src/assets/Logo/logoKSY.png")
    };
  }
};
</script>

<style scoped>
</style>