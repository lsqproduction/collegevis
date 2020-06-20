



import React from "react";
import {
  VictoryPie,

} from "victory";


export default class Program extends React.Component {
  constructor(props) {
    super();
    this.state = {
      colorScale: ["#D85F49", "#F66D3B", "#D92E1D", "#D73C4C", "#FFAF59", "#E28300", "#F6A57F"],

    };
  }

  render() {
    let programs = {...this.props.props}

    Object.keys(programs).forEach((key) => {
      if (!programs[key]) delete programs[key];
    });
    console.log(programs)


    return (
      <div>
        <div className="Container">

          <VictoryPie
            labelRadius={100}
            colorScale={this.state.colorScale}
            data={[
              { x: "Cats", y: 35 },
              { x: "Dogs", y: 40 },
              { x: "Birds", y: 55 },
              { x: "Bug", y: 10 },
            ]}
            innerRadius={30}
          />

        </div>
      </div>
    );
  }
}

