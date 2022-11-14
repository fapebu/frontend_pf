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

// Material Dashboard 2 React components
import MDBox from "components/MDBox";

// Material Dashboard 2 React example components
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import Footer from "examples/Footer";
import MDAlert from "components/MDAlert";
import ReportsBarChart from "examples/Charts/BarCharts/ReportsBarChart";
import ReportsLineChart from "examples/Charts/LineCharts/ReportsLineChart";
import ComplexStatisticsCard from "examples/Cards/StatisticsCards/ComplexStatisticsCard";

//icons 
import MeetingRoomRoundedIcon from '@mui/icons-material/MeetingRoomRounded';
import LightbulbIcon from '@mui/icons-material/Lightbulb';

// Data
import reportsBarChartData from "layouts/dashboard/data/reportsBarChartData";
import reportsLineChartData from "layouts/dashboard/data/reportsLineChartData";

// Dashboard components
import Projects from "layouts/dashboard/components/Projects";
import OrdersOverview from "layouts/dashboard/components/OrdersOverview";
import AccessibilityNewIcon from '@mui/icons-material/AccessibilityNew';

import { useState,useEffect } from "react";
import axios from "axios";

function Dashboard() {
  const { sales, tasks } = reportsLineChartData;
  //useState
  const [data, setData] = useState([""]);

  useEffect(async function getdata(){
    const response = await axios.get('http://localhost:3001/aperturaPuerta/13/');
    console.log(response);
    setData(response.data);
  }, [])



  return (
    <DashboardLayout>
      <DashboardNavbar />
      <MDBox py={3}>
        <Grid container spacing={3}>
          <Grid item xs={12} md={6} lg={4}>
            <MDBox mb={1.5}>
              <ComplexStatisticsCard
                color="dark"
                icon = <MeetingRoomRoundedIcon fontSize="large"/>
                title="Estado de Puerta"
                count="Abierta"
                percentage={{
                  color: "success",
                  amount: "2",
                  label: "min ",
                }}
              />
            </MDBox>
          </Grid>
          <Grid item xs={12} md={6} lg={4}>
            <MDBox mb={1.5}>
              <ComplexStatisticsCard
                icon = <LightbulbIcon fontSize="large"/>
                title="Estado Luces"
                count="Apagada"
                percentage={{
                  color: "success",
                  amount: "2",
                  label: "min",
                }}
              />
            </MDBox>
          </Grid>
            <Grid item xs={12} md={6} lg={4}>
            <MDBox mb={1.5}>
              <ComplexStatisticsCard
                color="primary"
                icon= <AccessibilityNewIcon fontSize="large"/>
                title="Movimiento"
                count="No"
                percentage={{
                  color: "success",
                  amount: "2",
                  label: "min",
                }}
              />
            </MDBox>
          </Grid>
        </Grid>
        <MDBox mt={4.5}>
          <Grid container spacing={2}>
            
            <Grid item xs={12} md={6} lg={6}>
              <MDBox mb={3}>
                <ReportsLineChart
                  color="success"
                  title="Temperatura"
                  description={
                    <>
                    
                     Ultimo valor leido: <strong> {data[0].status} grados</strong> .
              
                    </>
                  }
                  date="Actualizado hace 2 min"
                  chart={sales}
                />
              </MDBox>
            </Grid>
            <Grid item xs={12} md={6} lg={6}>
              <MDBox mb={3}>
                <ReportsLineChart
                  color="info"
                  title="Monoxido de carbono"
                  description={
                    <>
                     Ultimo valor leido: <strong>100 ppm</strong> .
                    </>
                  }
                  date="Actualizado hace 2 min"
                  chart={tasks}
                />
              </MDBox>
            </Grid>
          </Grid>
        </MDBox>
        <MDBox>
          <Grid container spacing={3}>
 
            <Grid item xs={12} md={6} lg={6}>
              <OrdersOverview />
            </Grid>
          </Grid>
        </MDBox>
      </MDBox>
      <Footer />
    </DashboardLayout>
  );
}

export default Dashboard;
