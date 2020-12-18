<template lang="pug">
    div.header
      v-card(color='gray lighten-4', flat, height='200px', tile)
        v-toolbar(extended)
          v-app-bar-nav-icon
          v-toolbar-title Deekor.dev
          v-spacer
          v-btn(icon)
            v-icon mdi-magnify
          v-btn(icon)
            v-icon mdi-heart
          v-btn(icon)
            v-icon mdi-dots-vertical
</template>

<script lang="ts">
import {Component, Prop, Vue} from 'vue-property-decorator';

@Component
export default class Header extends Vue {
    @Prop()
    @Prop() readonly msg!: string;
    @Prop({default: 'John doe'}) readonly name!: string;
    @Prop({required: true}) readonly age!: number;
    @Prop(String) readonly address!: string;
    @Prop({required: false, type: String, default: 'Developer'}) readonly job!: string;

    data() {
        return {
            show: true,
            string1: 'Hello',
            string2: 'World!'
        }
    }
/// Computed properties /// Sort computed properties (get, set...)
    get fullName(): string {
        return this.msg + 'lalala';
    }
/// Methods ///
    public addNum(num1: number, num2: number): number {
        return num1 + num2
    }
}
</script>

<style lang="scss">

</style>