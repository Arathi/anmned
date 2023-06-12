<script setup lang="ts">
import {computed} from 'vue';
import PianoLeft from "./PianoLeft.vue";
import PianoRight from "./PianoRight.vue";

const audioContext = new AudioContext();

const props = defineProps<{
    height: number,
    blackKeyScale: number,
    startModule: number,
    moduleAmount: number
}>();

const keyHeight = computed(() => {
    return props.height + 'px';
});

const upperKeyHeight = computed(() => {
    return props.height * props.blackKeyScale + 'px';
});

const lowerKeyHeight = computed(() => {
    return props.height * (1-props.blackKeyScale) + 'px';
});

function getFreq(pitchName: string, space: number) : number {
    let levelInSpace = 0;
    switch (pitchName) {
        case "C":
            levelInSpace = 0;
            break;
        case "C#":
        case "Db":
            levelInSpace = 1;
            break;
        case "D":
            levelInSpace = 2;
            break;
        case "D#":
        case "Eb":
            levelInSpace = 3;
            break;
        case "E":
            levelInSpace = 4;
            break;
        case "F":
            levelInSpace = 5;
            break;
        case "F#":
        case "Gb":
            levelInSpace = 6;
            break;
        case "G":
            levelInSpace = 7;
            break;
        case "G#":
        case "Ab":
            levelInSpace = 8;
            break;
        case "A":
            levelInSpace = 9;
            break;
        case "A#":
        case "Bb":
            levelInSpace = 10;
            break;
        case "B":
            levelInSpace = 11;
            break;
    }
    let p = (space+1) * 12 + levelInSpace;
    let freq = 440 * Math.pow(2, (p-69)/12);
    console.info(`${pitchName}${space} = F(${p}) = ${freq}Hz`);
    return freq;
}

function play(pitch: string, space: number) {
    console.info(`播放：${pitch}${space}`);

    let delay = 250;
    let freq = getFreq(pitch, space);

    const oscillator = audioContext.createOscillator();
    oscillator.frequency.value = freq;
    oscillator.connect(audioContext.destination);
    oscillator.start();
    setTimeout(() => {
        oscillator.stop();
    }, delay);
}
</script>

<template>
    <div class="piano">
        <a-row>
            <template v-for="index in moduleAmount">
                <a-col flex="3" v-if="(startModule + index - 1) % 2 == 0">
                    <piano-left :space="Math.floor((startModule + index - 1) / 2)" @play="play" />
                </a-col>
                <a-col flex="4" v-if="(startModule + index - 1) % 2 == 1">
                    <piano-right :space="Math.floor((startModule + index - 1) / 2)" @play="play" />
                </a-col>
                <a-col flex="1px" v-if="index < moduleAmount">
                    <div class="piano-module-gutter"/>
                </a-col>
            </template>
        </a-row>
    </div>
</template>

<style>
.piano {
    border: gray 1px solid;
}

.upper-key {
    height: v-bind(upperKeyHeight);
}

.lower-key {
    height: v-bind(lowerKeyHeight);
}

.piano-key-gutter {
    width: 1px;
    height: v-bind(lowerKeyHeight);
    background: gray;
}

.piano-module-gutter {
    width: 1px;
    height: v-bind(keyHeight);
    background: gray;
}

.black-key {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: flex-end;

    background: black;
    color: white;
}

.white-key {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: flex-end;

    background: white;
    color: black;
}
</style>