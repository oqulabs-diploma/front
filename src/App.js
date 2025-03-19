import { useEffect } from "react";
import { Routes, Route, Navigate, useLocation } from "react-router-dom";
import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";

import Sidenav from "examples/Sidenav";
import theme from "assets/theme";
import { AuthProvider } from "context/AuthContext";

import routes from "routes";
import { useMaterialUIController } from "context";

import brandDark from "assets/images/logo-ct-dark.png";

import SignInCover from "layouts/authentication/sign-in/cover";
import SignUpCover from "layouts/authentication/sign-up/cover";
import ResetCover from "layouts/authentication/reset-password/cover";

export default function App() {
  const [controller] = useMaterialUIController();
  const { layout, sidenavColor } = controller;
  const { pathname } = useLocation();

  useEffect(() => {
    document.documentElement.scrollTop = 0;
    document.scrollingElement.scrollTop = 0;
  }, [pathname]);

  const getRoutes = (allRoutes) =>
    allRoutes.map((route) => {
      if (route.collapse) {
        return getRoutes(route.collapse);
      }

      if (route.route) {
        return (
          <Route exact path={route.route} element={route.component} key={route.key} />
        );
      }

      return null;
    });

  return (
    <AuthProvider>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        {layout === "dashboard" && (
          <Sidenav
            color={sidenavColor}
            brand={brandDark}
            brandName="Creative Tim"
            routes={routes}
          />
        )}
        <Routes>
          {getRoutes(routes)}

          <Route path="/sign-in/cover" element={<SignInCover />} />
          <Route path="/sign-up/cover" element={<SignUpCover />} />
          <Route path="/reset-password/cover" element={<ResetCover />} />

          <Route path="*" element={<Navigate to="/sign-in/cover" />} />
        </Routes>
      </ThemeProvider>
    </AuthProvider>
  );
}
