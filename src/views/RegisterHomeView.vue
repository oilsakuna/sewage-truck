<template>
  <div class="registerhome">
    <!-- ประชาชนทั่วไป -->
    <v-app-bar
      dark
      height="200px"
      color="#04B640"
      class=""
      style="border-radius: 0px 0px 125px 125px"
    >
      <v-toolbar-title style="margin-left: 30px; padding: auto" class="text-h5"
        >ประชาชนทั่วไป</v-toolbar-title
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
              label="ชื่อ"
               placeholder="Dense & Rounded"
              filled
              rounded
              dense
            ></v-text-field>
          </v-col>

          <v-col cols="12" sm="6">
            <v-text-field
              label="นามสกุล"
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
              label="ชื่อและประเภทอาคาร"
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

        </v-row>
      </v-container>
    </v-form>

    

    <v-card-actions>
      <v-btn text @click="$refs.form.reset()"> Clear </v-btn>
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



