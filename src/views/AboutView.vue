<template>
    <div class="ma-auto" style="display:grid; place-content: center;height:100vh;">
    <div style="max-width: 300px;">
      <v-otp-input
        v-model="otp"
        :disabled="loading"
        @finish="onFinish"
      ></v-otp-input>
    </div>
      <v-overlay absolute :value="loading">
        <v-progress-circular
          indeterminate
          color="primary"
        ></v-progress-circular>
      </v-overlay>
    </div>
</template>
<style scoped>
 .position-relative {
   position: relative;
 }</style>
<script>
import Vue from "vue";
  export default {
    data: () => ({
      loading: false,
      snackbar: false,
      snackbarColor: 'default',
      otp: '',
      text: '',
      expectedOtp: ['133707','532777'],
    }),
    methods: {
      onFinish (rsp) {
        this.loading = true
        setTimeout(() => {
          this.loading = false
          this.expectedOtp.forEach(element => {
            if (element === rsp) {
              Vue.$cookies.set("machineId",rsp)
              this.$router.push('/')
            }
          });
        }, 3500)
      },
    },
  }
</script>