import { defineStore } from 'pinia'

export const useNameStore = defineStore({
  id: 'name',
  state: () => ({
    names: [],
    loading: false,
    error: null
  }),
  getters: {
    getNames : (state) => state.names
  }, 
  actions: {
    // Fetch all names
    async fetchNames() {
      this.names = []
      this.loading = true
      try {
        this.names = await fetch('http://localhost:8000/api/names/')
        .then((response) => response.json()) 
      } catch (error) {
        this.error = error
      } finally {
        this.loading = false
      }
    },
    // Post a name
    async postName(name) {
      this.loading = true
      const requestOptions = {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
              name: name.value,
              })
        };
        try {
          fetch("http://localhost:8000/api/names/", requestOptions)
          .then(response => response.json())
        } catch (error) {
          this.error = error
        } finally {
          this.loading = false
        }
    }
  }
})
