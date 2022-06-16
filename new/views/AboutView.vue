<template>
  <div class="about">
    

    <v-carousel
    cycle
    height="600"
    hide-delimiter-background
    show-arrows-on-hover
  >
    <v-carousel-item
      v-for="(slide, i) in slides"
      :key="i"
    >
      <v-sheet
        :color="colors[i]"
        height="100%"
      >
        <v-row
          class="fill-height"
          align="center"
          justify="center"
        >
          <div class="text-h2">
            {{ slide }} 
          </div>
        </v-row>
      </v-sheet>
    </v-carousel-item>
  </v-carousel>

  <div class="text-center">
            <v-btn
             @click="next"
              x-large
              color="success"
              dark
            >
              เริ่มต้นใช้งาน
            </v-btn>
          </div>

  </div>
</template>

<script>
  export default {
    data () {
      return {
        colors: [
          '#B9F6CA',
          '#69F0AE',
          '#00E676',
          '#69F0AE',
          '#B9F6CA',
        ],
        slides: [
          'ยินดีต้อนรับ',
          'สู่ บริการ',
          'ขนสิ่งปฏิกูล',
          'กำจัดสิ่งปฏิกูล',
          'ภายในครัวเรือน',
        ],
      }
    },
    methods:{
      next(){this.$router.push('/login')}
    }
  }
</script>