<template lang="pug">
    .preloader
        h1 Hello Preloader
        .blocks
            .top-blocks
            .bottom-blocks
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component
export default class Preloader extends Vue{

}
</script>

<style lang="scss">

</style>