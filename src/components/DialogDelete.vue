<template>
    <div class="text-center pa-4">
        <v-dialog v-model="props.dialog" max-width="400" persistent>
            <v-card prepend-icon="mdi-map-marker"
                text="Let Google help apps determine location. This means sending anonymous location data to Google, even when no apps are running."
                title="Use Google's location service?">
                <v-card-actions>
                    <v-spacer></v-spacer>

                    <v-btn variant="text" @click="$emit('toggleDelete')">
                        No
                    </v-btn>

                    <v-btn variant="text" @click="$emit('deleteTask')">
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