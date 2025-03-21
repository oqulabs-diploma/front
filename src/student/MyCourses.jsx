import { useState } from "react";

import Grid from "@mui/material/Grid";

import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";

import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import ComplexProjectCard from "./ComplexProjectCard";
import CoursesFilter from "./CoursesFilter";

function MyCourses() {

  const [filter, setFilter] = useState({ status: "", search: "" });

  const courses = [
    { title: "Frontend Development", description: "Learn HTML, CSS, JavaScript.", dateTime: "02.03.22", status: "in-progress", deadline: "soon" },
    { title: "Backend Engineering", description: "Master server-side programming.", dateTime: "02.03.22", status: "completed", deadline: "far" },
    { title: "Data Science", description: "Python, TensorFlow, Pandas.", dateTime: "02.03.22", status: "upcoming", deadline: "soon" },
    { title: "Frontend Development", description: "Learn HTML, CSS, JavaScript.", dateTime: "02.03.22", status: "in-progress", deadline: "soon" },
    { title: "Backend Engineering", description: "Master server-side programming.", dateTime: "02.03.22", status: "completed", deadline: "far" },
    { title: "Data Science", description: "Python, TensorFlow, Pandas.", dateTime: "02.03.22", status: "upcoming", deadline: "soon" },
    { title: "Frontend Development", description: "Learn HTML, CSS, JavaScript.", dateTime: "02.03.22", status: "in-progress", deadline: "soon" },
    { title: "Backend Engineering", description: "Master server-side programming.", dateTime: "02.03.22", status: "completed", deadline: "far" },
    { title: "Data Science", description: "Python, TensorFlow, Pandas.", dateTime: "02.03.22", status: "upcoming", deadline: "soon" },
  ];

  const filteredCourses = courses.filter(course => {
    return (
      (filter.status ? course.status === filter.status : true) &&
      (filter.deadline ? course.deadline === filter.deadline : true) &&
      (filter.search ? course.title.toLowerCase().includes(filter.search.toLowerCase()) : true)
    );
  });

  return (
    <DashboardLayout>
      <DashboardNavbar light absolute />
      <MDBox pb={3} mt={8}>
        <CoursesFilter onFilterChange={setFilter} />
        <Grid container alignItems="center">
            <MDTypography variant="body2" color="text">
              Current Courses
            </MDTypography>
        </Grid>
        <MDBox mt={3}>
          <Grid container spacing={3}>
            {filteredCourses.map((course, index) => (
              <Grid item xs={12} md={6} lg={4} key={index}>
                <MDBox mb={1.5} mt={1.5}>
                  <ComplexProjectCard title={course.title} description={course.description} dateTime={course.dateTime}/>
                </MDBox>
              </Grid>
            ))}
          </Grid>
        </MDBox>
      </MDBox>
    </DashboardLayout>
  );
}

export default MyCourses;
