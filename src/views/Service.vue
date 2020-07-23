<template>
  <div class="Service">
    <v-container>
      <v-row dense>
        <v-col v-for="(item, i) in items" :key="i" cols="6">
          <v-card :color="item.color" light>
            <div class="d-flex flex-no-wrap justify-space-between">
              <div>
                <v-card-title class="headline" v-text="item.title" height="auto" width="auto"></v-card-title>
                <br />

                <v-card-subtitle v-text="item.description" style="text-indent: 50px;"></v-card-subtitle>

                <v-card-actions class="justify-end">
                  <v-btn class="caption" color="info" text route :to="item.route">More</v-btn>
                </v-card-actions>
              </div>

              <v-avatar class="ma-3" size="225" tile>
                <v-img contain :src="item.src"></v-img>
              </v-avatar>
            </div>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
export default {
  name: "Service",
  data() {
    return {
      items: [
        {
          color: "#DFE6E6",
          src: require("/Users/jamesjames/Desktop/KSY/ksy/src/assets/Service/pic1.png"),
          title: "digital mobile X-ray",
          description:
            "ให้บริการเช่าเครื่องมือทางการแพทย์พร้อมรถและเทคนิคเชี่ยน เพื่อรองรับการตรวจสุขภาพนอกสถานที่ ซึ่งมีการเติบโตขึ้นทุกปี และบางโรงพยาบาลมีงานเยอะจนไม่สามารถใช้รถ x-ray ของโรงพยาบาลเซอร์วิสลูกค้าได้ทันท่วงที ทางบริษัท พร้อมให้บริการด้วยรถหลากหลายขนาด แล้วแต่ความต้องการลูกค้า ทั้งรถเล็ก รถใหญ่ พร้อมเครื่องมือแพทย์ ที่นำเข้าจากต่างประเทศ ได้มาตรฐานการผลิต และผลการตรวจเป็นที่ยอมรับในสากล",
          route: "/services"
        }
      ]
    };
  }
};
</script>

<style scoped>
</style>