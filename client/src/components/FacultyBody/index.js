import React, { useState, useEffect } from "react";
import axios from "axios";
import { Pie, Bar } from "react-chartjs-2";
import './index.css';
import Chart from 'chart.js/auto';
import ChartDataLabels from 'chartjs-plugin-datalabels';
import { API_URL } from "../../config";
Chart.register(ChartDataLabels);

function FacultyBody({ filters }) {
  const [projects, setProjects] = useState([]);
  const [projectCounts, setProjectCounts] = useState({});
  const [amounts, setAmounts] = useState({});
  const [projectsPerYear, setProjectsPerYear] = useState({});
  const [amountsPerYear, setAmountsPerYear] = useState({});
  const [showCharts, setShowCharts] = useState(true); // To toggle visibility of pie charts

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const response = await axios.get(`${API_URL}/api/faculty`);
        console.log(response.data); // Log the response data
        setProjects(response.data);
      } catch (error) {
        console.error("Error fetching projects:", error);
      }
    };

    fetchProjects();
  }, []);

  useEffect(() => {
    // Update showCharts state based on filters
    if (filters && filters.domain !== "All") {
      setShowCharts(false);
    } else {
      setShowCharts(true);
    }
  }, [filters]);

  // Filter projects based on the provided filters
  const filteredProjects = projects.filter((project) => {
    if (!filters) return true;
    const { year, domain, startYear, endYear } = filters;
    const projectYear = new Date(project.Start_date).getFullYear();
   
    if (domain !== "All" && project.category !== domain) return false;

    if (startYear && projectYear < parseInt(startYear)) return false;

    if (endYear && projectYear > parseInt(endYear)) return false;
    console.log(project);    
    return true;
  });
  console.log(filteredProjects);
  console.log(filteredProjects.length);
  useEffect(() => {
    countProjectsPerDomain();
    countProjectsPerYear();
    countAmountsPerYear();
  }, [projects, filters]);

  const countProjectsPerDomain = () => {
    const projectCounts = {};
    const amounts = {};

    filteredProjects.forEach((project) => {
      // Count projects per domain
      projectCounts[project.category] =
        (projectCounts[project.category] || 0) + 1;

      // Sum amounts per domain
      amounts[project.category] =
        (amounts[project.category] || 0) + project.amount;
    });

    setProjectCounts(projectCounts);
    setAmounts(amounts);
  };

  const countProjectsPerYear = () => {
    const projectsPerYear = {};

    filteredProjects.forEach((project) => {
      const academicYear = getAcademicYear(project.Start_date);
      projectsPerYear[academicYear] = (projectsPerYear[academicYear] || 0) + 1;
    });

    setProjectsPerYear(projectsPerYear);
  };

  const countAmountsPerYear = () => {
    const amountsPerYear = {};

    filteredProjects.forEach((project) => {
      const academicYear = getAcademicYear(project.Start_date);
      amountsPerYear[academicYear] =
        (amountsPerYear[academicYear] || 0) + project.amount;
    });

    setAmountsPerYear(amountsPerYear);
  };

  const getAcademicYear = (dateString) => {
    const date = new Date(dateString);
    const year = date.getFullYear();
    const nextYear = year + 1;
    return `${year}-${String(nextYear).slice(2)}`;
  };

  const sortedYearsProjectsPerYear = Object.keys(projectsPerYear).sort(); // Sort years in ascending order for projects per year
  const sortedYearsAmountsPerYear = Object.keys(amountsPerYear).sort(); // Sort years in ascending order for amounts per year

  const projectsPerYearChartData = {
    labels: sortedYearsProjectsPerYear,
    datasets: [
      {
        label: "No. of Projects",
        data: sortedYearsProjectsPerYear.map((year) => projectsPerYear[year]),
        backgroundColor: "#59D5E0",
      },
    ],
  };

  const amountsPerYearChartData = {
    labels: sortedYearsAmountsPerYear,
    datasets: [
      {
        label: "Amount",
        data: sortedYearsAmountsPerYear.map((year) => amountsPerYear[year]),
        backgroundColor: "#FCDC2A",
      },
    ],
  };

  const projectPieChartData = {
    labels: Object.keys(projectCounts),
    datasets: [
      {
        label: "Projects",
        data: Object.values(projectCounts),
        backgroundColor: [
          "#59D5E0",
          "#87A922",
          "#FCDC2A",
          "#F7418F",
          "#FF204E",
          "#6420AA",
        ],
      },
    ],
  };

  const amountPieChartData = {
    labels: Object.keys(amounts),
    datasets: [
      {
        label: "Amount",
        data: Object.values(amounts),
        backgroundColor: [
          "#59D5E0",
          "#87A922",
          "#FCDC2A",
          "#F7418F",
          "#FF204E",
          "#6420AA",
        ],
      },
    ],
  };

  const barChartOptions = {
    plugins: {  
      datalabels: {
        anchor: 'center',
        align: 'center',
        formatter: (value) => value,
        color: 'black',
        font: {
          size: 11, // Increase the size for better visibility
        },
      },
    },
    scales: {
      y: {
        beginAtZero: true,
        ticks: {
          precision: 0,
        },
      },
    },
  };

  return (
    <div className="big" style={{ marginTop:'100px'}}>
      <div className="main">
      {showCharts && (
          <div className={`chart-container ${showCharts ? 'show' : 'hide'}`} style={{ display: "flex", justifyContent: "space-around", gap: '100px', maxWidth: '1600px', marginLeft: '50px' }}>
            <section>
              <div className="chart" style={{ width: "450px", height: "550px" }}>
                <h2>Projects</h2>
                <Pie data={projectPieChartData} options={{ plugins: { datalabels: { display: false } } }} />
              </div>
            </section>
            <section>
              <div className="chart" style={{ width: "450px", height: "550px" }}>
                <h2>Amount</h2>
                <Pie data={amountPieChartData} options={{ plugins: { datalabels: { display: false } } }} />
              </div>
            </section>
          </div>
          )}
         <div className={`chart-container1`} style={{ display: "flex", justifyContent: "space-between", marginTop:'50px', gap: '5px', maxWidth: '1200px' }}>
          <section>
            <div className="chart" style={{ width: "450px", height: "450px", marginLeft: '60px', marginRight: '100px' }}>
              <h2>No. of Projects</h2>
              <Bar
                data={projectsPerYearChartData}
                options={barChartOptions}
              />
              </div>
              </section>
              <section>
              <div className="chart" style={{ width: "450px", height: "450px",  marginLeft: '200px'}}>
              <h2>Amount</h2>
              <Bar
                data={amountsPerYearChartData}
                options={barChartOptions}
              />
              </div>
            </section>
          </div>
    </div>
</div>
);
}

export default FacultyBody;
