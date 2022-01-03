<template>
  <div class="filterbyStatus">
    <h3>Status</h3>
    <div class="filter">
      <div class="item" @click="filter('')">All</div>
      <div class="item" @click="filter('Alive')">Alive</div>
      <div class="item" @click="filter('Dead')">Dead</div>
      <div class="item" @click="filter('unknow')">Unknow</div>
    </div>
  </div>
</template>

<script></script>

<style>
.filter {
  width: 95%;
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  justify-content: space-around;
  border-radius: 10px;
  overflow: hidden;
}
.item {
  padding: 1rem 0.5rem;
  background-color: var(--btn-bgcolor);
  color: var(--bg-color-img-content);
  text-align: center;
  cursor: pointer;
}
.item:hover {
  background-color: var(--btn-bgcolor-hover);
}

.filterbyStatus > h3 {
  color: var(--color-h3);
  margin: 1rem;
}
</style>
