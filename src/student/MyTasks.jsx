import { useState, useEffect } from "react";
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";

function MyTasks() {
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    setCourses(["React: Task 1", "React: Task 2", "React: Task 3"]);
  }, []);

  return (
    <DashboardLayout>
        <DashboardNavbar />
        <MDBox p={3}>
            <MDTypography variant="h4">My Tasks</MDTypography>
            <MDBox mt={2}>
            {courses.map((course, index) => (
                <MDTypography key={index}>{course}</MDTypography>
            ))}
            </MDBox>
        </MDBox>
    </DashboardLayout>
  );
}

export default MyTasks;
