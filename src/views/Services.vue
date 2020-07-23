<template>
  <v-card>
    <v-toolbar flat color="primary" dark>
      <v-toolbar-title>
        <span>บริการของบริษัท</span>
      </v-toolbar-title>
    </v-toolbar>
    <v-tabs vertical>
      <v-tab>
        <v-icon left>local_hospital</v-icon>Service1
      </v-tab>
      <v-tab>
        <v-icon left>local_hospital</v-icon>Service 2
      </v-tab>
      <v-tab>
        <v-icon left>local_hospital</v-icon>Service 3
      </v-tab>
      <v-tab>
        <v-icon left>local_hospital</v-icon>Service 4
      </v-tab>
      <v-tab>
        <v-icon left>local_hospital</v-icon>Service 5
      </v-tab>
      <v-tab>
        <v-icon left>local_hospital</v-icon>Mobile X-Ray
      </v-tab>

      <v-tab-item>
        <v-card flat>
          <v-card-title
            class="ml-5 text-decoration-underline font-weight-light text-h6"
          >ตรวจวัดมะเร็งเต้านมด้วยเครื่องแมมโมแกรม</v-card-title>
          <v-row class="justify-center">
            <v-col cols="4">
              <v-avatar size="255" tile>
                <v-img :src="src1" alt="Breast Cancer1" />
              </v-avatar>
            </v-col>

            <v-col cols="4">
              <v-avatar size="255" tile>
                <v-img :src="src2" alt="Breast Cancer2" />
              </v-avatar>
            </v-col>
          </v-row>
          <v-card-text class="font-weight-medium text-body-1">
            <p class="mb-0">
              เพื่อคัดกรองและป้องกันโรคมะเร็งเต้านม เครื่องตรวจแมมโมแกรมนำเข้าจากประเทศเกาหลีเป็นระบบดิจิตอล CR และในอนาคตทางบริษัทจะนำเข้า
              เครื่องแมมโมแกรมระบบ DR เพื่อให้รองรับการทำงานที่มากขึ้น
            </p>
          </v-card-text>
        </v-card>
      </v-tab-item>

      <v-tab-item>
        <v-card flat>
          <v-card-title
            class="ml-5 text-decoration-underline font-weight-light text-h6"
          >ตรวจอัลตร้าซาวด์ช่องท้องส่วนบนและช่องท้องส่วนล่าง</v-card-title>
          <v-row class="justify-center">
            <v-col cols="4">
              <v-avatar size="255" tile>
                <v-img :src="src3" alt="Liver cancer1" />
              </v-avatar>
            </v-col>

            <v-col cols="4">
              <v-avatar size="255" tile>
                <v-img :src="src4" alt="Liver cancer2" />
              </v-avatar>
            </v-col>
          </v-row>
          <v-card-text class="font-weight-medium text-body-1">
            <p class="mb-0">
              เพื่อตรวจหา มะเร็งตับ ม้าม นิ่วในไต นิ่วในถุงน้ำดี เนื้องอกในมดลูก มดลูกโต กระเพาะปัสสาวะ ต่อมลูกหมากโต กระเพาะปัสสาวะ
              เครื่องตรวจอัลตร้าซาวด์ ทางบริษัท นำเข้าทั้งจาก เกาหลี และ สหรัฐอเมริกา
            </p>
          </v-card-text>
        </v-card>
      </v-tab-item>

      <v-tab-item>
        <v-card flat>
          <v-card-title
            class="ml-5 text-decoration-underline font-weight-light text-h6"
          >ตรวจกระดูกพรุนบริเวณสันหลังและสะโพกด้วยเครื่องเอกซเรย์มวลกระดูก</v-card-title>
          <v-row class="justify-center">
            <v-col cols="4">
              <v-avatar size="255" tile>
                <v-img :src="src5" alt="Osteoporosis1" />
              </v-avatar>
            </v-col>

            <v-col cols="4">
              <v-avatar size="255" tile>
                <v-img :src="src6" alt="Osteoporosis 2" />
              </v-avatar>
            </v-col>
          </v-row>
          <v-card-text class="font-weight-medium text-body-1">
            <p class="mb-0">
              ตรวจหาโรคกระดูกพรุน สันหลังโค้งงอ กระดูกทรุดตัว
              เครื่องตรวจมวลกระดูกทางบริษัทนำเข้าจากประเทศฝรั่งเศสและเกาหลี
              มีทั้งแบบ Fanbeam และ pencil beam
            </p>
          </v-card-text>
        </v-card>
      </v-tab-item>

      <v-tab-item>
        <v-card flat>
          <v-card-title
            class="ml-5 text-decoration-underline font-weight-light text-h6"
          >ตรวจกระดูกพรุนบริเวณข้อมือ ข้อเท้าด้วยเครื่องเอกซเรย์มวลกระดูก</v-card-title>
          <v-row class="justify-center">
            <v-col cols="4">
              <v-avatar size="255" tile>
                <v-img :src="src7" alt="Osteoporosis 3" />
              </v-avatar>
            </v-col>

            <v-col cols="4">
              <v-avatar size="255" tile>
                <v-img :src="src14" alt="Osteoporosis 3" />
              </v-avatar>
            </v-col>
          </v-row>
          <v-card-text class="font-weight-medium text-body-1">
            <p class="mb-0">
              ตรวจหาโรคกระดูกพรุน เป็นการคัดกรองเบื้องต้น
              โดยตรวจบริเวณข้อมือหรือข้อเท้าเพื่อวัดค่ามวลกระดูกในร่างกาย
            </p>
          </v-card-text>
        </v-card>
      </v-tab-item>

      <v-tab-item>
        <v-card flat>
          <v-card-title
            class="ml-5 text-decoration-underline font-weight-light text-h6"
          >ตรวจวัดความเสื่อมของหลอดเลือดแดง</v-card-title>
          <v-row class="justify-center">
            <v-col cols="4">
              <v-avatar size="255" tile>
                <v-img :src="src8" alt="ิิBlood vessels1" />
              </v-avatar>
            </v-col>

            <v-col cols="4">
              <v-avatar size="255" tile>
                <v-img :src="src9" alt="Blood vessels2" />
              </v-avatar>
            </v-col>
          </v-row>
        </v-card>
      </v-tab-item>

      <v-tab-item>
        <v-card flat>
          <v-card-title
            class="ml-5 text-decoration-underline font-weight-light text-h6"
          >ตัวอย่างรถ X-ray ของบริษัท</v-card-title>
          <v-row class="justify-center ml-15">
            <v-col cols="6">
              <v-avatar size="300" tile>
                <v-img :src="src10" alt="Mobile X-ray 1" />
              </v-avatar>
            </v-col>

            <v-col cols="6">
              <v-avatar size="300" tile>
                <v-img :src="src11" alt="Mobile X-ray 2" />
              </v-avatar>
            </v-col>

            <v-col cols="6">
              <v-avatar size="300" tile>
                <v-img :src="src12" alt="Mobile X-ray 3" />
              </v-avatar>
            </v-col>

            <v-col cols="6">
              <v-avatar size="300" tile>
                <v-img :src="src13" alt="Mobile X-ray 4" />
              </v-avatar>
            </v-col>
          </v-row>
        </v-card>
      </v-tab-item>
    </v-tabs>
  </v-card>
</template>

<script>
export default {
  name: "Services",
  data() {
    return {
      src1: require("../assets/Service/Breast cancer1.png"),
      src2: require("../assets/Service/Breast cancer2.png"),
      src3: require("../assets/Service/Liver cancer 1.png"),
      src4: require("../assets/Service/Liver cancer 2.png"),
      src5: require("../assets/Service/Osteoporosis 1.png"),
      src6: require("../assets/Service/Osteoporosis 2.png"),
      src7: require("../assets/Service/Osteoporosis 3.png"),
      src8: require("../assets/Service/Blood vessels1.png"),
      src9: require("../assets/Service/Blood vessels2.png"),
      src10: require("../assets/Service/mobile x-ray1.png"),
      src11: require("../assets/Service/mobile x-ray2.png"),
      src12: require("../assets/Service/mobile x-ray3.png"),
      src13: require("../assets/Service/mobile x-ray4.png"),
      src14: require("../assets/Service/Osteoporosis 4.png")
    };
  }
};
</script>

<style>
</style>