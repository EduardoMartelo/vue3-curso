import { defineStore } from 'pinia'

export const useTaskStore = defineStore('task', {
    state: () => ({
        tasks: [
            {
                title: "Estudar Vue",
                description: "Estudar com Vuetify"
            },
            {
                title: "Ler documentação",
                description: "Ler a documentação Vuetify"
            }
        ],
        titleTaskCreating: ""
    }),
    actions: {
        addTask() {
            this.tasks.push({
                title: this.titleTaskCreating,
            })
            this.titleTaskCreating = ""
        }
    }
})