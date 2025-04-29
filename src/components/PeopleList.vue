<template>
  <div class="people-list">
    <h1>Lista de Personajes</h1>

    <div v-if="loading" class="loading">Cargando personajes...</div>
    <div v-else-if="error" class="error">{{ error }}</div>

    <div v-else>
      <div class="cards-container">
        <PersonCard
          v-for="person in people"
          :key="person.uid"
          :name="person.properties.name"
          :height="person.properties.height"
          :mass="person.properties.mass"
          :gender="person.properties.gender"
          :skin_color="person.properties.skin_color"
          :hair_color="person.properties.hair_color"
          :eye_color="person.properties.eye_color"
          :birth_year="person.properties.birth_year"
        />
      </div>

      <div class="pagination">
        <button @click="changePage('previous')" :disabled="!previous">Anterior</button>
        <span>Página {{ currentPage }}</span>
        <button @click="changePage('next')" :disabled="!next">Siguiente</button>
      </div>
    </div>
  </div>
</template>

<script>
// Importamos el componente de tarjeta de personaje
import PersonCard from './PersonCard.vue'

export default {
  components: { PersonCard },
  data() {
    return {
      // Estado de los datos
      people: [],
      loading: true,
      error: null,
      next: null,
      previous: null,
      currentPage: 1
    }
  },
  methods: {
    // Función para traer los personajes de la API
    async fetchPeople(page = 1) {
      this.loading = true;
      try {
        const res = await fetch(`https://www.swapi.tech/api/people?page=${page}&limit=10`);
        const data = await res.json();
        this.next = data.next;
        this.previous = data.previous;
        this.currentPage = page;

        // Fetch de detalles individuales
        const detailedPeople = await Promise.all(
          data.results.map(async (person) => {
            const resDetail = await fetch(`https://www.swapi.tech/api/people/${person.uid}`);
            const detail = await resDetail.json();
            return detail.result;
          })
        );

        this.people = detailedPeople;
      } catch (err) {
        this.error = 'Error cargando personajes.';
        console.error(err);
      } finally {
        this.loading = false;
      }
    },
    // Cambiar de página
    changePage(direction) {
      if (direction === 'next' && this.next) {
        this.fetchPeople(this.currentPage + 1);
      } else if (direction === 'previous' && this.previous) {
        this.fetchPeople(this.currentPage - 1);
      }
    }
  },
  created() {
    this.fetchPeople();
  }
}
</script>


<style scoped>
.cards-container {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 20px;
  margin: 20px 0;
}
.pagination {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 20px;
  margin-top: 30px;
}
.loading, .error {
  text-align: center;
  font-size: 1.5rem;
  margin-top: 20px;
}
</style>
