import { useNavigate } from "react-router-dom";
import Card from "@mui/material/Card";
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";
import MDButton from "components/MDButton";

function Unauthorized() {
  const navigate = useNavigate();

  const handleBack = () => {
    navigate(-1); // вернуться назад
  };

  return (
    <MDBox display="flex" justifyContent="center" alignItems="center" minHeight="100vh">
      <Card sx={{ padding: 4, textAlign: "center" }}>
        <MDTypography variant="h4" color="error" fontWeight="bold" mb={2}>
          Access Denied
        </MDTypography>
        <MDTypography variant="body1" mb={3}>
          You do not have permission to view this page.
        </MDTypography>
        <MDButton variant="gradient" color="info" onClick={handleBack}>
          Go Back
        </MDButton>
      </Card>
    </MDBox>
  );
}

export default Unauthorized;
