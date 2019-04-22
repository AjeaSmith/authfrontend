<template>
  <b-container class="mt-3">
    <section>
      <h2 v-for="name in user" :key="name._id">Welcome, {{user.user.username}}</h2>
      <b-form class="mt-5 mb-4" @submit.prevent="addNote()">
        <b-form-group label="Add Note:" label-for="note">
          <b-form-input
            id="note"
            v-model="note.title"
            type="text"
            required
            placeholder="Enter Note"
          ></b-form-input>
        </b-form-group>
        <b-form-group label="Add description" label-for="desc">
          <b-form-textarea
            id="desc"
            v-model="note.desc"
            placeholder="Enter Note..."
            rows="3"
            max-rows="6"
          ></b-form-textarea>
        </b-form-group>
        <b-form-group>
          <b-button block type="submit" variant="success">Add Note</b-button>
        </b-form-group>
      </b-form>
      <b-card-group>
        <b-row>
          <b-col
            sm="6"
            md="6"
            lg="4"
            xl="3"
            v-for="note in notes"
            :key="note._id"
            class="d-flex flex-row mb-3 flex-md-wrap justify-content width"
          >
            <b-card
              class="width"
              border-variant="primary"
              :header="note.title"
              header-bg-variant="primary"
              header-text-variant="white"
              align="center"
            >
              <b-card-text>{{note.description}}</b-card-text>
            </b-card>
          </b-col>
        </b-row>
      </b-card-group>
    </section>
  </b-container>
</template>
<script>
import axios from "axios";
import { mapState, mapGetters } from "vuex";
const BASEURL = "https://vueauthapp.herokuapp.com";
export default {
  name: "Home",
  data() {
    return {
      user: null,
      note: {
        title: "",
        desc: "",
        id: null
      },
      notes: []
    };
  },
  created() {
    // grab the user thats signed and stores info in user
    axios
      .get(`${BASEURL}/api/auth`, {
        headers: {
          authorization: `Bearer ${localStorage.token}`
        }
      })
      .then(result => {
        if (result.data) {
          this.user = result.data;
          this.note.id = result.data.user._id;
        } else {
          // if token so happen to expire, remove token and redirect to login
          localStorage.removeItem("token");
          this.$router.push("/login");
        }
      })
      .catch(err => {
        console.log("user error:", err);
      });
    this.getNotes();
  },
  methods: {
    addNote() {
      const newNote = {
        userID: this.note.id,
        title: this.note.title,
        description: this.note.desc
      };
      axios
        .post(`${BASEURL}/api/v1/notes`, newNote, {
          headers: {
            authorization: `Bearer ${localStorage.token}`
          }
        })
        .then(response => {
          console.log(response.data);
          this.notes.push(response.data);
          this.newNote = {
            title: "",
            desc: ""
          };
        })
        .catch(err => {
          console.log("err created:", err);
        });
      // this.getNotes();
    },
    getNotes() {
      axios
        .get(`${BASEURL}/api/v1/notes`, {
          headers: {
            authorization: `Bearer ${localStorage.token}`
          }
        })
        .then(response => {
          this.notes = response.data;
        });
    }
  }
};
</script>

<style>
.width {
  width: 400px;
}
</style>
