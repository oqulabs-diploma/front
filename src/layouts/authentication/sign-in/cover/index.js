import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { useAuth } from "context/AuthContext";
import { login as loginUser } from "network/requests";

import Card from "@mui/material/Card";
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";
import MDInput from "components/MDInput";
import MDButton from "components/MDButton";

import CoverLayout from "layouts/authentication/components/CoverLayout";
import bgImage from "assets/images/bg-sign-in-cover.jpeg";

function Cover() {
  const { login } = useAuth();
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();
    setError("");

    try {
      const { user, access, refresh } = await loginUser(email, password);

      login({ user, access, refresh });

      if (user.role === "student") {
        navigate("/student/my-courses");
      } else if (user.role === "teacher") {
        navigate("/teacher/all-courses");
      } else {
        navigate("/");
      }
    } catch (error) {
      setError(error.message || "Login failed. Please try again.");
    }
  };

  return (
    <CoverLayout image={bgImage}>
      <Card>
        <MDBox
          variant="gradient"
          bgColor="info"
          borderRadius="lg"
          mx={2}
          mt={2}
          p={3}
          mb={1}
          textAlign="center"
        >
          <MDTypography variant="h4" fontWeight="medium" color="white" mt={1}>
            Sign in
          </MDTypography>
          <MDTypography display="block" variant="button" color="white" my={1}>
            Enter your email and password
          </MDTypography>
        </MDBox>
        <MDBox pt={4} pb={3} px={3}>
          <MDBox component="form" role="form" onSubmit={handleLogin}>
            <MDBox mb={2}>
              <MDInput
                type="email"
                label="Email"
                variant="standard"
                fullWidth
                placeholder="email@example.com"
                InputLabelProps={{ shrink: true }}
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </MDBox>
            <MDBox mb={2}>
              <MDInput
                type="password"
                label="Password"
                variant="standard"
                fullWidth
                placeholder="********"
                InputLabelProps={{ shrink: true }}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </MDBox>
            {error && (
              <MDBox mb={2} textAlign="center">
                <MDTypography variant="button" color="error">
                  {error}
                </MDTypography>
              </MDBox>
            )}
            <MDBox mt={4} mb={1}>
              <MDButton type="submit" variant="gradient" color="info" fullWidth>
                Sign in
              </MDButton>
            </MDBox>
            <MDBox mt={3} mb={1} textAlign="center">
              <MDTypography variant="button" color="text">
                Not a member?{" "}
                <MDTypography
                  component={Link}
                  to="/sign-up/cover"
                  variant="button"
                  color="info"
                  fontWeight="medium"
                  textGradient
                >
                  Register
                </MDTypography>
              </MDTypography>
            </MDBox>
          </MDBox>
        </MDBox>
      </Card>
    </CoverLayout>
  );
}

export default Cover;
