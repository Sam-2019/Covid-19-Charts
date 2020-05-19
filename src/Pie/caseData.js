import React from "react";
import { ResponsivePie } from "@nivo/pie";

class Case extends React.Component {
  render() {
    const continent = this.props.data;
    let casesData = [];

    for (let key in continent) {
      casesData.push({
        id: continent[key].continent,
        label: continent[key].continent,
        value: continent[key].cases,
      });
    }

    return (
      <>
        <div className="chart">
          <ResponsivePie
            data={casesData}
            margin={{ top: 0, right: 120, bottom: 0, left: 0 }}
            innerRadius={0.7}
            padAngle={2}
            cornerRadius={0}
            colors={{ scheme: "nivo" }}
            borderWidth={0}
            borderColor={{
              from: "color",
              modifiers: [["darker", 0.2]],
            }}
            enableRadialLabels={false}
            radialLabelsSkipAngle={10}
            radialLabelsTextXOffset={6}
            radialLabelsTextColor="#333333"
            radialLabelsLinkOffset={0}
            radialLabelsLinkDiagonalLength={16}
            radialLabelsLinkHorizontalLength={24}
            radialLabelsLinkStrokeWidth={1}
            radialLabelsLinkColor={{ from: "color" }}
            slicesLabelsSkipAngle={10}
            slicesLabelsTextColor="#333333"
            animate={true}
            motionStiffness={90}
            motionDamping={15}
            defs={[
              {
                id: "dots",
                type: "patternDots",
                background: "inherit",
                color: "rgba(255, 255, 255, 0.3)",
                size: 4,
                padding: 1,
                stagger: true,
              },
            ]}
            legends={[
              {
                translateX: 165,
                translateY: 0,
                anchor: "right",
                direction: "column",
                itemWidth: 150,
                itemHeight: 31,
                itemTextColor: "#999",
                symbolSize: 20,
                symbolShape: "circle",
                effects: [
                  {
                    on: "hover",
                    style: {
                      itemTextColor: "#000",
                    },
                  },
                ],
              },
            ]}
          />
        </div>
      </>
    );
  }
}

export default Case;
