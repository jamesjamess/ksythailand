<template>
  <div class="home">
    <v-container>
      <v-btn class="myBtn" block color="#EEEFF1" dark height="400px" width="auto" to="/products">
        <span
          style="color:gray; font-size:30px; margin-right:150px"
          class="subheading font-weight-regular"
        >Product</span>
        <img src="../assets/Termometer/HSF700/HSF700.jpg" alt height="350px" />
      </v-btn>
    </v-container>

    <v-container>
      <v-btn class="myBtn" block color="#EEEFF1" dark height="400px" width="auto" to="/service">
        <span
          style="color:gray; font-size:30px; margin-right:150px"
          class="subheading font-weight-regular"
        >Service</span>
        <img src="../assets/Service/pic1.png" alt height="350px" />
      </v-btn>
    </v-container>
  </div>
</template>

<script>
export default {
  name: "Home"
};
</script>



