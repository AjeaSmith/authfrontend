<template>
  <div class="hello">
    <h1>hi</h1>
    <button @click="getUser()">Get users</button>
  </div>
</template>

<script>
import axios from "axios";
const api = "https://vueauthapp.herokuapp.com/api/auth/login";
export default {
  name: "HelloWorld",
  methods: {
    getUser() {
      axios.get(api).then(result => {
        console.log(result.data);
      });
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
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
