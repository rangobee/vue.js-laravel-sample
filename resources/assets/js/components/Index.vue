<template>
  <div>
    <div class="container">
        <h1>{{ title }}</h1>
        <p>{{ message }}</p>
        <!--
          vue-routerを使用してname:'test' (path:'/test')へルーティングする。
          vue-routerの機能でページ遷移なしで動的にコンポーネントが切り替わる。
        -->
        <p>
          <router-link :to="{ name: 'test', }">Open Test Page</router-link>
        </p>
        <button @click="editButton" class="btn btn-primary">Edit title</button>
      </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      title: "Laravel + Vue.js",
      message: ""
    };
  },
  methods: {
    editButton: function() {
      this.title = "Welcome to Vue.js!";
      this.message = "This is a sample application.";
      axios
        .get("/api/user")
        .then(response => {
          alert("Welcome, " + response.data.name + "!!");
          console.log(response.data);
        })
        .catch(e => {
          alert("Sorry, you don't seem to be logged in.\nPlease login again.");
          location.href = "/login";
          console.log(e);
        });
    }
  }
};
</script>