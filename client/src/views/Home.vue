<template lang="pug">
  .home
    Header(msg="Hello Props!" age="32")
</template>

<script lang="ts">
    // @ is an alias to /src
import { Component, Vue } from 'vue-property-decorator'
import Header from '@/components/Header.vue'

@Component({
  components: {
    Header,
  }
})
export default class Home extends Vue {
  public showPreloader: boolean = true;
  mounted(): void {
    this.showPreloader = true;
    this.fetchData();
    }
  public async fetchData() {
    this.showPreloader = true;
    const result = await setTimeout(function () { console.log('Timer working') }, 10000);
    console.log('ololo');
    console.log(result);
  }
}
</script>
