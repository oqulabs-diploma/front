import { useEffect } from "react";
import { Routes, Route, Navigate, useLocation } from "react-router-dom";
import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";

import Sidenav from "examples/Sidenav";
import theme from "assets/theme";
import { AuthProvider } from "context/AuthContext";
import { useMaterialUIController } from "context";

import SignInCover from "layouts/authentication/sign-in/cover";
import SignUpCover from "layouts/authentication/sign-up/cover";
import ResetCover from "layouts/authentication/reset-password/cover";

import brandDark from "assets/images/logo-ct-dark.png";
import routes from "routes";
import PrivateRoute from "layouts/access/PrivateRoute";
import Unauthorized from "layouts/access/Unauthorized";

export default function App() {
  const [controller] = useMaterialUIController();
  const { layout, sidenavColor } = controller;
  const { pathname } = useLocation();

  useEffect(() => {
    document.documentElement.scrollTop = 0;
    document.scrollingElement.scrollTop = 0;
  }, [pathname]);

  const getRoutes = (allRoutes) =>
    allRoutes.flatMap((route) => {
      if (route.collapse) {
        return getRoutes(route.collapse);
      }

      if (route.route) {
        if (route.protected) {
          return (
            <Route
              key={route.key}
              path={route.route}
              element={
                <PrivateRoute allowedRoles={route.allowedRoles}>
                  {route.component}
                </PrivateRoute>
              }
            />
          );
        }

        return <Route exact path={route.route} element={route.component} key={route.key} />;
      }

      return [];
    });

  return (
    <AuthProvider>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        {layout === "dashboard" && (
          <Sidenav
            color={sidenavColor}
            brand={brandDark}
            brandName="Oqulabs"
            routes={routes}
          />
        )}

        <Routes>
          <Route path="/sign-in/cover" element={<SignInCover />} />
          <Route path="/sign-up/cover" element={<SignUpCover />} />
          <Route path="/reset-password/cover" element={<ResetCover />} />
          <Route path="/unauthorized" element={<Unauthorized />} />

          {getRoutes(routes)}

          <Route path="*" element={<Navigate to="/sign-in/cover" replace />} />
        </Routes>
      </ThemeProvider>
    </AuthProvider>
  );
}
