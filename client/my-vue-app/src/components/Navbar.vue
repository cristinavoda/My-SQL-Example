
<template>
  <nav class="bg-green-300 p-4">
    <ul class="nav-links">
      <li><router-link to="/">Home</router-link></li>
      <li><router-link to="/about">About</router-link></li>
      <li><router-link to="/contact">Contact</router-link></li>
    </ul>
  </nav>
</template>

<script>
export default {
  name: 'Navbar'
}
</script>

<style scoped>
.navbar {
  background-color: #333;
  padding: 10px;
}

.nav-links {
  display: grid;
  grid-template-columns: repeat(3, 1fr); 
  gap: 10px; 
  list-style-type: none;
  margin: 0;
  padding: 0;
}

.nav-links li {
  display: flex;
  justify-content: center; 
  align-items: center; 
}

.nav-links a {
  color: white;
  text-decoration: none;
  padding: 10px;
  display: block; 
}

.nav-links a:hover {
  background-color: #555; 
}

</style>
