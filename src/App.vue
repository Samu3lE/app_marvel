<template>
  <div id="nav">
    <!-- <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link> -->
  </div>
  <router-view />
</template>

<style>
:root {
  --background-body: #24282f;
  --background-card: #3c3e44;
  --bg-color-img-content: #fff;
  --bg-color-primary: #ddd;
  --btn-bgcolor-hover: #3f54a0;
  --btn-bgcolor: rgb(40, 40, 143);
  --color-h3: #aaa;
  --svg-size: 1.5rem;
  --text-gray: #c0c0c0;
  --text-white: #fff;
}

* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

body {
  font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
  background-color: var(--bg-color-primary);
}
</style>
