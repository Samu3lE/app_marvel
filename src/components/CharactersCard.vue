<template>
  <div class="characters-card">
    <img
      :src="character.thumbnail.path + `.` + character.thumbnail.extension"
      :alt="character.name"
    />

    <div class="character_info">
      <h3>
        {{ character.name }}
      </h3>
      <div class="origin">
        <span>Origin: origen</span>
      </div>
      <div>
        <span> Location: localizacion </span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["character"],
};
</script>

<style>
.characters-card {
  background-color: var(--background-card);
  border-radius: 20px;
  overflow: hidden;
  cursor: pointer;
  transition: transform 200ms ease-in-out;

  height: 100%;
  box-shadow: 0.25rem 0.25rem 1rem var(--background-body);
}

.characters-card > img {
  width: 100%;
  height: auto;
  max-height: 30vh;
  background-size: cover;
}

.characters-card:hover {
  transform: scale(1.05);
}
.characters-card:hover h3 {
  color: var(--text-white);
}

.character_info {
  padding: 1.5rem;
}

.character_info span {
  color: var(--text-gray);
}
.origin {
  margin-bottom: 0.5rem;
}
</style>
