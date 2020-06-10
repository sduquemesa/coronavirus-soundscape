import { Oscillator, Gain, Master } from "tone";

export default class Synth {

    constructor(NumberOfOscillators) {

        this.oscillators = [];
        for (let index = 0; index < NumberOfOscillators; index++) {
            let osc = new Oscillator;
            this.oscillators.push(osc);
        }

        this.oscillatorsGain = [];
        for (let index = 0; index < NumberOfOscillators; index++) {
            let gain = new Gain;
            this.oscillatorsGain.push(gain);
        }

        this.masterGain = new Gain();

        // Connect Oscillators to Gains and then to master Gain
        this.oscillators.map(
            (osc, index) => {
                this.oscillators[index].connect(this.oscillatorsGain[index]);
                this.oscillatorsGain[index].connect(this.masterGain);
                this.oscillatorsGain[index].gain.value = 0.2;
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

    setFrequency(freq, glideTime) {
        this.oscillators.forEach(
            (osc, index) => {
                if (Math.random() < 0.01) {
                    osc.frequency.exponentialRampToValueAtTime(freq[index],"+"+glideTime.toString());
                } else {
                    osc.frequency.value = freq[index];
                }
                // osc.frequency.exponentialRampToValueAtTime(freq[index],"+"+glideTime.toString());
                // osc.frequency.value = freq[index];
            }
        )
    }

    setOscType(oscTypeList) {
        this.oscillators.forEach(
            (osc, index) => {
                osc.type = oscTypeList[index];
            }
        )
    }

    setOscGain(oscGainList) {
        this.oscillatorsGain.forEach(
            (osc, index) => {
                osc.gain.value = oscGainList[index];
            }
        )
    }

}