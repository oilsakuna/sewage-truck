<template>
<!-- ตั้งค่ารหัสผ่าน -->
  <div class="setpassword">
   <v-app-bar
      dark
      height="200px"
      color="#04B640"
      class=""
      style="border-radius: 0px 0px 125px 125px"
    >
      <v-toolbar-title style="margin-left: 30px; padding: auto" class="text-h5"
        >ตั้งค่ารหัสผ่าน</v-toolbar-title
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

    <v-form ref="form" v-model="form" class="pa-4 pt-6">
      <v-container>
        <v-row>
          <!-- <v-col cols="12" sm="12">
            <v-text-field
              v-model="password"
              :rules="[rules.password, rules.length(10)]"
              filled
              rounded
              dense
              color="green"
              counter="10"
              label="รหัสผ่านปัจจุบัน"
              style="min-height: 96px"
              type="password"
            ></v-text-field>
          </v-col> -->

          <v-col cols="12" sm="12">
            <v-text-field
              v-model="phone"
              :rules="[rules.phone, rules.length()]"
              filled
              rounded
              dense
              color="green"
              label="เบอร์โทรศัพท์"
            ></v-text-field>
          </v-col>

          <v-col cols="12" sm="12">
            <v-text-field
              v-model="password"
              :rules="[rules.phone, rules.length()]"
              filled
              rounded
              dense
              color="green"
              label="ตั้งค่ารหัสผ่าน"
            ></v-text-field>
          </v-col>

          <v-col cols="12" sm="12">
            <v-text-field
              v-model="confirmpassword"
              :rules="[rules.email, rules.length()]"
              filled
              rounded
              dense
              color="green"
              label="ยืนยันรหัสผ่าน"
              type="email"
            ></v-text-field>
          </v-col>

          <v-checkbox
            v-model="checkbox"
            :rules="[(v) => !!v || 'You must agree to continue!']"
            label="คุณยืนยันการเปลี่ยนแปลง ?"
            required
            color="green"
          ></v-checkbox>
        </v-row>
      </v-container>
      <v-card-actions>
        <v-btn color="error" class="mr-4" @click="reset"> CLEAR </v-btn>
        <v-spacer></v-spacer>
        <v-btn @click="backlogin" color="success" class="mr-4">SUMMIT</v-btn>
      </v-card-actions>
    </v-form>
    <v-divider></v-divider>
    
    
  </div>
</template>
<script>
export default {
  data: () => ({
    agreement: false,
    confirmpassword: undefined,
    form: false,
    password: undefined,
    phone: undefined,
    rules: {
      // email: (v) => !!(v || "").match() || "Please enter a valid password",
      // password: (v) => !!(v || "").match() || "Please enter a valid password",
      length: (len) => (v) =>
        (v || "").length >= len || `กรุณาใส่รหัส `,

      // password: v => !!(v || '').match(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*(_|[^\w])).+$/) ||
      //   'Password must contain an upper case letter, a numeric character, and a special character',
      // required: v => !!v || 'This field is required',
    },
  }),

  methods: {
    
    backmain(){
      this.$router.push("/")
    },
    backlogin(){
      this.$router.push("/login")
    },
     reset() {
      this.$refs.form.reset();
    },
  }
};
</script>
