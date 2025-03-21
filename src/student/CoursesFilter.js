import { useState } from "react";
import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import InputLabel from "@mui/material/InputLabel";
import FormControl from "@mui/material/FormControl";
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";

function CoursesFilter({ onFilterChange }) {
  const [status, setStatus] = useState("");
  const [search, setSearch] = useState("");

  const handleStatusChange = (e) => {
    const newStatus = e.target.value;
    setStatus(newStatus);
    onFilterChange({ status: newStatus, search });
  };

  const handleSearchChange = (e) => {
    const newSearch = e.target.value;
    setSearch(newSearch);
    onFilterChange({ status, search: newSearch });
  };

  return (
    <MDBox pb={2}>
      <Grid container spacing={2} alignItems="center">
        <Grid item xs={12} sm={2}>
            {/* <InputLabel sx={{marginBottom: '0.3em'}}>Status</InputLabel> */}
            <MDTypography variant="button" color="text">Status</ MDTypography>
            <FormControl fullWidth>
                {/* <InputLabel>All</InputLabel> */}
                <Select value={status} onChange={handleStatusChange} sx={{padding: '9.5px'}}>
                <MenuItem value="">All</MenuItem>
                <MenuItem value="completed">Completed</MenuItem>
                <MenuItem value="upcoming">Upcoming</MenuItem>
                <MenuItem value="in-progress">In Progress</MenuItem>
                </Select>
            </FormControl>
        </Grid>

        <Grid item xs={12} sm={8} sx={{marginTop: "1.5em"}}>
          <TextField
            fullWidth
            label="Search"
            variant="outlined"
            value={search}
            onChange={handleSearchChange}
          />
        </Grid>
      </Grid>
    </MDBox>
  );
}

export default CoursesFilter;
