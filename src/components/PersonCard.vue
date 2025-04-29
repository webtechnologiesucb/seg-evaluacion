<template>
  <div class="card">
    <h2 class="name">{{ name }}</h2>
    <p><span class="label">Altura:</span> {{ height }} cm</p>
    <p><span class="label">Peso:</span> {{ mass }} kg</p>
    <p><span class="label">Género:</span> {{ gender }}</p>
    <p><span class="label">Color de piel:</span> {{ skin_color }}</p>
    <p><span class="label">Color de pelo:</span> {{ hair_color }}</p>
    <p><span class="label">Color de ojos:</span> {{ eye_color }}</p>
    <p><span class="label">Año de nacimiento:</span> {{ birth_year }}</p>
  </div>
</template>

<script>
export default {
  props: {
    name: String,
    height: String,
    mass: String,
    gender: String,
    skin_color: String,
    hair_color: String,
    eye_color: String,
    birth_year: String
  }
}
</script>

<style scoped>
.card {
  background-color: #2a2a2a; /* negro más claro */
  padding: 20px;
  border-radius: 10px;
  width: 250px;
  color: white;
  box-shadow: 0 0 10px #000000;
}

.name {
  color: #ffe81f; /* amarillo */
  font-weight: bold;
  margin-bottom: 10px;
  text-align: center;
}

.label {
  color: #ffe81f; /* amarillo */
  font-weight: normal;
}
</style>
