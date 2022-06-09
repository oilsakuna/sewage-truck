<template>
<!-- หน่วยงานรถขนส่งสิ่งปฏิกูล -->
  <div class="registertruck">
  <v-app-bar
      dark
      height="200px"
      color="#04B640"
      class=""
      style="border-radius: 0px 0px 125px 125px"
    >
      <v-toolbar-title style="margin-left: 30px; padding: auto" class="text-h5"
        >หน่วยงานรถขนส่งสิ่งปฏิกูล</v-toolbar-title
      >

      <v-spacer></v-spacer>
      <v-app-bar-nav-icon
        x-large
        style="margin-right: auto"
      ></v-app-bar-nav-icon>
    </v-app-bar>

     <v-icon
          color="#08782E"
          class="mr-5"
          x-large
          @click="backmain"
        >
          mdi-arrow-left
        </v-icon>
        
     <v-form>
      <v-container>
        <v-row>
          <v-col cols="12" sm="6">
            <v-text-field
              label="ชื่อหน่วยงาน/ผู้ประกอบการขนส่งสิ่งปฏิกูล"
              placeholder="Dense & Rounded"
              filled
              rounded
              dense
            ></v-text-field>
          </v-col>

          <v-col cols="12" sm="6">
            <v-text-field
              label="หมายเลขอนุญาต"
              placeholder="Dense & Rounded"
              filled
              rounded
              dense
            ></v-text-field>
          </v-col>

          <v-col cols="12" sm="12">
            <v-text-field
              label="อนุญาตโดย"
              placeholder="Dense & Rounded"
              filled
              rounded
              dense
            ></v-text-field>
          </v-col>

          <v-col cols="12" sm="12">
            <v-text-field
              label="ที่อยู่"
              placeholder="Dense & Rounded"
              filled
              rounded
              dense
            ></v-text-field>
          </v-col>

          <v-col cols="12" sm="6">
            <v-text-field
              label="ตำบล"
              placeholder="Dense & Rounded"
              filled
              rounded
              dense
            ></v-text-field>
          </v-col>

          <v-col cols="12" sm="6">
            <v-text-field
              label="อำเภอ"
              placeholder="Dense & Rounded"
              filled
              rounded
              dense
            ></v-text-field>
          </v-col>

          <v-col cols="12" sm="6">
            <v-text-field
              label="จังหวัด"
              placeholder="Dense & Rounded"
              filled
              rounded
              dense
            ></v-text-field>
          </v-col>

          <v-col cols="12" sm="6">
            <v-text-field
              label="รหัสไปรษณีย์"
              placeholder="Dense & Rounded"
              filled
              rounded
              dense
            ></v-text-field>
          </v-col>

          <v-col cols="12" sm="12">
            <v-text-field
              label="โทรศัพท์"
              placeholder="Dense & Rounded"
              filled
              rounded
              dense
            ></v-text-field>
          </v-col>

          <v-col cols="12" sm="12">
            <v-text-field
              label="หมายเลขทะเบียนรถสูบสิ่งปฏิกูล"
              placeholder="Dense & Rounded"
              filled
              rounded
              dense
            ></v-text-field>
          </v-col>

          <v-col cols="12" sm="6">
            <v-text-field
              label="ชื่อคนขับรถ"
              placeholder="Dense & Rounded"
              filled
              rounded
              dense
            ></v-text-field>
          </v-col>

          <v-col cols="12" sm="6">
            <v-text-field
              label="โทรศัพท์คนขับรถ"
              placeholder="Dense & Rounded"
              filled
              rounded
              dense
            ></v-text-field>
          </v-col>

          <v-col cols="12" sm="6">
            <v-text-field
              label="ชื่อพนักงานเก็บขน"
              placeholder="Dense & Rounded"
              filled
              rounded
              dense
            ></v-text-field>
          </v-col>

          <v-col cols="12" sm="6">
            <v-text-field
              label="โทรศัพท์พนักงานเก็บขน"
              placeholder="Dense & Rounded"
              filled
              rounded
              dense
            ></v-text-field>
          </v-col>

          <v-col cols="12" sm="12">
          <v-file-input
          label="อัพโหลดรูปรถ"
          filled
          rounded
          dense
          prepend-icon="mdi-camera"
        ></v-file-input> 
        </v-col>


        </v-row>
      </v-container>
    </v-form>


      <!-- <v-form ref="form" v-model="form" class="pa-4 pt-6">
        <v-text-field
          label="ชื่อหน่วยงาน/ผู้ประกอบการขนส่งสิ่งปฏิกูล"
          placeholder="Dense & Rounded"
          filled
          rounded
          dense
        ></v-text-field>
        <v-text-field
          label="หมายเลขอนุญาต"
          placeholder="Dense & Rounded"
          filled
          rounded
          dense
        ></v-text-field>
        <v-text-field
          label="อนุญาตโดย"
          placeholder="Dense & Rounded"
          filled
          rounded
          dense
        ></v-text-field>
        <v-text-field
          label="ที่อยู่"
          placeholder="Dense & Rounded"
          filled
          rounded
          dense
        ></v-text-field>
      </v-form>

      <v-form>
        <v-container>
          <v-row>
            <v-col cols="12" sm="6">
              <v-text-field
                label="ตำบล"
                placeholder="Dense & Rounded"
                filled
                rounded
                dense
              ></v-text-field>
              <v-text-field
                label="อำเภอ"
                placeholder="Dense & Rounded"
                filled
                rounded
                dense
              ></v-text-field>
            </v-col>
            <v-col cols="12" sm="6">
              <v-text-field
                label="จังหวัด"
                placeholder="Dense & Rounded"
                filled
                rounded
                dense
              ></v-text-field>
              <v-text-field
                label="รหัสไปรษณีย์"
                placeholder="Dense & Rounded"
                filled
                rounded
                dense
              ></v-text-field>
            </v-col>
          </v-row>
        </v-container>
      </v-form>

      <v-form ref="form" v-model="form" class="pa-4 pt-6">
        <v-text-field
          label="โทรศัพท์"
          placeholder="Dense & Rounded"
          filled
          rounded
          dense
        ></v-text-field>
        <v-text-field
          label="หมายเลขทะเบียนรถสูบสิ่งปฏิกูล"
          placeholder="Dense & Rounded"
          filled
          rounded
          dense
        ></v-text-field>
        <v-text-field
          label="ชื่อคนขับรถ"
          placeholder="Dense & Rounded"
          filled
          rounded
          dense
        ></v-text-field>
        <v-text-field
          label="โทรศัพท์คนขับรถ"
          placeholder="Dense & Rounded"
          filled
          rounded
          dense
        ></v-text-field>
        <v-text-field
          label="ชื่อพนักงานเก็บขน"
          placeholder="Dense & Rounded"
          filled
          rounded
          dense
        ></v-text-field>
        <v-text-field
          label="โทรศัพท์พนักงานเก็บขน"
          placeholder="Dense & Rounded"
          filled
          rounded
          dense
        ></v-text-field>

        <v-file-input
          label="อัพโหลดรูปรถ"
          filled
          rounded
          dense
          prepend-icon="mdi-camera"
        ></v-file-input> -->
<!-- 
      </v-form> -->
      <v-card-actions>
      <v-btn
        text
        @click="$refs.form.reset()"
      >
        Clear
      </v-btn>
      <v-spacer></v-spacer>
      <v-btn
        :disabled="!form"
        :loading="isLoading"
        class="white--text"
        color="green"
        depressed
      >
        Submit
      </v-btn>
    </v-card-actions>
      
   
  </div>
</template>
<script>

export default {
methods: {
    backmain(){
      this.$router.push("/")
    },
  }
};
</script>



