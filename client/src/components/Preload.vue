<template lang="pug">
    .preload#preload
</template>

<script lang="ts">
    import {Component, Vue} from "vue-property-decorator";
    import { Curtain } from '../Models/Curtain';
    import { Preloader } from '../Models/Preloader';
import { Mesh } from "three";
    // import { Path } from  '../Models/Path';

    @Component
    export default class Preload extends Vue {
        mounted(): void {
            const preloader = new Preloader();
            const curtain = new Curtain;
            preloader.addMesh(curtain.mesh);
            const myMesh: Mesh = preloader.scene.getObjectByName('curtain') as Mesh;
        }
    }
</script>

<style lang="scss">
// .lalala {
//     color: #595a7e;
// }
canvas {
    position: absolute;
}
</style>