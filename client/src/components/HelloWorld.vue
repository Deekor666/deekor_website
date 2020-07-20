<template>
  <div class="hello row">
    <h1>{{ msg }}</h1>
    <div class="col">
      <ul class="list-group">
        <li
          class="list-group-item"
          v-for="(tutorial, index) in tutorials"
          :key="index"
        >
          {{tutorial.title}}
        </li>
      </ul>
    </div>
    <h2>{{ tutorials }}</h2>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import ClassTestApi from '../services/testApi';

@Component
export default class HelloWorld extends Vue {
  @Prop() private msg!: string;
  private tutorials: any = [];

  retrieveTutorials() {
    ClassTestApi.getAll()
      .then((response) => {
        this.tutorials = response.data;
        console.log(response.data);
      })
      .catch((e) => {
        console.log(e);
      });
  }
  mounted() {
    this.retrieveTutorials();
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
