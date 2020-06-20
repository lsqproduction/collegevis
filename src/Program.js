


import { random, range } from "lodash";
import React from "react";
import {
  VictoryPie,
  VictoryTooltip,
  VictoryTheme,
  VictoryLabel
} from "victory";


export default class Program extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: this.getData(),
      colorScale: ["#D85F49", "#F66D3B", "#D92E1D", "#D73C4C", "#FFAF59", "#E28300", "#F6A57F"],
      sliceWidth: 60,
      style: {
        parent: {
          backgroundColor: "#f7f7f7",
          border: "1px solid #ccc",
          margin: "2%",
          maxWidth: "40%"
        }
      }
    };
  }

  componentDidMount() {


  }




  getData() {
    const rand = () => Math.max(Math.floor(Math.random() * 10000), 1000);
    return [
      { x: "<5", y: rand(), label: "A", fill: "grey" },
      { x: "5-13", y: rand() },
      { x: "14-17", y: rand() },
      { x: "18-24", y: rand() },
      { x: "25-44", y: rand() },
      { x: "45-64", y: rand() },
      { x: "≥65", y: rand() }
    ];
  }

  render() {
    console.log(this.props.props)




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

