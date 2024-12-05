import { useState, useMemo } from "react";
import { Chart, registerables } from "chart.js";
import { Pie, Bar } from "react-chartjs-2";

Chart.register(...registerables);

export default function InstructorChart({ courses }) {
  // State to keep track of the currently selected chart
  const [currChart, setCurrChart] = useState("students");
  const [chartType, setChartType] = useState("pie"); // State to toggle between Pie and Bar chart

  // Function to generate random colors for the chart
  const generateRandomColors = (numColors) => {
    const colors = [];
    for (let i = 0; i < numColors; i++) {
      const color = `rgb(${Math.floor(Math.random() * 256)}, ${Math.floor(
        Math.random() * 256
      )}, ${Math.floor(Math.random() * 256)})`;
      colors.push(color);
    }
    return colors;
  };

  // UseMemo to generate colors only once, avoiding unnecessary re-renders
  const chartColors = useMemo(() => generateRandomColors(courses.length), [courses]);

  // Data for the chart displaying student information
  const chartDataStudents = {
    labels: courses.map((course) => course.courseName),
    datasets: [
      {
        data: courses.map((course) => course.totalStudentsEnrolled),
        backgroundColor: chartColors,
        borderWidth: 1,
      },
    ],
  };

  // Data for the chart displaying income information
  const chartIncomeData = {
    labels: courses.map((course) => course.courseName),
    datasets: [
      {
        data: courses.map((course) => course.totalAmountGenerated),
        backgroundColor: chartColors,
        borderWidth: 2,
      },
    ],
  };

  // Options for the chart
  const options = {
    maintainAspectRatio: false,
    responsive: true,
    plugins: {
      tooltip: {
        backgroundColor: "rgba(0, 0, 0, 0.7)",
        titleFont: { weight: "bold", size: 16 },
        bodyFont: { size: 14 },
      },
    },
  };

  return (
    <div className="flex flex-1 flex-col gap-y-1 rounded-lg bg-richblack-800 p-8 shadow-lg">
      <p className="text-lg font-bold text-richblack-5 ">Visualize Your Courses</p>
      <div className="flex space-x-6 justify-center">
        {/* Button to switch to the "students" chart */}
        <button
          onClick={() => setCurrChart("students")}
          className={`rounded-full py-2 px-6 transition-all duration-300 transform ${
            currChart === "students"
              ? "bg-gradient-to-r from-yellow-500 to-yellow-300 text-black"
              : "bg-transparent border-2 border-yellow-400 text-yellow-400 hover:bg-yellow-100"
          }`}
        >
          Students
        </button>
        {/* Button to switch to the "income" chart */}
        <button
          onClick={() => setCurrChart("income")}
          className={`rounded-full py-2 px-6 transition-all duration-300 transform ${
            currChart === "income"
              ? "bg-gradient-to-r from-yellow-500 to-yellow-300 text-black"
              : "bg-transparent border-2 border-yellow-400 text-yellow-400 hover:bg-yellow-100"
          }`}
        >
          Income
        </button>
      </div>

      <div className="relative mx-auto aspect-square w-full h-80">
        {/* Render the chart dynamically based on selected type */}
        {chartType === "pie" ? (
          <Pie
            data={currChart === "students" ? chartDataStudents : chartIncomeData}
            options={options}
          />
        ) : (
          <Bar
            data={currChart === "students" ? chartDataStudents : chartIncomeData}
            options={options}
          />
        )}
      </div>
    </div>
  );
}
