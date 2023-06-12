<script setup lang="ts">
defineProps<{
    space: number
}>();
defineEmits<{
    (e: 'play', pitch: string, space: number): void
}>();
</script>

<template>
    <div class="piano-left">
        <a-row class="piano-upper" justify="center" align="center">
            <a-col flex="3">
                <div class="upper-key white-key"></div>
            </a-col>
            <a-col flex="2">
                <div class="upper-key black-key" @click="$emit('play', 'C#', space)">C#</div>
            </a-col>
            <a-col flex="2">
                <div class="upper-key white-key"></div>
            </a-col>
            <a-col flex="2">
                <div class="upper-key black-key" @click="$emit('play', 'D#', space)">D#</div>
            </a-col>
            <a-col flex="3">
                <div class="upper-key white-key"></div>
            </a-col>
        </a-row>
        <a-row :gutter="1" class="piano-lower" justify="center" align="center">
            <a-col flex="4">
                <div class="lower-key white-key" @click="$emit('play', 'C', space)">C{{space}}</div>
            </a-col>
            <a-col flex="1px"><div class="piano-key-gutter"/></a-col>
            <a-col flex="4">
                <div class="lower-key white-key" @click="$emit('play', 'D', space)">D</div>
            </a-col>
            <a-col flex="1px"><div class="piano-key-gutter"/></a-col>
            <a-col flex="4">
                <div class="lower-key white-key" @click="$emit('play', 'E', space)">E</div>
            </a-col>
        </a-row>
    </div>
</template>

<style scoped>

</style>