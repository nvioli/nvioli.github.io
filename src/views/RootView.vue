<script setup lang="ts">
import { ref } from "vue";
import Main from '../components/Main.vue'
import Toolbar from '../components/Toolbar.vue'

const hasClicked = ref(false)
console.log('hasClicked', hasClicked.value)
const fontSize = ref(1.5)
const margin = ref(7);
const isPlaying = ref(true)
const currentTrack = ref('')

const changeFontSize = (inc: number) => { fontSize.value += inc };
const changeMargin = (mar: number) => { margin.value = mar }
const togglePlayPause = () => { isPlaying.value = !isPlaying.value }
const changeTrack = (newTrack: string) => { currentTrack.value = newTrack }

</script>

<template>
  <main>
    <div class="pageContainer" @click="hasClicked = true" :style="{ fontSize: fontSize + 'rem' }">
      <div class="intro" style="align-items: center; padding-top: 2rem; padding-bottom: 2rem;">
        <div>
          As Time Draws Near
          <br />&nbsp;
          Daniel Bachman
          <br />&nbsp;<br />
          2025
          <br />&nbsp;<br />
          <div style="font-size: 1.25rem">Edited by Aldona Dye</div>
          <div style="font-size: 1.25rem">Layout and Design by Thomas-Mark Peterson</div>
          <div style="font-size: 1.25rem">Website by Nick Violi</div>

          <br />&nbsp;<br />
          <div v-if="!hasClicked">
            Click to begin, then scroll to continue.
          </div>
          <div v-if="hasClicked">
            Scroll to continue.
          </div>
        </div>
      </div>
      <div v-if="hasClicked">
        <div class="intro margins" :style="{ paddingLeft: margin + 'rem', paddingRight: margin + 'rem' }">
          As Time Draws Near is a short story and accompanying soundtrack that follows a rural community in the
          Shenandoah Blue Ridge of Virginia after a powerful hurricane devastates the area. This piece of speculative
          climate fiction explores the potential near-term impacts of climate breakdown on the region, as well as an
          accelerating military dictatorship driven by brutalizing unchecked corporate greed and eugenic
          pseudoscience.
          <br />&nbsp;<br />
          This story and soundtrack is designed to be read at the speed if you were reading the text aloud,
          as each new track follows along with the major movements of the story, though the piece can be enjoyed in
          any way the reader/listener would like to experience it. I’m offering this story and audio for free,
          but if you enjoy the work I really encourage buying the PDF/MP3 at Bandcamp, or a donation to my
          Patreon, or PayPal (danilbachman@gmail.com).
          <br />&nbsp;<br />
          Please make sure your sound is on (ideally with headphones). Hope you enjoy it.
        </div>
        <div class="intro margins" :style="{ paddingLeft: margin + 'rem', paddingRight: margin + 'rem' }">
          <img src="/images/0.jpg" />
        </div>
        <div>
          <div class="margins" :style="{ paddingLeft: margin + 'rem', paddingRight: margin + 'rem' }">
            <Main :isPlaying="isPlaying" @changeTrack="changeTrack" />
          </div>
          <Toolbar @changeFontSize="changeFontSize" @changeMargin="changeMargin" @togglePlayPause="togglePlayPause"
            :isPlaying="isPlaying" :currentTrack="currentTrack" />
        </div>
      </div>
    </div>
  </main>
</template>

<style scoped>
.pageContainer {
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: 1rem;
  font-family: Baskerville Old Face, Baskerville, Hoefler Text, Garamond, Times New Roman, serif;
  text-align: center;
}

.intro {
  height: 100vh;
  display: flex;
  justify-content: center;
  max-width: 50rem;
  margin: 0 auto;
}

img {
  max-height: 100vh;
  max-width: 100%;
  object-fit: contain;
  display: block;
  margin: 4rem auto;
}

@media only screen and (max-width: 48rem) {
  .margins {
    padding-left: 0.5rem !important;
    padding-right: 0.5rem !important;
  }
}
</style>