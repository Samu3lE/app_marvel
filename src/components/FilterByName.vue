<template>
  <div class="filterbyname">
    <article class="filter-image">
      <aside class="filter-image-opacity">
        <div class="filter-image-content">
          <svg
            aria-hidden="true"
            focusable="false"
            data-prefix="fas"
            data-icon="magnifying-glass"
            class="svg-inline--fa fa-magnifying-glass"
            role="img"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 512 512"
          >
            <path
              fill="currentColor"
              d="M500.3 443.7l-119.7-119.7c27.22-40.41 40.65-90.9 33.46-144.7C401.8 87.79 326.8 13.32 235.2 1.723C99.01-15.51-15.51 99.01 1.724 235.2c11.6 91.64 86.08 166.7 177.6 178.9c53.8 7.189 104.3-6.236 144.7-33.46l119.7 119.7c15.62 15.62 40.95 15.62 56.57 0C515.9 484.7 515.9 459.3 500.3 443.7zM79.1 208c0-70.58 57.42-128 128-128s128 57.42 128 128c0 70.58-57.42 128-128 128S79.1 278.6 79.1 208z"
            ></path>
          </svg>
          <input
            type="text"
            name="name"
            placeholder="Search by name of Avenger"
          />
          <input type="submit" value="Search" class="btn" />
        </div>
      </aside>
    </article>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.filterbyname {
  margin: 3rem 1rem 1rem 1rem;
}

.filter-image {
  background-image: url("../assets/marvel-comics-avengers-1920x1080-71983.jpg");
  background-size: cover;
  border-radius: 1rem;
}

.filter-image-opacity {
  width: 100%;
  min-height: 10vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.filter-image-content {
  margin: 1rem;
  padding: 0 1rem;
  border-radius: 0.5rem;
  background-color: var(--bg-color-img-content);
  display: grid;
  height: 5vh;
  width: 95%;
  justify-content: space-between;
  align-items: center;
  text-align: center;
  max-width: 948px;
  grid-template-columns: 50px 1fr 140px;
}

.filter-image-content svg {
  width: var(--svg-size);
  height: var(--svg-size);
  color: var(--bg-color-primary);
}

.btn {
  margin-left: 4px;
  width: 100%;
  height: 80%;
  cursor: pointer;
  color: var(--bg-color-img-content);
  background-color: var(--btn-bgcolor);
  border-radius: 0.5rem;
}

.filter-image-content input {
  border: none;
  height: 70%;
}

.btn:hover {
  background-color: var(--btn-bgcolor-hover);
}

@media screen and (min-width: 1024px) {
  .filter-image-content {
    grid-template-columns: 50px 1fr 140px;
  }
}
</style>
