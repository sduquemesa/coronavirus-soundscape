import { Oscillator, Gain, Master } from "tone";

export default class OscillatorArray {

    constructor(NumberOfOscillators) {

        this.oscillators = [...new Array(NumberOfOscillators)].map( 
            () => { new Oscillator(); } 
        );

        this.oscillatorsGain = [...new Array(NumberOfOscillators)].map( 
            () => { new Gain(); } 
        );

        this.masterGain = new Gain();

        // Connect Oscullators to Gains and then to master Gain
        this.oscillators.map(
            (osc, index) => {
                osc.connect(this.oscillatorsGain[index]);
                this.oscillatorsGain[index].connect(this.masterGain);
            }
        );

        this.masterGain.gain.value = 1/this.oscillators.length;

    }

    connect() {
        this.masterGain.connect(Master);
    }

    disconnect() {
        this.masterGain.disconnect();
    }

    start() {
        this.oscillators.forEach( osc => osc.start() );
    }

    stop() {
        this.oscillators.forEach( osc => osc.stop() );
    }

    setFrequency(freq) {
        this.oscillators.forEach(
            (osc, index) => {
                osc.frequency.value = freq*(index+1);
            }
        )
    }

}