<template>
<div>
  <nav class="navbar navbar-default navbar-static-top">
    <div class="container">
      <div class="navbar-header">

        <!-- Collapsed Hamburger -->
        <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#app-navbar-collapse" aria-expanded="false">
          <span class="sr-only">Toggle Navigation</span>
          <span class="icon-bar"></span>
          <span class="icon-bar"></span>
          <span class="icon-bar"></span>
        </button>

        <!-- Branding Image -->
        <a class="navbar-brand" href="#">
          Laravel
        </a>
      </div>

      <div class="collapse navbar-collapse" id="app-navbar-collapse">
        <!-- Left Side Of Navbar -->
        <ul class="nav navbar-nav">
          &nbsp;
        </ul>

        <!-- Right Side Of Navbar -->
        <ul v-if="isLogin" class="nav navbar-nav navbar-right">
          <!-- Authentication Links -->
            <li class="dropdown">
              <a href="#" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-expanded="false" aria-haspopup="true">
                <span>{{ userName }}</span>
                <span class="caret"></span>
              </a>

              <ul class="dropdown-menu">
                <li><a href="/logout">Logout</a></li>
              </ul>
            </li>
        </ul>
        <!-- <ul v-else class="nav navbar-nav navbar-right">
            <li><a href="/login">Login</a></li>
            <li><a href="/register">Register</a></li>
        </ul> -->
      </div>
    </div>
  </nav>
</div>
</template>


<script>
export default {
  data() {
    return {
      isLogin: false,
      userName: ""
    };
  },
  created() {
    this.isLogin = false;
    this.userName = "";
    this.checkLogin();
    console.log("is-login ? " + this.isLogin);
    console.log("userName ? " + this.userName);
  },
  methods: {
    checkLogin: function() {
      axios
        .get("/api/user")
        .then(response => {
          console.log(response.data);
          this.isLogin = true;
          this.userName = response.data.name;
          console.log(this.userName);
        })
        .catch(e => {
          location.href = "/home";
          // this.isLogin = false;
        });
    }
    // logout: function() {
    //   // alert("lo");
    //   axios
    //     .get("/api/logout")
    //     .then(response => {
    //       console.log(response.data);
    //     })
    //     .catch(e => {
    //       console.log(e.data);
    //     });
    // }
  }
};
</script>
