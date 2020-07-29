<template lang="pug">
    .preloader#preloader
</template>

<script lang="ts">
    import {Component, Vue} from "vue-property-decorator";
    import Anime from 'animejs';
    import { Curtains } from '@/Models/Curtains';

    @Component
    export default class Preloader extends Vue {
        public tap: boolean = false;
        public hello: string = 'Hello';

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
            // divPreloader.classList.add('preloader');
            preloader!.style.width = getSizeWindow().width + 'px';
            preloader!.style.height = getSizeWindow().height + 'px';
            preloader!.style.backgroundColor = 'black';
            const curtains = new Curtains(getSizeWindow(), 16);
            console.log(curtains);
            Anime({});
        }




        sayHello() {
            this.tap = true;
            // подать знак родителю, что надо из темноты вывести основную страницу
        }
    }
</script>

<style lang="scss">
    #preloader {
        position: absolute;
        z-index: 100;
        width: 100%;
        height: 100%;
        background-color: black;
        opacity: 0.5;
    }
</style>