<template>
  <b-container class="mt-2">
    <b-row>
      <b-col>
        <div class="form-flex">
          <h3 class="mb-3">Login</h3>
          <b-form class="border p-3 form-width">
            <b-alert v-if="errorMessage" variant="danger" show>{{errorMessage}}</b-alert>
            <b-form-group label="Email">
              <b-form-input type="email" required placeholder="Your email" v-model="user.email"></b-form-input>
              <b-form-text>ex: example.gmail.com</b-form-text>
            </b-form-group>
            <!-- Email field ends here -->
            <b-form-group label="Password">
              <b-form-input
                type="password"
                required
                placeholder="Your password"
                v-model="user.password"
              ></b-form-input>
            </b-form-group>
            <b-form-group>
              <b-button block variant="success" @click="login()">Login</b-button>
            </b-form-group>
          </b-form>
        </div>
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
import Joi from "joi";
import axios from "axios";
const BASEURL = "https://vueauthapp.herokuapp.com";
const schema = Joi.object().keys({
  email: Joi.string()
    .email()
    .required(),
  password: Joi.string()
    .trim()
    .regex(/^[a-zA-Z0-9]{10,30}$/)
});
export default {
  name: "Login",
  data() {
    return {
      errorMessage: "",
      user: {
        email: "",
        password: ""
      }
    };
  },
  methods: {
    login() {
      this.errorMessage = "";
      if (this.validUser()) {
        // send data to server
        const body = {
          email: this.user.email,
          password: this.user.password
        };
        axios
          .post(`${BASEURL}/api/auth/login`, body)
          .then(result => {
            if (result.data) {
              // store the token in localstorage
              localStorage.token = result.data.token;
              this.$router.push("/homepage");
            }
          })
          .catch(err => {
            this.errorMessage = "Unable to login";
          });
      }
    },
    validUser() {
      const result = Joi.validate(this.user, schema);
      if (result.error === null) {
        return true;
      }
      if (result.error.message.includes("email")) {
        this.errorMessage = "Must be a valid email";
      } else if (result.error.message.includes("password")) {
        this.errorMessage =
          "Password cannot be empty, must be 6-8 characters long";
      }
    }
  },
  watch: {
    user: {
      handler() {
        this.errorMessage = "";
      },
      deep: true
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.is-invalid {
  border: 1px solid red;
}
.form-width {
  width: 50%;
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
