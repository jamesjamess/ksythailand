<template>
  <div class="about">
    <v-container>
      <v-card>
        <v-card-title primary-title class="text-h2 py-7 pl-15 font-weight-thin">About Us</v-card-title>
        <hr />
        <v-row class="justify-center">
          <v-avatar height="250" width="500" tile>
            <v-img src="../assets/Logo/logoKSY.png" alt="Logo KSY" contain />
          </v-avatar>
        </v-row>
        <v-row class="justify-center">
          <v-col cols="4">บริษัท เคเอสวาย อินโนเวชั่น โปรดักส์ จำกัด</v-col>
        </v-row>
        <v-row class="justify-center">
          <v-col cols="4">KSY INNOVATION PRODUCTS CO.,LTD.</v-col>
        </v-row>
        <v-container class="elevation-0">
          <h3>บริษัท เคเอสวาย อินโนเวชั่น โปรดักส์ จำกัด</h3>
          <br />
          <p style="text-indent: 50px;">
            ก่อตั้งขึ้นเพื่อ ส่งเสริมการขายและให้บริการเช่าเครื่องมือทางการแพทย์พร้อมรถและเทคนิคเชี่ยน
            เพื่อรองรับการตรวจสุขภาพนอกสถานที่ ซึ่งมีการเติบโตขึ้นทุกปี
            และบางโรงพยาบาลมีงานเยอะจนไม่สามารถใช้รถ x-ray ของโรงพยาบาลเซอร์วิสลูกค้าได้ทันท่วงที
            ทางบริษัท พร้อมให้บริการด้วยรถหลากหลายขนาด แล้วแต่ความต้องการลูกค้า ทั้งรถเล็ก รถใหญ่ พร้อมเครื่องมือแพทย์
            ที่นำเข้าจากต่างประเทศ ได้มาตรฐานการผลิต และผลการตรวจเป็นที่ยอมรับในสากล
          </p>
        </v-container>
      </v-card>
    </v-container>
  </div>
</template>

<script>
export default {
  name: "About",
  data() {
    return {
      imgUrl1: require("../assets/Logo/logoKSY.png")
    };
  }
};
</script>

<style scoped>
</style>
