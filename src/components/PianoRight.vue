<script setup lang="ts">
defineProps<{
    space: number
}>();
defineEmits<{
    (e: 'play', pitch: string, space: number): void
}>();
</script>

<template>
    <div class="piano-right">
        <a-row class="upper">
            <a-col flex="3">
                <div class="upper-key white-key"></div>
            </a-col>
            <a-col flex="2">
                <div class="upper-key black-key" @click="$emit('play', 'F#', space)">F#</div>
            </a-col>
            <a-col flex="2">
                <div class="upper-key white-key"></div>
            </a-col>
            <a-col flex="2">
                <div class="upper-key black-key" @click="$emit('play', 'G#', space)">G#</div>
            </a-col>
            <a-col flex="2">
                <div class="upper-key white-key"></div>
            </a-col>
            <a-col flex="2">
                <div class="upper-key black-key" @click="$emit('play', 'A#', space)">A#</div>
            </a-col>
            <a-col flex="3">
                <div class="upper-key white-key"></div>
            </a-col>
        </a-row>
        <a-row>
            <a-col flex="4">
                <div class="lower-key white-key" @click="$emit('play', 'F', space)">F</div>
            </a-col>
            <a-col flex="1px"><div class="piano-key-gutter"/></a-col>
            <a-col flex="4">
                <div class="lower-key white-key" @click="$emit('play', 'G', space)">G</div>
            </a-col>
            <a-col flex="1px"><div class="piano-key-gutter"/></a-col>
            <a-col flex="4">
                <div class="lower-key white-key" @click="$emit('play', 'A', space)">A{{space}}</div>
            </a-col>
            <a-col flex="1px"><div class="piano-key-gutter"/></a-col>
            <a-col flex="4">
                <div class="lower-key white-key" @click="$emit('play', 'B', space)">B</div>
            </a-col>
        </a-row>
    </div>
</template>

<style scoped>
</style>