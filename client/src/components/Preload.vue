<template lang="pug">
    .preload#preload
</template>

<script lang="ts">
    import {Component, Vue} from "vue-property-decorator";
    import { Curtain } from '../Models/Curtain';
    import { Preloader } from '../Models/Preloader';
    import { Path } from  '../Models/Path';

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
            const preloaderObject: Record<string, any> = new Preloader(sizeWindow.width, sizeWindow.height, 'white');
            const preloader: SVGSVGElement = preloaderObject.svg;
            preloaderObject.addElement(preloader, 'preloader');
            const curtains = new Curtain(preloader, getSizeWindow(), 16, 'black');

            const preloaderLineObject: Record<string, any> = new Preloader(600, 600, 'black');
            const preloaderLine: HTMLElement = preloaderLineObject.svg;
            preloaderLineObject.addElement(preloaderLine, 'preloader-line');
            const pathObject = new Path('#fff', 'red', 'M 30 472 L 87 91 L 267 80 L 501 78 L 489 304 L 500 450 L 293 457 Z');
            const path = pathObject.addElement('path');
            preloaderLine.appendChild(path);
        }
    }
</script>

<style lang="scss">
    /*#preload {*/
    /*    width: 100%;*/
    /*    height: 100%;*/
    /*    position: absolute;*/
    /*    background-color: black;*/
    /*    opacity: 0.5;*/
    /*}*/
</style>