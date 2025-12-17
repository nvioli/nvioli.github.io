<script setup>
import { ref } from "vue"

const props = defineProps(['isPlaying', 'currentTrack'])
const isMenuVisible = ref(false)
const toggleMenuVisibility = () => {
    console.log('toggling ismenuVisible');
    isMenuVisible.value = !isMenuVisible.value
}
</script>

<template>
    <div id="toolbarContainer">
        <transition name="slideUp">
            <div id="tools" :class="{ isMenuVisible: isMenuVisible }">
                <div style="display: flex; align-items: center; z-index: 10;">
                    <button @click="toggleMenuVisibility">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                            <rect x="0" y="0" width="24" height="24" rx="2" />

                            <g fill="none" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round">
                                <circle cx="12" cy="12" r="3" />
                                <line x1="12" y1="7.5" x2="12" y2="7" />
                                <line x1="12" y1="16.5" x2="12" y2="17" />

                                <line x1="7.5" y1="12" x2="7" y2="12" />
                                <line x1="16.5" y1="12" x2="17" y2="12" />

                                <line x1="9.8" y1="9.8" x2="8.7" y2="8.7" />
                                <line x1="14.2" y1="14.2" x2="15.3" y2="15.3" />

                                <line x1="9.8" y1="14.2" x2="8.7" y2="15.3" />
                                <line x1="14.2" y1="9.8" x2="15.3" y2="8.7" />
                            </g>
                        </svg>
                    </button>
                </div>
                <transition name="slideLeft">
                    <div style="display: flex; flex-grow:1" v-if="isMenuVisible" id="toolbar">
                        <div class="toolbarSection" id="marginControl">
                            Margins:
                            <button @click="$emit('changeMargin', 12)">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                                    <rect x="0" y="0" width="24" height="24" rx="2" />
                                    <g stroke-width="1" stroke-linecap="round">
                                        <line x1="8" y1="6" x2="16" y2="6" />
                                        <line x1="8" y1="10" x2="16" y2="10" />
                                        <line x1="8" y1="14" x2="16" y2="14" />
                                        <line x1="8" y1="18" x2="16" y2="18" />
                                    </g>
                                </svg>
                            </button>
                            <button @click="$emit('changeMargin', 7)">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                                    <rect x="0" y="0" width="24" height="24" rx="2" />
                                    <g stroke-width="1" stroke-linecap="round">
                                        <line x1="5" y1="6" x2="19" y2="6" />
                                        <line x1="5" y1="10" x2="19" y2="10" />
                                        <line x1="5" y1="14" x2="19" y2="14" />
                                        <line x1="5" y1="18" x2="19" y2="18" />
                                    </g>
                                </svg>
                            </button>
                            <button @click="$emit('changeMargin', 2)">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                                    <rect x="0" y="0" width="24" height="24" rx="2" />
                                    <g stroke-width="1" stroke-linecap="round">
                                        <line x1="2" y1="6" x2="22" y2="6" />
                                        <line x1="2" y1="10" x2="22" y2="10" />
                                        <line x1="2" y1="14" x2="22" y2="14" />
                                        <line x1="2" y1="18" x2="22" y2="18" />
                                    </g>
                                </svg>

                            </button>
                        </div>
                        <div class="toolbarSection">
                            Font size:
                            <button @click="$emit('changeFontSize', -0.125)"> <svg xmlns="http://www.w3.org/2000/svg"
                                    width="24" height="24" viewBox="0 0 24 24">
                                    <rect x="0" y="0" width="24" height="24" rx="2" />
                                    <g stroke-width="2" stroke-linecap="round">
                                        <line x1="8" y1="12" x2="16" y2="12" />
                                    </g>
                                </svg>
                            </button>
                            <button @click="$emit('changeFontSize', 0.125)">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                                    <rect x="0" y="0" width="24" height="24" rx="2" />
                                    <g stroke-width="2" stroke-linecap="round">
                                        <line x1="12" y1="8" x2="12" y2="16" />
                                        <line x1="8" y1="12" x2="16" y2="12" />
                                    </g>
                                </svg>
                            </button>
                        </div>
                    </div>
                </transition>
                <div
                    style="display: flex; flex-shrink: 1; overflow: hidden; text-overflow: ellipsis; white-space: nowrap; padding-left: 1em; align-items: center;">
                    <div class="currentTrack" style="flex-shrink: 1; z-index: -10;">
                        {{ currentTrack }}</div>
                    <button @click="$emit('togglePlayPause')" style="flex-shrink:0;">
                        <svg v-if="!isPlaying" xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                            viewBox="0 0 24 24">
                            <rect x="0" y="0" width="24" height="24" rx="2" />
                            <polygon points="10,8 16,12 10,16" />
                        </svg>
                        <svg v-if="isPlaying" xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                            viewBox="0 0 24 24">
                            <rect x="0" y="0" width="24" height="24" rx="2" />
                            <g stroke-width="2" stroke-linecap="round">
                                <line x1="10" x2="10" y1="8" y2="16" />
                                <line x1="14" x2="14" y1="8" y2="16" />
                            </g>
                        </svg>

                    </button>
                </div>
            </div>
        </transition>
    </div>
</template>

<style>
#toolbarContainer {
    border-top: 1px solid var(--color-text);
    position: sticky;
    bottom: 0;
    width: 100%;
    background: var(--color-background);
    margin-top: 1rem;
    font-family: Helvetica Neue, Helvetica, Arial, sans-serif;
    font-size: 1.1rem;
}

#toolbar {
    padding: 1rem;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    letter-spacing: .05rem;
}

.toolbarSection {
    display: flex;
    flex-shrink: 0;
    justify-content: center;
    align-items: center;
    gap: 0.5rem;
    padding: 0 0.75rem;
    border-right: 1px solid var(--color-text);
    height: 2.5rem;
}

.toolbarSection:last-of-type {
    border-right: 0;
}

button {
    padding: 0;
    background: transparent;
    color: var(--color-text);
    border: 1px solid var(--color-text);
    border-radius: 0.25rem;
    height: 2rem;
    width: 2rem;
    cursor: pointer;
    border: 0;
}

rect {
    fill: var(--gray);
}

polygon {
    fill: var(--color-background)
}

g {
    stroke: var(--color-background)
}

svg {
    width: 100%;
    height: 100%;
}

.slideLeft-enter-active,
.slideLeft-leave-active,
.slideUp-enter-active,
.slideUp-leave-active {
    transition: all 1s ease-out;
}

.slideLeft-enter-from,
.slideLeft-leave-to {
    transform: translateX(-100%);
    opacity: 0;
}

.slideUp-enter-from,
.slideUp-leave-to {
    transform: translateY(-100%);
    opacity: 0;
}

.currentTrack {
    margin-right: 1em;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    flex-shrink: 0;
}

#tools {
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 4.5rem;
    overflow: clip;
}

@media only screen and (max-width: 48rem) {
    #marginControl {
        display: none;
    }
}
</style>