<script setup lang="ts">
import {ref} from 'vue';

const space = ref(4);
const delay = ref(500);

const audioContext = new AudioContext();

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

function play(pitchName: string, round: boolean = true) {
    console.info("播放", pitchName + space.value);
    let freq = getFreq(pitchName, space.value);
    if (round) {
        freq = Math.round(freq);
    }
    console.info("频率：", freq);

    const oscillator = audioContext.createOscillator();
    oscillator.frequency.value = freq;
    oscillator.connect(audioContext.destination);
    oscillator.start();
    setTimeout(() => {
        oscillator.stop();
    }, delay.value);
}
</script>

<template>
    <div class="pitch-play-tester">
        <a-row class="tester-row" :gutter="10" justify="start" align="center">
            <a-col flex="64px">
                Space：
            </a-col>
            <a-col flex="1">
                <a-slider v-model="space" :max="9" show-input show-ticks></a-slider>
            </a-col>
            <a-col flex="64px">
                Delay：
            </a-col>
            <a-col flex="1">
                <a-slider v-model="delay" :max="2000" show-input show-ticks :step="125"></a-slider>
            </a-col>
        </a-row>
        <a-row class="tester-row" :gutter="10">
            <a-col class="pitch-button-col">
                <a-button class="pitch-button" @click="play('C')">C</a-button>
            </a-col>
            <a-col class="pitch-button-col">
                <a-button class="pitch-button" @click="play('C#')">C#</a-button>
            </a-col>
            <a-col class="pitch-button-col">
                <a-button class="pitch-button" @click="play('D')">D</a-button>
            </a-col>
            <a-col class="pitch-button-col">
                <a-button class="pitch-button" @click="play('D#')">D#</a-button>
            </a-col>
            <a-col class="pitch-button-col">
                <a-button class="pitch-button" @click="play('E')">E</a-button>
            </a-col>
            <a-col class="pitch-button-col">
                <a-button class="pitch-button" @click="play('F')">F</a-button>
            </a-col>
        </a-row>
        <a-row class="tester-row" :gutter="10">
            <a-col class="pitch-button-col">
                <a-button class="pitch-button" @click="play('F#')">F#</a-button>
            </a-col>
            <a-col class="pitch-button-col">
                <a-button class="pitch-button" @click="play('G')">G</a-button>
            </a-col>
            <a-col class="pitch-button-col">
                <a-button class="pitch-button" @click="play('G#')">G#</a-button>
            </a-col>
            <a-col class="pitch-button-col">
                <a-button class="pitch-button" @click="play('A')">A</a-button>
            </a-col>
            <a-col class="pitch-button-col">
                <a-button class="pitch-button" @click="play('A#')">A#</a-button>
            </a-col>
            <a-col class="pitch-button-col">
                <a-button class="pitch-button" @click="play('B')">B</a-button>
            </a-col>
        </a-row>
    </div>
</template>

<style scoped>
.pitch-play-tester {
    margin: 10px;
}

.tester-row {
    margin-bottom: 10px;
}

.pitch-button-col {
    flex: 125px;
}

.pitch-button {
    width: 100%;
}
</style>