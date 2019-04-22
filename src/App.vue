<template>
  <div id="app">
    <div id="nav">
      <b-navbar type="dark" variant="dark" class="navbar">
        <b-navbar-brand>Auth with JWT</b-navbar-brand>
        <div class="right">
          <b-nav-item href="#" to="/login" v-if="!isLoggedin">Login</b-nav-item>
          <b-nav-item href="#" to="/" v-if="!isLoggedin">Register</b-nav-item>
          <b-nav-item href="#" @click="logout()">Logout</b-nav-item>
        </div>
      </b-navbar>
    </div>
    <router-view/>
  </div>
</template>
<script>
import { mapState, mapGetters } from "vuex";
export default {
  name: "App",
  data() {
    return {
      isLoggedin: false
    };
  },
  methods: {
    logout() {
      localStorage.removeItem("token");
      this.$router.push("/login");
    }
  },
  computed: {
    isToken: {
      get() {
        return this.isLoggedin;
      },
      set(value) {
        if (localStorage.token) {
          this.isLoggedin = true;
          console.log(this.isLoggedin);
        }
      }
    }
  }
};
</script>

<style>
.navbar {
  display: flex;
  justify-content: space-between;
}
.right {
  display: flex;
  list-style: none;
}
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
#nav a {
  font-weight: bold;
  color: #fff;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
