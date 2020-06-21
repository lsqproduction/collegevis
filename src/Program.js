



import React from "react";
import { VictoryPie, VictoryTooltip } from "victory";


export default class Program extends React.Component {
  constructor(props) {
    super();

  }

  render() {
    let programs = {...this.props.props}

    Object.keys(programs).forEach((key) => {
      if (!programs[key]) delete programs[key];
    });
    console.log(programs)

    let data = []

    for(let key in programs){
      data.push({ x: key, y: programs[key], label: key});
    }
    console.log('data', data)

    return (
      <div>
        <VictoryPie
          labelComponent={<VictoryTooltip />}
          // labels={() => null}
          colorScale={[
            "#FFA07A",
            "#FA8072",
            "#E9967A",
            "#F08080",
            "#CD5C5C",
            "#DC143C",
            "#B22222",
            "#FF0000",
            "#8B0000",
            "#FF7F50",
            "#FF6347",
            "#FF4500",
            "#FFD700",
            "#FFA500",
            "#FF8C00",
            "#E6E6FA",
            "#D8BFD8",
            "#DDA0DD",
            "#D85F49",
            "#F66D3B",
            "#D92E1D",
            "#D73C4C",
            "#FFAF59",
            "#E28300",
            "#F6A57F",
          ]}
          data={data}
          innerRadius={30}
        />
      </div>
    );
  }
}

