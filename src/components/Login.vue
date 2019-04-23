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
        <!-- spinner ends here -->
        <div class="form-flex">
          <h3 class="mb-3">Login</h3>
          <b-form class="border p-3 form-width">
            <b-alert v-if="errorMessage" variant="danger" show>{{errorMessage}}</b-alert>
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
              <b-button block variant="success" @click="login()">Login</b-button>
            </b-form-group>
          </b-form>
        </div>
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
import { required, minLength, email } from "vuelidate/lib/validators";
import axios from "axios";
const BASEURL = "https://vueauthapp.herokuapp.com";
export default {
  name: "Login",
  data() {
    return {
      isLoading: false,
      errorMessage: "",
      email: "",
      password: "",
      submitted: false
    };
  },
  validations: {
    email: {
      required,
      email
    },
    password: {
      required,
      minLength: minLength(8)
    }
  },
  methods: {
    login() {
      this.submitted = true;
      this.$v.$touch();
      if (this.$v.$invalid) {
        return;
      } else {
        // submit to DB
        this.submitData();
      }
    },
    submitData() {
      const body = {
        email: this.email,
        password: this.password
      };
      this.isLoading = true;
      axios
        .post(`${BASEURL}/api/auth/login`, body)
        .then(result => {
          if (result.data) {
            this.isLoading = false;
            localStorage.token = result.data.token;
            this.$router.push("/homepage");
          }
        })
        .catch(err => {
          if (err) {
            this.isLoading = false;
            this.errorMessage = "Unable to login";
            setInterval(() => {
              this.errorMessage = "";
            }, 5000);
          }
        });
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
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
