import { defineStore } from 'pinia'

export const useTodoStore = defineStore({
  id: 'todo',
  state: () => ({
    todos: [],
    todo: null,
    loading: false,
    error: null
  }),
  getters: {
    getTodos : (state) => state.todos
  }, 
  actions: {
    // Fetch all todos
    async fetchTodos() {
      this.todos = []
      this.loading = true
      try {
        this.todos = await fetch('http://localhost:8000/api/todos/')
        .then((response) => response.json()) 
      } catch (error) {
        this.error = error
      } finally {
        this.loading = false
      }
    },
    // Fetch one todo by id
    async fetchTodo(id) {
      this.todo = null
      this.loading = true
      try {
        this.todo = await fetch(`http://localhost:8000/api/todos/${id}`)
        .then((response) => response.json())
      } catch (error) {
        this.error = error
      }
      finally {
        this.loading = false
      }
    },
    // Post a todo
    async postTodo(title, content) {
      this.loading = true
      const requestOptions = {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
              title: title.value,
              content: content.value
              })
        };
        try {
          fetch("http://localhost:8000/api/todos/", requestOptions)
          .then(response => response.json())
        } catch (error) {
          this.error = error
        } finally {
          this.loading = false
        }
    }
  }
})
