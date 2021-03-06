import React, { Component } from 'react'
import './App.css'
import Grid from "./components/Grid";
import Synth from "./components/Synth";

type Props = {
}

type State = {
  spoilersVisible: boolean,
}

class App extends Component<Props, State> {
  constructor(props: Props) {
    super(props);

    this.state = {
      spoilersVisible: false,
    }

    // this.synth = new Synth(2);
    // this.synth.connect();
    // this.synth.start();
    // this.synth.setFrequency(440);

  }

  // noinspection JSMethodCanBeStatic
  renderMainPost() {

    let exposed_you = <code className="code-exposed">you</code>;

    let susceptible = <code className="code-susceptible">Susceptible</code>;
    let infected = <code className="code-infectious">Infected</code>;
    let recovered = <code className="code-removed">Recovered</code>;
    let dead = <code className="code-dead">Dead</code>;
    let selfQuarantined = <code className="code-quarantined">Self-quarantined</code>;

    return (
      <div className="main-container">
        <Grid gridRows={60}
              gridCols={60}
              // highlight="transmissionRate"
              hospitalCapacityPct={0.05}
              nodeSize={9}
              nug={5}
              randomSeed={52}
              showAliveFraction={true}
              showAllControls={true}
              // showDaysPerStateControls={false}
              showDeaths={true}
              showTransmissionProbabilitySlider={true}
              showChanceOfIsolationAfterSymptomsSlider={true}
              // showPersonHoursSlider={true}
              // showTransmissionProbabilitySlider={true}
              showTravelRadiusSlider={true}
              speed={1}
              immunityFraction={0.1}
          />
      </div>
    );
  }



  render() {
    return (
      <div className="root-container">
          <div style={{height:"5em"}} />
          {this.renderMainPost()}
      </div>
    );
  }
}

export default App
