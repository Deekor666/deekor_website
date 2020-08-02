<template lang="pug">
    .preload#preload
</template>

<script lang="ts">
    import {Component, Vue} from "vue-property-decorator";
    import { Curtain } from '../Models/Curtain';
    import { Preloader } from '../Models/Preloader';
<<<<<<< HEAD
import { Mesh } from "three";
    // import { Path } from  '../Models/Path';
=======
    import { Path } from  '../Models/Path';
>>>>>>> 5e71d10b3210d94f6a740b0618f15b220a83bb86

    @Component
    export default class Preload extends Vue {
        mounted(): void {
<<<<<<< HEAD
            const preloader = new Preloader();
            const curtain = new Curtain;
            preloader.addMesh(curtain.mesh);
            const myMesh: Mesh = preloader.scene.getObjectByName('curtain') as Mesh;
=======
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
>>>>>>> 5e71d10b3210d94f6a740b0618f15b220a83bb86
        }
    }
</script>

<style lang="scss">
<<<<<<< HEAD
// .lalala {
//     color: #595a7e;
// }
canvas {
    position: absolute;
}
=======
    /*#preload {*/
    /*    width: 100%;*/
    /*    height: 100%;*/
    /*    position: absolute;*/
    /*    background-color: black;*/
    /*    opacity: 0.5;*/
    /*}*/
>>>>>>> 5e71d10b3210d94f6a740b0618f15b220a83bb86
</style>