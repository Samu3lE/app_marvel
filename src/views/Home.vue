<template>
  <div class="container">
    <div class="title">
      <h1><b> Marvel </b> List</h1>
    </div>

    <FilterByName />
    <div class="section">
      <div class="filters">
        <div class="location">
          <FilterByLocation />
        </div>
        <div class="status">
          <FilterByStatus />
        </div>
      </div>

      <div class="characters">
        <div
          class="characters_item"
          v-for="character in characters.charactersFilter"
          :key="character.id"
        >
          <CharactersCard :character="character" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { computed, onMounted } from "vue";
import { useStore } from "vuex";

import CharactersCard from "../components/CharactersCard.vue";
import FilterByLocation from "../components/FilterByLocation.vue";
import FilterByName from "../components/FilterByName.vue";
import FilterByStatus from "../components/FilterByStatus.vue";

// @ is an alias to /src

export default {
  name: "Home",
  components: {
    CharactersCard,
    FilterByLocation,
    FilterByName,
    FilterByStatus,
  },
  setup() {
    const store = useStore();
    const characters = computed(() => {
      const charactersFilter = store.state.charactersFilter;
      const pages = store.state.pages;

      return { charactersFilter, pages };
    });

    onMounted(() => {
      store.dispatch("getCharacters");
    });

    return {
      characters,
    };
  },
};
</script>

<style>
.container {
  width: auto;
  margin: 1rem auto;
  height: auto;
}

h1 {
  margin-left: 1rem;
  text-align: left;
}
.title > h1 {
  font-weight: lighter;
}

.characters {
  padding: 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  align-content: center;
  gap: 3rem;
  margin: 3rem 0;
}

@media screen and (min-width: 768px) {
  .characters {
    padding: 1rem 0;
    display: grid;
    grid-template-columns: repeat(2, 40%);
    justify-content: space-around;
  }
}

@media screen and (min-width: 1024px) {
  .container {
    max-width: 90vw;
  }

  .section {
    display: grid;
    margin-left: 1rem;
    grid-template-columns: 23% 75%;
    grid-template-areas: "filters characters";
    justify-items: space-around;
  }

  .filters {
    grid-area: filters;
    max-width: 50vw;
  }

  .characters {
    grid-area: characters;
    grid-template-columns: repeat(3, 23%);
    justify-content: space-around;
  }
}
</style>
