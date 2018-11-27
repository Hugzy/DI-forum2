<template>
  <div id="app">
    <h3>forums</h3>
    <ul id>
      <li v-for="forum in forums" :key="forum.id">{{forum.name}} | {{forum.author}}</li>
    </ul>
    <hr>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "app",
  data() {
    return {
      forums: []
    };
  },
  methods: {
    async getForums() {
      await axios
        .post("http://localhost:4000/graphql", {
          query: "{ forums {name, author} }"
        })
        .then(result => {
          this.forums = result.data.data.forums;
        })
        .catch(err => {
          throw "error: " + err;
        });
    }
  },
  beforeMount() {
    this.getForums();
  }
};
</script>

<style>
</style>
