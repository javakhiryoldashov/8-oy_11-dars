import React from "react";
import LineChart from "../../chart/LineChart";

export default function LineGraph() {
  return (
    <section className="py-16 px-8 bg-white shadow-lg rounded-lg mx-auto">
      <div className="max-w-7xl ">
        <div className="relative h-full">
          <LineChart />
        </div>
      </div>
    </section>
  );
}
