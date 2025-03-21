import PropTypes from "prop-types";

import Card from "@mui/material/Card";
import Divider from "@mui/material/Divider";
import Icon from "@mui/material/Icon";

import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";
import MDAvatar from "components/MDAvatar";

function ComplexProjectCard({ color, image, title, dateTime, description, members, dropdown }) {
  const firstLetter = title.charAt(0).toUpperCase();
  
  return (
    <Card>
      <MDBox p={2}>
        <MDBox display="flex" alignItems="center">
          <MDAvatar
            alt={title}
            size="xl"
            variant="rounded"
            bgColor={color}
            sx={{
              p: 1,
              mt: -6,
              borderRadius: ({ borders: { borderRadius } }) => borderRadius.xl,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: "1.5rem",
              fontWeight: "bold",
              color: "white",
              backgroundColor: (theme) => theme.palette[color].main,
            }}
          >
            {firstLetter}
          </MDAvatar>
          <MDBox ml={2} mt={-2} lineHeight={0}>
            <MDTypography variant="h6" textTransform="capitalize" fontWeight="medium">
              {title}
            </MDTypography>
          </MDBox>
          {dropdown && (
            <MDTypography
              color="secondary"
              onClick={dropdown.action}
              sx={{
                ml: "auto",
                mt: -1,
                alignSelf: "flex-start",
                py: 1.25,
              }}
            >
              <Icon fontSize="default" sx={{ cursor: "pointer", fontWeight: "bold" }}>
                more_vert
              </Icon>
            </MDTypography>
          )}
          {dropdown.menu}
        </MDBox>
        <MDBox my={2} lineHeight={1}>
          <MDTypography variant="button" fontWeight="light" color="text">
            {description}
          </MDTypography>
        </MDBox>
        <Divider />
        <MDBox display="flex" justifyContent="space-between" alignItems="center">
          {dateTime ? (
            <MDBox display="flex" flexDirection="column" lineHeight={0}>
              <MDTypography variant="button" fontWeight="regular" color="secondary">
                Next Deadline
              </MDTypography>
              <MDTypography variant="button" fontWeight="medium">
                {dateTime}
              </MDTypography>
            </MDBox>
          ) : null}
          <MDBox display="flex" flexDirection="column" lineHeight={0}>
              <MDTypography variant="button" fontWeight="regular" color="secondary">
                Completion
              </MDTypography>
              <MDTypography variant="button" fontWeight="medium">
                75%
              </MDTypography>
            </MDBox>
        </MDBox>
      </MDBox>
    </Card>
  );
}

ComplexProjectCard.defaultProps = {
  color: "dark",
  dateTime: "",
  members: [],
  dropdown: false,
};

ComplexProjectCard.propTypes = {
  color: PropTypes.oneOf([
    "primary",
    "secondary",
    "info",
    "success",
    "warning",
    "error",
    "dark",
    "light",
  ]),
  image: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  dateTime: PropTypes.string,
  description: PropTypes.node.isRequired,
  members: PropTypes.arrayOf(PropTypes.string),
  dropdown: PropTypes.oneOfType([
    PropTypes.bool,
    PropTypes.shape({
      action: PropTypes.func,
      menu: PropTypes.node,
    }),
  ]),
};

export default ComplexProjectCard;
