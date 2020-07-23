<template lang="pug">
    .preloader
        .block-top
            .block-top-1.block-top-group
            .block-top-2.block-top-group
            .block-top-3.block-top-group
            .block-top-4.block-top-group
            .block-top-5.block-top-group
            .block-top-6.block-top-group
            .block-top-7.block-top-group
            .block-top-8.block-top-group
        .block-bottom
            .block-bottom-1.block-bottom-group
            .block-bottom-2.block-bottom-group
            .block-bottom-3.block-bottom-group
            .block-bottom-4.block-bottom-group
            .block-bottom-5.block-bottom-group
            .block-bottom-6.block-bottom-group
            .block-bottom-7.block-bottom-group
            .block-bottom-8.block-bottom-group

</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component
export default class Preloader extends Vue {}
</script>

<style lang="scss">
.preloader {
  //   z-index: -10;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.7);
  position: fixed;

  .block-top {
    display: flex;
    justify-content: start;
    align-items: start;
    width: 100%;
    height: 50%;
    background-color: black;

    .block-top-group {
      width: 20%;
    }

    .block-top-1 {
      height: 40%;
      background-color: white;
    }
    .block-top-2 {
      height: 60%;
      background-color: blueviolet;
    }
    .block-top-3 {
      height: 80%;
      background-color: rgb(43, 55, 226);
    }
    .block-top-6 {
      height: 80%;
      background-color: rgb(43, 55, 226);
    }

    .block-top-7 {
      height: 60%;
      background-color: rgb(133, 114, 151);
    }

    .block-top-8 {
      height: 40%;
      background-color: white;
    }
  }
  .block-bottom {
    display: flex;
    justify-content: start;
    align-items: start;
    width: 100%;
    height: 50%;
    background-color: red;

    .block-bottom-group {
      width: 20%;
    }

    .block-bottom-1 {
      position: relative;
      top: -60%;
      height: 160%;
      background-color: yellow;
    }
    .block-bottom-2 {
      position: relative;
      top: -40%;
      height: 140%;
      background-color: rgb(86, 180, 83);
    }
    .block-bottom-3 {
      position: relative;
      top: -20%;
      height: 120%;
      background-color: rgb(83, 101, 180);
    }
    .block-bottom-6 {
      position: relative;
      top: -20%;
      height: 120%;
      background-color: rgb(109, 83, 180);
    }

    .block-bottom-7 {
      position: relative;
      top: -40%;
      height: 140%;
      background-color: rgb(83, 141, 180);
    }

    .block-bottom-8 {
      position: relative;
      top: -60%;
      height: 160%;
      background-color: yellow;
    }
  }
}
</style>