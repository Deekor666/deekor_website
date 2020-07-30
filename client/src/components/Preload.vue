<template lang="pug">
    #preload
</template>

<script lang="ts">
    import {Component, Vue} from "vue-property-decorator";
    import Anime from 'animejs';
    import { Curtains } from '../Models/Curtains';
    import { Preloader } from '../Models/Preloader'

    @Component
    export default class Preload extends Vue {
        mounted(): void {
            function getSizeWindow() {
                const width: number = window.innerWidth;
                const height: number = document.documentElement.clientHeight;
                return {
                    width: width,
                    height: height
                };
            }
            const sizeWindow: Record<string, number> = getSizeWindow();
            const preloader: Record<string, any> = new Preloader(sizeWindow.width, sizeWindow.height, 'black');
            const htmlPreloader: HTMLElement = preloader.svg;
            preloader.addElement(htmlPreloader);
            const curtains = new Curtains(htmlPreloader, getSizeWindow(), 16, 'black');
            Anime({});
        }
    }
</script>

<style lang="scss">
#preload {
    position: absolute;
    width: 100%;
    height: 100%;
    // color: rgb(219, 13, 13);
}
</style>