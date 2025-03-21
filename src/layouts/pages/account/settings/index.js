import Grid from "@mui/material/Grid";

import MDBox from "components/MDBox";

import Header from "layouts/pages/account/settings/components/Header";
import BasicInfo from "layouts/pages/account/settings/components/BasicInfo";
import ChangePassword from "layouts/pages/account/settings/components/ChangePassword";
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";

function Settings() {
  return (
    <DashboardLayout>
        <DashboardNavbar />
        <MDBox mt={4}>
          <Grid container spacing={3}>
            <Grid item xs={12} lg={9}>
              <MDBox mb={3}>
                <Grid container spacing={3}>
                  <Grid item xs={12}>
                    <Header />
                  </Grid>
                  <Grid item xs={12}>
                    <BasicInfo />
                  </Grid>
                  <Grid item xs={12}>
                    <ChangePassword />
                  </Grid>
                </Grid>
              </MDBox>
            </Grid>
          </Grid>
        </MDBox>
    </DashboardLayout>
  );
}

export default Settings;
