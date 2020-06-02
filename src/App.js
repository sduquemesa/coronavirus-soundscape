import React, { Component } from 'react'
import './App.css'
import Grid from "./components/Grid";
import NodeLegend from "./components/NodeLegend";
import Figure from "./components/Figure";

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
      <div className="container">
        <Grid gridRows={201}
              gridCols={201}
              // highlight="transmissionRate"
              hospitalCapacityPct={0.05}
              nodeSize={3}
              nug={5}
              randomSeed={100}
              showAliveFraction={true}
              showAllControls={true}
              // showDaysPerStateControls={true}
              showDeaths={true}
              showTransmissionProbabilitySlider={true}
              showChanceOfIsolationAfterSymptomsSlider={true}
              // showPersonHoursSlider={true}
              // showTransmissionProbabilitySlider={true}
              // showTravelRadiusSlider={true}
              speed={1}
          />
      </div>
    );
  }



  render() {
    return (
      <div className="main-container">
          {this.renderMainPost()}
      </div>
    );
  }
}

export default App
