<template>
  <div id="app">
    <!-- Barra de navegación con enlaces a diferentes rutas -->
    <!-- <nav>
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link> |
      <router-link to="/addtask"><i class="fas fa-plus"></i> Agregar Tarea</router-link> 
      <router-link to="/lista_tareas">Listar Tarea</router-link> 
    </nav> -->
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav">
          <li class="nav-item active">
            <a class="nav-link" href="#"><router-link to="/">Home</router-link></a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#"><router-link to="/about">About</router-link></a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#"><router-link to="/addtask"><i class="fas fa-plus"></i> Agregar Tarea</router-link> </a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#"><router-link to="/lista_tareas">Listar Tarea</router-link></a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#"><router-link to="/vista_combinada">Vista Combinada</router-link></a>
          </li>
        </ul>
      </div>
    </nav>
    <!-- Aquí se cargará el componente correspondiente a la ruta seleccionada -->
    <router-view />
  </div>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}
</style>
