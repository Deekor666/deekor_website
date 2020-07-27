<template lang="pug">
    .preloader
        div.start-button(@click='sayHello' v-bind:class="{ 'button-off': this.tap }") {{this.tap ? hello : ''}}
        .block-top
            .block-top-1.block-top-group(v-bind:class="{ 'block-top-up': this.tap }")
                .border-line-top(v-bind:class="{ 'border-line-top-off': this.tap }")
            .block-top-2.block-top-group(v-bind:class="{ 'block-top-up': this.tap }")
                .top-letter D
                .border-line-top(v-bind:class="{ 'border-line-top-off': this.tap }")
            .block-top-3.block-top-group(v-bind:class="{ 'block-top-up': this.tap }")
                .top-letter E
                .border-line-top(v-bind:class="{ 'border-line-top-off': this.tap }")
            .block-top-4.block-top-group(v-bind:class="{ 'block-top-up': this.tap }")
                .top-letter E
                .border-line-top(v-bind:class="{ 'border-line-top-off': this.tap }")
            .block-top-5.block-top-group(v-bind:class="{ 'block-top-up': this.tap }")
                .top-letter K
                .border-line-top(v-bind:class="{ 'border-line-top-off': this.tap }")
            .block-top-6.block-top-group(v-bind:class="{ 'block-top-up': this.tap }")
                .top-letter O
                .border-line-top(v-bind:class="{ 'border-line-top-off': this.tap }")
            .block-top-7.block-top-group(v-bind:class="{ 'block-top-up': this.tap }")
                .top-letter R
                .border-line-top(v-bind:class="{ 'border-line-top-off': this.tap }")
            .block-top-8.block-top-group(v-bind:class="{ 'block-top-up': this.tap }")
                .border-line-top(v-bind:class="{ 'border-line-top-off': this.tap }")
        .block-bottom
            .block-bottom-1.block-bottom-group(v-bind:class="{ 'block-bottom-down': this.tap }")
            .block-bottom-2.block-bottom-group(v-bind:class="{ 'block-bottom-down': this.tap }")
            .block-bottom-3.block-bottom-group(v-bind:class="{ 'block-bottom-down': this.tap }")
            .block-bottom-4.block-bottom-group(v-bind:class="{ 'block-bottom-down': this.tap }")
            .block-bottom-5.block-bottom-group(v-bind:class="{ 'block-bottom-down': this.tap }")
            .block-bottom-6.block-bottom-group(v-bind:class="{ 'block-bottom-down': this.tap }")
            .block-bottom-7.block-bottom-group(v-bind:class="{ 'block-bottom-down': this.tap }")
            .block-bottom-8.block-bottom-group(v-bind:class="{ 'block-bottom-down': this.tap }")

</template>

<script lang="ts">
    import {Component, Vue} from "vue-property-decorator";

    @Component
    export default class Preloader extends Vue {
        public tap: boolean = false;
        public hello: string = 'Hello';
        sayHello() {
            this.tap = true;
            // подать знак родителю, что надо из темноты вывести основную страницу
        }
    }
</script>

<style lang="scss">
    .preloader {
        .top-letter {
            position: relative;
            top: 50%;
            left: 50%;
            display: inline;
            font-size: 30px;
            font-family: "Roboto", sans-serif;
            color: wheat;
        }

        width: 100%;
        height: 100%;
        position: fixed;
        .start-button {
            display: flex;
            justify-content: center;
            align-items: center;
            color: wheat;
            z-index: 2;
            width: 100px;
            height: 100px;
            background-color: #214aff;
            opacity: 0;
            position: absolute;
            left: 48%;
            top: 48%;
            animation: start-button 2s linear;
            animation-iteration-count: 1;
            animation-fill-mode: forwards;
            animation-delay: 2s;

        }
        .button-off {
            animation: button-off 2s linear;
        }

        .block-top {
            display: flex;
            justify-content: start;
            align-items: start;
            width: 100%;
            height: 50%;

            .block-top-group {
                background-color: black;
                position: relative;
                width: 20%;
            }

            .block-top-up {
                opacity: 1;
                animation: top-up 2s linear;
                animation-iteration-count: 1;
                animation-fill-mode: forwards;
            }

            .border-line-top {
                z-index: 1;
                background-color: aqua;
                position: relative;
                top: 99%;
                width: 0;
                height: 1px;
            }

            .border-line-top-off {
                display: none;
            }

            .block-top-1 {
                height: 40%;
                .border-line-top {
                    animation: top-1 500ms linear;
                    animation-iteration-count: 1;
                    animation-fill-mode: forwards;
                }
                }

            .block-top-2 {
                height: 60%;
                .border-line-top {
                    animation: top-1 500ms linear;
                    animation-iteration-count: 1;
                    animation-fill-mode: forwards;
                    animation-delay: 500ms;
                }
            }

            .block-top-3 {
                height: 80%;
                .border-line-top {
                    animation: top-1 500ms linear;
                    animation-iteration-count: 1;
                    animation-fill-mode: forwards;
                    animation-delay: 1s;
                }
            }
            .block-top-4 {
                height: 100%;
                .border-line-top {
                    animation: top-1 500ms linear;
                    animation-iteration-count: 1;
                    animation-fill-mode: forwards;
                    animation-delay: 1.5s;
                }
            }
            .block-top-5 {
                height: 100%;
                .border-line-top {
                    animation: top-1 500ms linear;
                    animation-iteration-count: 1;
                    animation-fill-mode: forwards;
                    animation-delay: 2s;
                }
            }

            .block-top-6 {
                height: 80%;
                .border-line-top {
                    animation: top-1 500ms linear;
                    animation-iteration-count: 1;
                    animation-fill-mode: forwards;
                    animation-delay: 2.5s;
                }
            }

            .block-top-7 {
                height: 60%;
                .border-line-top {
                    animation: top-1 500ms linear;
                    animation-iteration-count: 1;
                    animation-fill-mode: forwards;
                    animation-delay: 3s;
                }
            }

            .block-top-8 {
                height: 40%;
                .border-line-top {
                    animation: top-1 500ms linear;
                    animation-iteration-count: 1;
                    animation-fill-mode: forwards;
                    animation-delay: 3.5s;
                }
            }
        }

        .block-bottom {
            display: flex;
            justify-content: start;
            align-items: start;
            width: 100%;
            height: 50%;

            .block-bottom-down {
                opacity: 1;
                animation: bottom-down 2s linear;
                animation-iteration-count: 1;
                animation-fill-mode: forwards;
            }

            .block-bottom-group {
                background-color: black;
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

            .block-bottom-4 {
                position: relative;
                top: 0;
                height: 100%;
            }

            .block-bottom-5 {
                position: relative;
                top: 0;
                height: 100%;
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
    @keyframes top-up {
        to {
            border-radius: 0 0 50px 50px;
            height: 0;
        }
    }
    @keyframes bottom-down {
        to {
            top: 100%;
        }
    }
    @keyframes button-off {
        to {
            opacity: 0;
        }
    }
</style>