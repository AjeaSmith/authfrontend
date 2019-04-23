<template>
  <div id="app">
    <div id="nav">
      <b-navbar type="dark" variant="dark" class="navbar">
        <b-navbar-brand>Auth with JWT</b-navbar-brand>
        <div class="right">
          <b-nav-item href="#" to="/login">Login</b-nav-item>
          <b-nav-item href="#" to="/">Register</b-nav-item>
          <b-nav-item href="#" @click="logout()">Logout</b-nav-item>
        </div>
      </b-navbar>
    </div>
    <router-view/>
  </div>
</template>
<script>
export default {
  name: "App",
  data() {
    return {};
  },
  methods: {
    logout() {
      localStorage.removeItem("token");
      this.$router.push("/login");
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
