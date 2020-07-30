<template lang="pug">
  #app
      Preload
      router-view
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import Preload from '@/components/Preload.vue';

@Component({
    components: {
        Preload
    }
})
export default class App extends Vue{


}

</script>

<style lang="scss">
</style>
