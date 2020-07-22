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
  public showPreloader: boolean | any = true;
  mounted(): void {
    console.log(this.showPreloader);
    this.showPreloader = true;
    this.fetchData();
    }
  public async fetchData() {
    this.showPreloader = true;
    /*
    При загрузке контента
    const promises = this.items.map(item => axios.get('/api/items/${item.id}/'));
    const results = await Promise.all(promises);
    */
    const result = await setTimeout(function () { console.log('Timer working') }, 10000);

    console.log(result);
  }
}
</script>
