<template lang="pug">
    div.header
        h1.text-h1 {{ string1 + ' ' + string2 }}
        h2.text-h2 {{ list }}
        h3.text-h3 {{ fullName }}
        h3.text-h3(v-model="msgChanged") {{ this.msg }}
</template>

<script lang="ts">
import {Component, Prop, Watch, Vue} from 'vue-property-decorator';

@Component
export default class Header extends Vue {
    @Prop()
    @Prop() readonly msg!: string;
    @Prop({default: 'John doe'}) readonly name!: string;
    @Prop({required: true}) readonly age!: number;
    @Prop(String) readonly address!: string;
    @Prop({required: false, type: String, default: 'Developer'}) readonly job!: string;

    private list: Array<object> = [
        {
            name: 'Turk',
            age: '26'
        },
        {
            name: 'John',
            age: '30'
        }
    ];

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
/// Watchers
    @Watch('msg', {
        immediate: true, deep: true
    })
    msgChanged(msg: string) {
        // do something
    }
}
</script>

<style lang="scss">

</style>