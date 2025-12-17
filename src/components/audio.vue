<script>
import { ref } from "vue"

const audioFiles = [
      new Audio("/audio/01 Awakening MASTER 24bit_48kHz.mp3"),
      new Audio("/audio/02 Into the Hollows Part I MASTER 24bit_48kHz.mp3"),
      new Audio("/audio/03 The Storm MASTER 24bit_48kHz.mp3"),
      new Audio("/audio/04 Home MASTER 24bit_48kHz.mp3"),
      new Audio("/audio/05 Two Geese MASTER 24bit_48kHz.mp3"),
      new Audio("/audio/06 Bulldozer MASTER v2 24bit_48kHz.mp3"),
      new Audio("/audio/07 Emergency Signal 434 MASTER v2 24bit_48kHz.mp3"),
      new Audio("/audio/08 Into the Hollows Part II MASTER 24bit_48kHz.mp3"),
      new Audio("/audio/09 Camp MASTER v2 24bit_48kHz.mp3"),
      new Audio("/audio/10 Into the Hollows Part III MASTER v2.mp3"),
      new Audio("/audio/11 As Time Draws Near MASTER v2 24bit_48kHz.mp3"),
];

const titles = [
      "01 Awakening",
      "02 Into the Hollows Part I",
      "03 The Storm",
      "04 Home",
      "05 Two Geese",
      "06 Bulldozer",
      "07 Emergency Signal 434",
      "08 Into the Hollows Part II",
      "09 Camp",
      "10 Into the Hollows Part III",
      "11 As Time Draws Near"]

const currentTrackIndex = ref(null);
const isCrossfading = ref(false);

export const doPlay = () => {
      console.log('doplay')
      audioFiles[currentTrackIndex.value].play()
}
export const doPause = () => {
      console.log('dopause');
      audioFiles[currentTrackIndex.value].pause()
}

let emitNewTrack;
export function initAudio(changeVolume, emit) {
      console.log('initAudio', changeVolume)
      audioFiles.forEach(a => {
            // a.loop = props.shouldLoop;
            a.volume = 1;
            // if (changeVolume) a.volume = 0;
      });
      emitNewTrack = emit;
}
export async function changeTrack(nextIndex) {
      console.log('changing track', currentTrackIndex.value, nextIndex, isCrossfading.value)
      if (nextIndex === currentTrackIndex.value || isCrossfading.value) return;
      isCrossfading.value = true;

      console.log('crossfading', currentTrackIndex.value, nextIndex)
      emitNewTrack(titles[nextIndex])
      await crossfade(currentTrackIndex.value, nextIndex);
      currentTrackIndex.value = nextIndex;

      isCrossfading.value = false;
      console.log('done crossfading')
}

function crossfade(fromIndex, toIndex) {
      console.log("crossfade called with", fromIndex, toIndex)
      return new Promise(resolve => {
            const from = audioFiles[fromIndex];
            const to = audioFiles[toIndex];

            console.log('playing ', to)
            if (to.paused) to.play();
            if (!from) {
                  to.volume = 1
                  resolve();
                  return;
            }
            let progress = 0;
            const duration = 5000;
            const step = 10;

            const interval = setInterval(() => {
                  progress += step;
                  const ratio = progress / duration;

                  from.volume = Math.max(0, 1 - ratio);
                  to.volume = Math.min(1, ratio);

                  if (ratio >= 1) {
                        console.log('pausing', from)
                        clearInterval(interval);
                        from.pause();
                        resolve();
                  }
            }, step);
      });
}
</script>