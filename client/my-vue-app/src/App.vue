<template>
  <div id="app" class="bg size: bg-cover   ,font color:blue
  " :style = "{ backgroundImage: 'https://img.freepik.com/premium-photo/white-robot-is-running-treadmill_388357-24.jpg?w=740' }">
    <Navbar />
    <Description />
    <SignupForm />
    <router-view/>
  </div>
</template>

<script>
import Navbar from './components/Navbar.vue'
import Description from './components/Description.vue'
import SignupForm from './components/Signup.Form.vue'
import About from  './views/About.vue'
import Home from  './views/Home.vue'
import Contact from './views/Contact.vue'


export default {
  name: 'App',
  components: {
    Navbar,
    Description,
    SignupForm,
    About,
    Home,
    Contact
  }
}
</script>

<style>
body {
  margin: 0;
  font-family: Arial, Helvetica, sans-serif,  ;
   background-image:url('https://img.freepik.com/premium-photo/white-robot-is-running-treadmill_388357-24.jpg?w=740');
 background-repeat: repeat;
    min-width: weight 80px;
    min-height:80px;

    
    .navbar {
  background-color: #333;
  padding: 10px;
}

.nav-links {
  display: grid;
  grid-template-columns: repeat(3, 1fr); /* 3 columnas de igual ancho */
  gap: 10px; /* Espacio entre los enlaces */
  list-style-type: none;
  margin: 0;
  padding: 0;
}

.nav-links li {
  display: flex;
  justify-content: center; /* Centrar el texto horizontalmente */
  align-items: center; /* Centrar el texto verticalmente */
}

.nav-links a {
  color: white;
  text-decoration: none;
  padding: 10px;
  display: block; /* Asegura que el área del enlace sea clickeable */
}

.nav-links a:hover {
  background-color: #555; /* Color de fondo al pasar el ratón */
}
}
</style>
