<template>
    <!-- Esta seccion es una combinación de las dos vistas anteriores -->
    <div class="add-task-container">
        <h1>Lista de Tareas Combinada: Añadir Tarea</h1>
        <div class="input-group">
            <input v-model="newTask" @keyup.enter="addTask" placeholder="Añadir nueva tarea" class="task-input" />
            <button @click="addTask" class="add-button btn btn-primary">Añadir</button>
            <div v-if="tasks.length > 0">
                <div class="row justify-content-center">
                    <div v-for="task in tasks" :key="task.id" class="task-item">
                        <div class="col-sm-12 border rounded p-25">
                            <h5 :style="{ textDecoration: task.completed ? 'line-through' : 'none' }">{{ task.todo }}
                            </h5>
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
    </div>

</template>

<!-- <script> -->
// Esta sección debe permitir agregar tareas nuevas a la vez que extraer las tareas anteriores de la API
<!-- </script> -->
<script>
import axios from "axios";
export default {
    name: "AddTask",
    data() {
        return {
            newTask: "", // Campo de entrada para la nueva tarea
            tasks: [],   // Lista de tareas locales
        };
    },
    methods: {
        addTask() {
            if (this.newTask.trim() === "") return;

            const newTask = {
                todo: this.newTask,
                completed: false,
                id: Date.now(),
            };

            // Añadir la nueva tarea al inicio de la lista
            this.tasks.unshift(newTask);
            this.newTask = ""; // Limpiar el campo de entrada después de agregar
        },

        // Elimina una tarea específica de la lista
        deleteTask(task) {
            this.tasks = this.tasks.filter((t) => t.id !== task.id);
        },

        // Cambia el estado de la tarea entre completada y no completada
        toggleTaskCompletion(task) {
            task.completed = !task.completed;
        },
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
    },
    mounted() {
        this.fetchTasks();
    }
};
</script>

<style scoped>
.add-task-container {
    padding: 20px;
    max-width: 400px;
    margin: 0 auto;
}

.input-group {
    display: flex;
    margin-bottom: 10px;
}

.task-input {
    flex-grow: 1;
    padding: 8px;
    margin-right: 5px;
    border: 1px solid #ccc;
    border-radius: 4px;
}

.add-button {
    padding: 8px 12px;
    border: none;
    border-radius: 4px;
    background-color: #007bff;
    color: white;
    cursor: pointer;
}

.task-list {
    margin-top: 20px;
}

.task-item {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 10px;
    border-bottom: 1px solid #eee;
}

.completed {
    text-decoration: line-through;
    color: gray;
}
</style>