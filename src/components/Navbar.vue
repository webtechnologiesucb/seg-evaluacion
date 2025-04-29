<template>
  <nav class="navbar">
    <router-link to="/">Inicio</router-link>
    <router-link to="/people">Personajes</router-link>
  </nav>
</template>

<script>
// Componente de barra de navegación superior
export default {}
</script>


<style scoped>
.navbar {
  background-color: #2c2c2c; 
  padding: 10px;
  display: flex;
  justify-content: center;
  gap: 20px;
}

.navbar a {
  color: #ffe81f; 
  text-decoration: none;
  font-weight: bold;
}

.navbar a:hover {
  text-decoration: underline;
}
</style>
