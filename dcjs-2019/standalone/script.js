var poly = new Tone.PolySynth(4, Tone.Synth).toMaster();

var distortAndCompress = new Tone.Distortion({ "distortion" : 0.4, "wet" : 0.4}).connect(new Tone.Compressor({ "threshold" : -30, "ratio" : 6, "attack" : 0.3, "release" : 0.1})).toMaster();
var kick = new Tone.MembraneSynth({ "pitchDecay" : 0.01, "octaves" : 6, "oscillator" : { "type" : "square4" }, "envelope" : { "attack" : 0.001, "decay" : 0.2, "sustain" : 0 }}).connect(distortAndCompress);
var snare = new Tone.Player({ "url" : "snare.mp3", "retrigger" : true, "fadeOut" : 0.1, "volume": -20}).connect(distortAndCompress);

var fmSynth = new Tone.FMSynth({volume:-10}).toMaster();

new Tone.Loop(time => {
	poly.triggerAttackRelease("C1", "8n", time);
	poly.triggerAttackRelease(["C2","E2","G2"], "8n", "+8n");
}, "4n").start(0);

new Tone.Loop(time => {
   kick.triggerAttackRelease("G1", "8n",time);
}, "1n").start(0);

new Tone.Loop(time => {
   kick.triggerAttackRelease("C2", "8n",time);
}, "4n").set({probability:0.5}).start("8n");

new Tone.Loop(time => {
   snare.start(time).stop(time + 0.1);
}, "4n").set({probability:0.25}).start("16n");

var cmaj = ["C3","D3","E3","F3","G3","A3","B3","C4"];
new Tone.Loop(time => {
   fmSynth.triggerAttackRelease(cmaj[Math.floor(Math.random()*cmaj.length)],"4n",time);
}, "2n").start("2n");

Tone.Transport.start();

function setModulationIndex(slider) {
  fmSynth.set({modulationIndex:slider.value});
}
