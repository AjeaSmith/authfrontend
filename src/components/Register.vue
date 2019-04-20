<template>
  <b-container class="mt-2">
    <b-row>
      <b-col>
        <div class="form-flex">
          <h3 class="mb-3">Register to Manage Todos</h3>
          <b-form class="border p-3 form-width">
            <b-alert v-if="errorMessage" variant="danger" show>{{errorMessage}}</b-alert>
            <b-form-group label="Name">
              <b-form-input type="text" required placeholder="Your name" v-model="user.username"></b-form-input>
            </b-form-group>
            <!-- Name field ends here -->
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
              <b-button block variant="success" @click="registerUser()">Register</b-button>
            </b-form-group>
          </b-form>
        </div>
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
import joi from "joi";
import axios from "axios";
const BASEURL = "https://vueauthapp.herokuapp.com";
const schema = joi.object().keys({
  username: joi
    .string()
    .min(4)
    .max(30)
    .trim()
    .required(),
  email: joi
    .string()
    .email()
    .required(),
  password: joi
    .string()
    .trim()
    .regex(/^[a-zA-Z0-9]{10,30}$/)
});
export default {
  name: "Register",
  data() {
    return {
      errorMessage: "",
      user: {
        username: "",
        email: "",
        password: ""
      }
    };
  },
  methods: {
    registerUser() {
      this.errorMessage = "";
      if (this.validate()) {
        // send data to server
        const body = {
          username: this.user.username,
          email: this.user.email,
          password: this.user.password
        };
        axios
          .post(`${BASEURL}/api/auth/`, body)
          .then(resp => {
            if (resp.data) {
              console.log(resp.data);
              localStorage.token = resp.data.token;
              this.$router.push("/homepage");
            }
          })
          .catch(err => {
            this.errorMessage = "User already exists";
          });
      }
    },
    validate() {
      const result = joi.validate(this.user, schema);
      if (result.error === null) {
        return true;
      }
      if (result.error.message.includes("name")) {
        this.errorMessage =
          "Name must be longer than 4 characters & Cannot be empty";
      }
      if (result.error.message.includes("password")) {
        this.errorMessage =
          "Password cannot be empty, must be 6-8 characters long";
      }
      if (result.error.message.includes("email")) {
        this.errorMessage = "Email cannot be empty & Must be a valid email";
      }
      return false;
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

<style scoped>
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
