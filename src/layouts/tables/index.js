/**
=========================================================
* Material Dashboard 2 React - v2.1.0
=========================================================

* Product Page: https://www.creative-tim.com/product/material-dashboard-react
* Copyright 2022 Creative Tim (https://www.creative-tim.com)

Coded by www.creative-tim.com

 =========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/

// @mui material components
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";

// Material Dashboard 2 React components
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";

// Material Dashboard 2 React example components
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import Footer from "examples/Footer";
import DataTable from "examples/Tables/DataTable";
import Projects from "layouts/dashboard/components/Projects";
// Data
import authorsTableData from "layouts/tables/data/authorsTableData";
import projectsTableData from "layouts/tables/data/projectsTableData";

import MUIDataTable from "mui-datatables";
import { createTheme, ThemeProvider } from '@mui/material/styles';
function Tables() {
  const { columns, rows } = authorsTableData();
  const { columns: pColumns, rows: pRows } = projectsTableData();

  const column = ["Name", "Title", "Location"];

  const data = [
    ["Gabby George", "Business Analyst", "Minneapolis"],
    [
      "Aiden Lloyd",
      "Business Consultant",
      "Dallas"
    ],
    ["Jaden Collins", "Attorney", "Santa Ana"],
    ["Franky Rees", "Business Analyst", "St. Petersburg"],
    ["Aaren Rose", null, "Toledo"],
    ["Johnny Jones", "Business Analyst", "St. Petersburg"],
    ["Jimmy Johns", "Business Analyst", "Baltimore"],
    ["Jack Jackson", "Business Analyst", "El Paso"],
    ["Joe Jones", "Computer Programmer", "El Paso"],
    ["Jacky Jackson", "Business Consultant", "Baltimore"],
    ["Jo Jo", "Software Developer", "Washington DC"],
    ["Donna Marie", "Business Manager", "Annapolis"]
  ];

  const options = {
    filter: true,
    filterType: "dropdown",
    responsive : "vertical",
    tableBodyHeight : "400px",
    tableBodyMaxHeight: ""
  };

  const theme = createTheme({
    components: {
      // Name of the component
      MUIDataTable: {
        defaultProps: {
          // The props to change the default for.
          disableRipple: true, // No more ripple, on the whole application 💣!
        },
      },
    },
  });
  

  return (
    <>
    <DashboardLayout>
      <DashboardNavbar />
      <MDBox pt={6} pb={3}>
        <Grid container spacing={6}>
        <Grid item xs={12}>
            <Card>
              <MDBox
                mx={2}
                mt={-3}
                py={3}
                px={2}
                variant="gradient"
                bgColor="info"
                borderRadius="lg"
                coloredShadow="info"
              >
                <MDTypography variant="h6" color="white">
                  Estado
                </MDTypography>
              </MDBox>
              <MDBox pt={3}>
              <Projects />
              </MDBox>
            </Card>
          </Grid>
          <Grid item xs={12}>
            <Card>
              <MDBox
                mx={2}
                mt={-3}
                py={3}
                px={2}
                variant="gradient"
                bgColor="info"
                borderRadius="lg"
                coloredShadow="info"
              >
                <MDTypography variant="h6" color="white">
                  Authors Table
                </MDTypography>
                <ThemeProvider theme={theme}>
  

                <MUIDataTable
                data={data}
                columns={column}
                options={options}
                />
                </ThemeProvider>
              </MDBox>
              
            </Card>
            
          </Grid>
         
        </Grid>
      </MDBox>
      
      <Footer />
    </DashboardLayout>
  
    </>
  );
}

export default Tables;