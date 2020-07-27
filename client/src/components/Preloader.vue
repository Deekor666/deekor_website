<template lang="pug">
    .preloader
        div.start-button(@click='sayHello') {{this.tap ? hello : ''}}
        .block-top
            .block-top-1.block-top-group
                .border-line-top
            .block-top-2.block-top-group
                .border-line-top
            .block-top-3.block-top-group
                .border-line-top
            .block-top-4.block-top-group
                .border-line-top
            .block-top-5.block-top-group
                .border-line-top
            .block-top-6.block-top-group
                .border-line-top
            .block-top-7.block-top-group
                .border-line-top
            .block-top-8.block-top-group
                .border-line-top
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
    import {Component, Vue} from "vue-property-decorator";

    @Component
    export default class Preloader extends Vue {
        public tap: boolean = false;
        public hello: string = 'Hello';
        sayHello() {
            this.tap = true;
            // начать анимацию падения шторок
            // подать знак родителю, что надо из темноты вывести основную страницу
        }
    }
</script>

<style lang="scss">
    .preloader {
        //   z-index: -10;
        width: 100%;
        height: 100%;
        background-color: rgba(0, 0, 0, 0.7);
        position: fixed;
        .start-button {
            z-index: 2;
            width: 100px;
            height: 100px;
            background-color: #214aff;
            opacity: 0;
            position: absolute;
            left: 48%;
            top: 48%;
            animation: start-button 1s linear;
            animation-iteration-count: 1;
            animation-fill-mode: forwards;
            animation-delay: 8s;

        }

        .block-top {
            display: flex;
            justify-content: start;
            align-items: start;
            width: 100%;
            height: 50%;
            background-color: black;

            .block-top-group {
                position: relative;
                width: 20%;
            }

            .border-line-top {
                z-index: 1;
                background-color: aqua;
                position: relative;
                top: 100%;
                width: 0;
                height: 2px;
            }

            .block-top-1 {
                transform: rotateX(45grad);

                height: 40%;
                .border-line-top {
                    animation: top-1 1s linear;
                    animation-iteration-count: 1;
                    animation-fill-mode: forwards;
                }
                }

            .block-top-2 {
                height: 60%;
                .border-line-top {
                    animation: top-1 1s linear;
                    animation-iteration-count: 1;
                    animation-fill-mode: forwards;
                    animation-delay: 1s;
                }
            }

            .block-top-3 {
                height: 80%;
                .border-line-top {
                    animation: top-1 1s linear;
                    animation-iteration-count: 1;
                    animation-fill-mode: forwards;
                    animation-delay: 2s;
                }
            }
            .block-top-4 {
                height: 100%;
                .border-line-top {
                    animation: top-1 1s linear;
                    animation-iteration-count: 1;
                    animation-fill-mode: forwards;
                    animation-delay: 3s;

                }

            }
            .block-top-5 {
                height: 100%;
                .border-line-top {
                    animation: top-1 1s linear;
                    animation-iteration-count: 1;
                    animation-fill-mode: forwards;
                    animation-delay: 4s;
                }
            }

            .block-top-6 {
                height: 80%;
                .border-line-top {
                    animation: top-1 1s linear;
                    animation-iteration-count: 1;
                    animation-fill-mode: forwards;
                    animation-delay: 5s;
                }
            }

            .block-top-7 {
                height: 60%;
                .border-line-top {
                    animation: top-1 1s linear;
                    animation-iteration-count: 1;
                    animation-fill-mode: forwards;
                    animation-delay: 6s;
                }
            }

            .block-top-8 {
                height: 40%;
                .border-line-top {
                    animation: top-1 1s linear;
                    animation-iteration-count: 1;
                    animation-fill-mode: forwards;
                    animation-delay: 7s;
                }
            }
        }

        .block-bottom {
            z-index: -1;
            background-color: black;
            display: flex;
            justify-content: start;
            align-items: start;
            width: 100%;
            height: 50%;

            .block-bottom-group {
                width: 20%;
            }

            .block-bottom-1 {
                position: relative;
                top: -60%;
                height: 160%;
            }

            .block-bottom-2 {
                position: relative;
                top: -40%;
                height: 140%;
            }

            .block-bottom-3 {
                position: relative;
                top: -20%;
                height: 120%;
            }

            .block-bottom-6 {
                position: relative;
                top: -20%;
                height: 120%;
            }

            .block-bottom-7 {
                position: relative;
                top: -40%;
                height: 140%;
            }

            .block-bottom-8 {
                z-index: -1;
                position: relative;
                top: -60%;
                height: 160%;
            }
        }
    }
    @keyframes top-1 {
        to {
            width: 100%;
        }
    }
    @keyframes top-8 {
        from{
            left: 100%;
        }
        to {
            left: 0;
        }
    }
    @keyframes start-button {
        to {
            border-radius: 50%;
            opacity: 1;
        }
    }
</style>