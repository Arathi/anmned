<script setup lang="ts">
import Piano from "./components/Piano.vue";
import {computed, ref} from "vue";

const moduleIndexLimit = 2*10;
const moduleAmountLimit = 10;

const startModule = ref(8);
const startModuleName = computed(() => {
    let pitch = startModule.value % 2 == 0 ? 'C' : 'F';
    let space = Math.floor(startModule.value / 2);
    return pitch + space;
});

const moduleAmount = ref(5);
const moduleAmountDisplay = computed(() => {
    return moduleAmount.value + '';
});

function startModuleAlter(delta: number) {
    startModule.value += delta;
}

function moduleAmountAlter(delta: number) {
    moduleAmount.value += delta;
}

const startModuleDecreasable = computed(() => {
    if (startModule.value <= 0) return false;
    return true;
});
const startModuleIncreasable = computed(() => {
    if (startModule.value + moduleAmount.value >= moduleIndexLimit) return false;
    return true;
});

const moduleAmountDecreasable = computed(() => {
    if (moduleAmount.value <= 2) return false;
    return true;
});
const moduleAmountIncreasable = computed(() => {
    if (moduleAmount.value >= moduleAmountLimit) return false;
    if (startModule.value + moduleAmount.value >= moduleIndexLimit) return false;
    return true;
});
</script>

<template>
    <a-row :gutter="10" style="margin-bottom: 10px;">
        <a-col :span="12">
            <a-row align="center" :gutter="10">
                起始模块：
                <a-col flex="100px">
                    <a-button
                            type="primary"
                            class="buttons"
                            :disabled="!startModuleDecreasable"
                            @click="startModuleAlter(-1)">
                        -
                    </a-button>
                </a-col>
                <a-col flex="150px">
                    <a-input readonly v-model="startModuleName"></a-input>
                </a-col>
                <a-col flex="100px">
                    <a-button
                            type="primary"
                            class="buttons"
                            :disabled="!startModuleIncreasable"
                            @click="startModuleAlter(1)">
                        +
                    </a-button>
                </a-col>
            </a-row>
        </a-col>
        <a-col :span="12">
            <a-row align="center" :gutter="10">
                模块数量：
                <a-col flex="100px">
                    <a-button
                            type="primary"
                            class="buttons"
                            :disabled="!moduleAmountDecreasable"
                            @click="moduleAmountAlter(-1)">
                        -
                    </a-button>
                </a-col>
                <a-col flex="150px">
                    <a-input readonly v-model="moduleAmountDisplay"></a-input>
                </a-col>
                <a-col flex="100px">
                    <a-button
                            type="primary"
                            class="buttons"
                            :disabled="!moduleAmountIncreasable"
                            @click="moduleAmountAlter(1)">
                        +
                    </a-button>
                </a-col>
            </a-row>
        </a-col>
    </a-row>
    <a-row>
        <a-col>
            <piano :height="300" :black-key-scale="0.5" :start-module="startModule" :module-amount="moduleAmount" />
        </a-col>
    </a-row>
</template>

<style scoped>
.buttons {
    width: 100%;
}
</style>
