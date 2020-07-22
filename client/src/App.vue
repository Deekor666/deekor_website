<template lang="pug">
  #app
      Preloader
      router-view
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import Preloader from '@/components/Preloader.vue';

@Component({
    components: {
        Preloader
    }
})
export default class App extends Vue{


}

</script>

<style lang="scss">
</style>
