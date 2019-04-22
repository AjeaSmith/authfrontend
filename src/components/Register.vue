<template>
  <b-container class="mt-2 container-height">
    <b-row class="row-height">
      <b-col>
        <div
          v-if="isLoading"
          class="d-flex justify-content-center align-item-center spinner-height"
        >
          <b-spinner variant="primary" label="Loading..." style="width: 4rem; height: 4rem;"></b-spinner>
        </div>
        <div class="form-flex">
          <h3 class="mb-3">Register to Manage Notes</h3>
          <b-form class="border p-3 form-width">
            <b-alert v-if="dataError" variant="danger" show>{{dataError}}</b-alert>
            <b-form-group label="Username">
              <b-form-input
                v-model="username"
                placeholder="Enter name"
                :class="{'is-invalid': submitted && $v.username.$error}"
              ></b-form-input>
              <b-form-text
                text-variant="danger"
                v-if="submitted && !$v.username.required"
              >Field is required</b-form-text>
              <b-form-text
                text-variant="danger"
                v-if="submitted && !$v.username.minLength"
              >Must be 4 characters long</b-form-text>
            </b-form-group>
            <!-- Name field ends here -->
            <b-form-group label="Email">
              <b-form-input
                type="email"
                required
                placeholder="Your email"
                v-model="email"
                :class="{'is-invalid': submitted && $v.email.$error}"
              ></b-form-input>
              <b-form-text
                text-variant="danger"
                v-if="submitted && !$v.email.email"
              >Must be a valid email</b-form-text>
              <b-form-text
                text-variant="danger"
                v-if="submitted && !$v.email.required"
              >Field is required</b-form-text>
            </b-form-group>
            <!-- Email field ends here -->
            <b-form-group label="Password">
              <b-form-input
                type="password"
                required
                placeholder="Your password"
                v-model="password"
                :class="{'is-invalid': submitted && $v.password.$error}"
              ></b-form-input>
              <b-form-text
                text-variant="danger"
                v-if="submitted && !$v.password.required"
              >Field is required</b-form-text>
              <b-form-text
                text-variant="danger"
                v-if="submitted && !$v.password.minLength"
              >Password needs to be at least 8 characters long</b-form-text>
            </b-form-group>
            <b-form-group>
              <b-button block variant="success" @click="registerUser()">Register</b-button>
            </b-form-group>
          </b-form>
        </div>
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
import axios from "axios";
import store from "../store";
import { mapState, mapGetters } from "vuex";
const BASEURL = "https://vueauthapp.herokuapp.com";
import { required, minLength, email } from "vuelidate/lib/validators";
import { setInterval } from "timers";
export default {
  name: "Register",
  data() {
    return {
      dataError: "",
      submitted: false,
      username: "",
      email: "",
      password: "",
      isLoading: false
    };
  },
  validations: {
    username: {
      required,
      minLength: minLength(4)
    },
    email: {
      required,
      email
    },
    password: {
      required,
      minLength: minLength(8)
    }
  },
  computed: {
    ...mapState(["isLoggedin"])
  },
  methods: {
    registerUser() {
      this.submitted = true;
      this.$v.$touch();
      if (this.$v.$invalid) {
        return;
      }
      // submit to DB
      this.isLoading = true;
      this.submitData();
    },
    submitData() {
      const body = {
        username: this.username,
        email: this.email,
        password: this.password
      };
      axios
        .post(`${BASEURL}/api/auth`, body)
        .then(result => {
          localStorage.token = result.data.token;
          this.$router.push("/homepage");
          this.isLoggedin = true;
        })
        .catch(err => {
          if (err) {
            this.dataError = "User already exist";
            setInterval(() => {
              this.dataError = "";
            }, 4000);
          }
        });
    }
  }
};
</script>

<style scoped>
.container-height {
  height: 100vh;
}
.row-height {
  height: 100%;
}
.spinner-height {
  height: 100%;
  align-items: center;
}
.is-invalid {
  border: 1px solid red;
}
.form-width {
  width: 500px;
  background: #eceff1;
}
.form-flex {
  flex-direction: column;
  display: flex;
  align-items: center;
  justify-content: center;
}
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
