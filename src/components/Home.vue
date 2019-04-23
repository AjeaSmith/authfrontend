<template>
  <b-container class="mt-3">
    <section>
      <h2 v-for="name in users" :key="name._id">Welcome, {{name.username}}</h2>
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
      <p v-if="notes == 0">You have no notes, add some :)</p>
      <b-card-group v-else>
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
              <b-button block variant="danger" size="sm" @click="deletenote(note._id)">Delete Note</b-button>
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
      users: [],
      note: {
        title: "",
        desc: "",
        id: null
      },
      notes: [],
      boxTwo: ""
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
          this.users.push(result.data);
          this.note.id = result.data._id;
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
          this.note.title = "";
          this.note.desc = "";
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
    },
    deletenote(id) {
      if (confirm("Are you sure you want to delete this note")) {
        if (true) {
          axios
            .delete(`${BASEURL}/api/v1/notes/${id}`, {
              headers: { authorization: `Bearer ${localStorage.token}` }
            })
            .then(() => {
              this.getNotes();
            })
            .catch(err => {
              if (err) {
                console.log("not deleted", err);
              }
            });
        }
      }
    }
  }
};
</script>

<style>
.width {
  width: 430px;
}
</style>
