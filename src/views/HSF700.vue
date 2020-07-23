<template>
  <v-container>
    <v-img :src="img" contain></v-img>
  </v-container>
</template>

<script>
export default {
  name: "HSF700",
  data() {
    return {
      img: require("/Users/jamesjames/Desktop/KSY/ksy/src/assets/Termometer/HSF700/HSF700(3).png")
    };
  }
};
</script>

<style>
</style>