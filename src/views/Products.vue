<template>
  <v-container>
    <v-row dense>
      <v-col v-for="(item, i) in items" :key="i">
        <v-card :color="item.color" light>
          <div class="d-flex flex-no-wrap justify-space-between">
            <div>
              <v-card-title class="headline" v-text="item.title"></v-card-title>
              <br />

              <v-card-subtitle v-text="item.description" style="text-indent: 50px;"></v-card-subtitle>

              <v-card-actions class="justify-end">
                <v-btn class="caption" color="info" text route :to="item.route">More</v-btn>
              </v-card-actions>
            </div>

            <v-avatar class="ma-3" size="255" tile>
              <v-img contain :src="item.src"></v-img>
            </v-avatar>
          </div>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: "Products",
  data() {
    return {
      items: [
        {
          color: "#DFE6E6",
          src: require("/Users/jamesjames/Desktop/KSY/ksy/src/assets/Termometer/HSF700/HSF700.jpg"),
          title: "HSF700",
          description:
            "มาตรฐานเครื่องมือแพทย์จากประเทศเกาหลี และนำเข้าถูกต้องตาม อย. กระทรวงสาธารณสุข ต้อนรับรัฐบาลเปิดเมือง แต่ก็ต้องมีเครื่องมือรองรับ ร้านค้า สถานประกอบการณ์ โรงงานต่างๆ",
          route: "/hsf700"
        },
        {
          color: "#DFE6E6",
          src: require("/Users/jamesjames/Desktop/KSY/ksy/src/assets/Termometer/QX008/Thermo Gun(10).jpg"),
          title: "QX008",
          description:
            "มาตรฐานเครื่องมือแพทย์จากประเทศจีน และนำเข้าถูกต้องตาม อย. กระทรวงสาธารณสุข ต้อนรับรัฐบาลเปิดเมือง แต่ก็ต้องมีเครื่องมือรองรับ ร้านค้า สถานประกอบการณ์ โรงงานต่างๆ ",
          route: "/qx008"
        }
      ]
    };
  }
};
</script>

<style>
</style>