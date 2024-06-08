import React, { useState, useEffect } from "react";
import axios from "axios";
import { Pie, Bar } from "react-chartjs-2";
import ChartDataLabels from 'chartjs-plugin-datalabels';
import Chart from 'chart.js/auto';
import './index.css';
import { API_URL } from "../../config";
// Register ChartDataLabels plugin
Chart.register(ChartDataLabels);

function Body({ filters }) {
  const [projects, setProjects] = useState([]);
  const [projectCounts, setProjectCounts] = useState({});
  const [studentCounts, setStudentCounts] = useState({});
  const [amounts, setAmounts] = useState({});
  const [projectsPerYear, setProjectsPerYear] = useState({});
  const [studentsPerYear, setStudentsPerYear] = useState({});
  const [amountsPerYear, setAmountsPerYear] = useState({});
  const [showCharts, setShowCharts] = useState(true); // To toggle visibility of pie charts

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const response = await axios.get(`${API_URL}/api/projects`);
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

    if (year !== "All" && project.year !== parseInt(year)) return false;

    if (domain !== "All" && project.category !== domain) return false;

    if (startYear && projectYear < parseInt(startYear)) return false;

    if (endYear && projectYear > parseInt(endYear)) return false;

    return true;
  });

  useEffect(() => {
    countProjectsAndStudentsPerDomain();
    countProjectsPerYear();
    countStudentsPerYear();
    countAmountsPerYear();
  }, [projects, filters]);

  const countProjectsAndStudentsPerDomain = () => {
    const projectCounts = {};
    const studentCounts = {};
    const amounts = {};

    filteredProjects.forEach((project) => {
      // Count projects per domain
      projectCounts[project.category] =
        (projectCounts[project.category] || 0) + 1;

      // Count students per domain if project has students
      if (project.Students && Array.isArray(project.Students)) {
        project.Students.forEach((student) => {
          studentCounts[project.category] =
            (studentCounts[project.category] || 0) + 1;
        });
      }

      // Sum amounts per domain
      amounts[project.category] =
        (amounts[project.category] || 0) + project.amount;
    });

    setProjectCounts(projectCounts);
    setStudentCounts(studentCounts);
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

  const countStudentsPerYear = () => {
    const studentsPerYear = {};

    filteredProjects.forEach((project) => {
      const academicYear = getAcademicYear(project.Start_date);
      if (project.Students && Array.isArray(project.Students)) {
        studentsPerYear[academicYear] =
          (studentsPerYear[academicYear] || 0) + project.Students.length;
      }
    });

    setStudentsPerYear(studentsPerYear);
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

  const studentPieChartData = {
    labels: Object.keys(studentCounts),
    datasets: [
      {
        label: "Students",
        data: Object.values(studentCounts),
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

  const projectsPerYearChartData = {
    labels: Object.keys(projectsPerYear),
    datasets: [
      {
        label: "No. of Projects",
        data: Object.values(projectsPerYear),
        backgroundColor: "#59D5E0",
      },
    ],
  };

  const studentsPerYearChartData = {
    labels: Object.keys(studentsPerYear),
    datasets: [
      {
        label: "No. of Students",
        data: Object.values(studentsPerYear),
        backgroundColor: "#87A922",
      },
    ],
  };

  const amountsPerYearChartData = {
    labels: Object.keys(amountsPerYear),
    datasets: [
      {
        label: "Amount",
        data: Object.values(amountsPerYear),
        backgroundColor: "#FCDC2A",
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
    <div className="big" style={{ marginTop: '100px' }}>
      <div className="main">
        {showCharts && (
          <div className={`chart-container ${showCharts ? 'show' : 'hide'}`} style={{ display: "flex", justifyContent: "space-around", marginLeft: '75px', gap: '20px'}}>
            <section>
              <div className="chart" style={{ width: "450px", height: "550px" }}>
                <h2>Projects</h2>
                <Pie data={projectPieChartData} options={{ plugins: { datalabels: { display: false } } }} />
              </div>
            </section>
            <section>
              <div className="chart" style={{ width: "450px", height: "550px" }}>
                <h2>Students</h2>
                <Pie data={studentPieChartData} options={{ plugins: { datalabels: { display: false } } }} />
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
        <div className={`chart-container1 ${!showCharts ? 'show' : ''}`} style={{ display: "flex", justifyContent: "space-between", marginTop: '100px', marginLeft: '75px'}}>
          <section>
            <div className="chart" style={{ width: "450px", height: "450px" , marginTop: "100px"}}>
              <h2>No. of Projects per Year</h2>
              <Bar data={projectsPerYearChartData} options={barChartOptions} />
            </div>
          </section>
          <section>
            <div className="chart" style={{ width: "450px", height: "450px" , marginTop: "100px" }}>
              <h2>No. of Students</h2>
              <Bar data={studentsPerYearChartData} options={barChartOptions} />
            </div>
          </section>
          <section>
            <div className="chart" style={{ width: "450px", height: "450px" , marginTop: "100px" }}>
              <h2>Amount</h2>
              <Bar data={amountsPerYearChartData} options={barChartOptions} />
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}

export default Body;
