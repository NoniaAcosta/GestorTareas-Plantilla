<template>
    <div class="add-task-container">
        <h1>Lista de Tareas</h1>
        <button @click="fetchTasks" class="btn btn-primary">Cargar Tareas</button>
        <div v-if="tasks.length > 0">
            <div v-for="task in tasks" :key="task.id">
                <div class="row justify-content-center">
                    <div class="col-sm-6 border rounded p-25">
                        <h5 :style="{ textDecoration: task.completed ? 'line-through' : 'none' }">{{ task.todo }}</h5>
                        <span class="badge" :class="task.completed ? 'bg-primary' : 'bg-secondary'">
                            {{ task.completed ? 'Completada' : 'Pendiente' }}
                        </span>
                        <div class="d-flex justify-content-center mt-3">
                            <button @click="toggleTaskCompletion(task)"
                                :class="task.completed ? 'btn btn-dark' : 'btn btn-success'">
                                <span v-html="task.completed ? 'Desmarcar' : 'Completar'"></span>
                            </button>
                            <button class="btn btn-danger" @click="deleteTask(task)">Eliminar</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import axios from "axios";
export default {
    name: "TaskList",
    data() {
        return {
            tasks: [], // Almacenamiento local de las tareas traídas de la API
        };
    },
    methods: {
        // Llamada para obtener las tareas desde la API externa
        fetchTasks() {
            // Aquí deberían realizar la solicitud a la API usando axios o fetch.
            // La URL que usaremos es: https://dummyjson.com/todos

            // Sugerencia: Intentar implementarlo con axios o fetch

            axios.get("https://dummyjson.com/todos")
                .then(response => {
                    // Asigna la lista de tareas al estado
                    this.tasks = response.data.todos;
                })
                .catch(error => {
                    console.error("Error al obtener las tareas:", error);
                });
        },
        // Cambiar el estado de una tarea (completada/no completada)
        toggleTaskCompletion(task) {
            task.completed = !task.completed;
        },

        // Eliminar la tarea seleccionada
        deleteTask(task) {
            this.tasks = this.tasks.filter((t) => t.id !== task.id);
        },
    },



};
</script>

<style scoped>
/* Aquí pueden experimentar con estilos de tu preferencia */
</style>