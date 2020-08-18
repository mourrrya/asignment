import React from "react";
import { ResponsivePie } from "nivo";
import { UserContext } from "../stores/userStore";

const populationData = [
  {
    city: "Lucknow",
    state: "Uttar Pradesh",
    people: {
      male: 2000,
      female: 2200,
    },
  },
  {
    city: "Gorakhpur",
    state: "Uttar Pradesh",
    people: {
      male: 1800,
      female: 1500,
    },
  },
  {
    city: "Kanpur",
    state: "Uttar Pradesh",
    people: {
      male: 1850,
      female: 1700,
    },
  },
];

const getFilteredPopulation = () => {
  let totalMale = 0;
  let totalFemale = 0;

  for (let i = 0; i < populationData.length; i++) {
    totalMale += populationData[i].people.male;
    totalFemale += populationData[i].people.female;
  }
  let total = totalMale + totalFemale;
  return [
    {
      id: "male",
      label: "Male",
      value: totalMale,
    },
    {
      id: "female",
      label: "Female",
      value: totalFemale,
    },
    {
      id: "total",
      label: "Total",
      value: total,
    },
  ];
};

export default function Result() {
  const { signUpState, dispatchSignUp } = UserContext();

  return (
    <div className="dashboard-main">
      <div className="user-card">
        <h2 className="user-card__name">Hi : {signUpState.name}!</h2>
        <h2 className="user-card__email">Email : {signUpState.email}</h2>
        <h2 className="user-card__city">City : {signUpState.city}</h2>
      </div>
      <div style={{ height: "600px" }} className="">
        <ResponsivePie
          data={getFilteredPopulation()}
          margin={{ top: 40, right: 80, bottom: 80, left: 80 }}
          innerRadius={0.1}
          padAngle={0.7}
          cornerRadius={3}
          radialLabelsSkipAngle={10}
          radialLabelsTextXOffset={6}
          radialLabelsTextColor="#333333"
          radialLabelsLinkOffset={0}
          radialLabelsLinkDiagonalLength={16}
          radialLabelsLinkHorizontalLength={24}
          radialLabelsLinkStrokeWidth={1}
          // radialLabelsLinkColor={{ from: "color" }}
          slicesLabelsSkipAngle={0}
          sliceLabel={function (e) {
            return e.id + " (" + e.value + ")";
          }}
          slicesLabelsTextColor="#333333"
          animate={true}
          motionStiffness={90}
          motionDamping={15}
          legends={[
            {
              anchor: "bottom",
              direction: "row",
              translateY: 56,
              itemWidth: 100,
              itemHeight: 18,
              itemTextColor: "#999",
              symbolSize: 18,
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
    </div>
  );
}
