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
                    <v-text-field label="title"></v-text-field>
                    <v-text-field label="description"></v-text-field>
                </v-card-text>
                <v-card-actions>
                    <v-spacer></v-spacer>

                    <v-btn variant="text" @click="$emit('toggle')">
                        Disagree
                    </v-btn>

                    <v-btn @click="$emit('toggle')">
                        Agree
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