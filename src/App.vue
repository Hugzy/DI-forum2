<template>
  <div id="app">
    <h3>Example 1</h3>
    <div>
      Data: {{ example1 }}
    </div>
    <button @click="getLanguage">Get Language</button>
    <hr> 
  </div>
</template>

<script>
import axios from 'axios';
export default {
    name: 'app',
    data() {
        return {
            example1: ''
        };
    },
    methods: {
        async getLanguage() {
            try {
                const res = await axios.post('http://localhost:4000/graphql', {
                    query:
                        '{ forums(id: "7d95f170-a066-4824-b4f6-8b94ddd92276"){name} }'
                });
                this.example1 = res.data.data.forums[0].name;
            } catch (e) {
                console.log('err', e);
            }
        }
    }
};
</script>

<style>
</style>
