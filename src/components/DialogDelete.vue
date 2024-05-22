<template>
    <div class="text-center pa-4">
        <v-dialog v-model="props.dialog" max-width="400" persistent>
            <v-card prepend-icon="mdi-map-marker" text="You can add more tasks later" title="Are sure?">
                <v-card-actions>
                    <v-spacer></v-spacer>

                    <v-btn color="blue-darken-1" variant="text" @click="$emit('toggleDelete')">
                        No
                    </v-btn>

                    <v-btn color="red-darken-1" variant="text" @click="$emit('deleteTask')">
                        Yes
                    </v-btn>
                </v-card-actions>
            </v-card>
        </v-dialog>
    </div>
</template>

<script setup>
import { ref, defineProps } from 'vue'

const props = defineProps({
    dialog: Boolean
})
</script>