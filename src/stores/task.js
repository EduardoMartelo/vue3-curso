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
        titleTaskCreating: "",
        showDialogDelete: false,
        indexTaskSelected: 0
    }),
    actions: {
        addTask() {
            this.tasks.push({
                title: this.titleTaskCreating,
            })
            this.titleTaskCreating = ""
        },
        toggleDelete(index) {
            this.showDialogDelete = !this.showDialogDelete;
            if (index != null)
                this.indexTaskSelected = index;
        },
        deleteTask() {
            this.tasks.splice(this.indexTaskSelected, 1)
            this.toggleDelete();
        }
    }
})