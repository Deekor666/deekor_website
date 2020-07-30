<template lang="pug">
    .preloader#preloader
</template>

<script lang="ts">
    import {Component, Vue} from "vue-property-decorator";
    import Anime from 'animejs';
    import { Curtains } from '@/Models/Curtains';

    @Component
    export default class Preloader extends Vue {

        mounted(): void {
            const preloader: HTMLElement | null = document.getElementById('preloader');
            function getSizeWindow() {
                const width: number = window.innerWidth;
                const height: number = document.documentElement.clientHeight;
                return {
                    width: width,
                    height: height
                };
            }
            preloader!.style.position = 'absolute';
            preloader!.style.width = getSizeWindow().width + 'px';
            preloader!.style.height = getSizeWindow().height + 'px';
            preloader!.style.backgroundColor = 'black';
            const curtains = new Curtains(preloader, getSizeWindow(), 16);
            console.log(curtains);
            Anime({});
        }
    }
</script>

<style lang="scss">
</style>