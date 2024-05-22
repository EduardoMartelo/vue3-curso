<template>
    <div class="text-center pa-4">
        <v-dialog v-model="props.dialog" persistent max-width="400">
            <!-- <template v-slot:activator="{ props: activatorProps }">
                <v-btn v-bind="activatorProps">
                    Open Dialog
                </v-btn>
            </template> -->

            <v-card>
                <v-card-title>
                    Edit Task
                </v-card-title>
                <v-card-text>
                    <v-text-field v-model="props.task.title" label="Title"></v-text-field>
                    <v-text-field v-model="props.task.description" label="Description"></v-text-field>
                </v-card-text>
                <v-card-actions>
                    <v-spacer></v-spacer>

                    <v-btn color="blue-darken-1" variant="text" @click="$emit('toggle')">
                        Ok
                    </v-btn>
                </v-card-actions>
            </v-card>
        </v-dialog>
    </div>
</template>

<script setup>
import { ref, defineProps } from 'vue'

const props = defineProps({
    dialog: Boolean,
    task: Object
})

</script>