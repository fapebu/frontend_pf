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
  //const { sales, tasks } = reportsLineChartData;
  //useState
  
  const [statusDash, setstatusDash] = useState({"status_puerta": "none",
                                                "status_luz": "none",
                                                "status_movimiento": "none"});

  const [temp, setTemp] = useState(new Object());
  const [fecha, setFecha] = useState(new Object());

  const [mono,setMono] = useState(new Object());

  
  const [fechaRt, setFechaRt] = useState(new Object());
 
  var time = 5000;
  const urlTemp = 'http://localhost:3001/temperatura/11'
  const urlMono = 'http://localhost:3001/monoxido/5'
  const urlRTime = 'http://localhost:3001/realtime/11'
  
  useEffect(() => { //inicializamos la temperatura.
     
     axios.get(urlTemp).then((response) => {
      let label = [];
      let datasets = [];
                                              
      response.data.forEach(element => {
        label.push(element.hora)
        datasets.push(element.temp)
        });
   
   
   
   const sales = {
                  labels: label,
                  datasets: { 
                              label: "Temperatura", 
                              data: datasets 
                            },
                  }
      setTemp(sales);
      const date = new Date(); //tomamos la fecha actual
      let minutes = 0;
      if(date.getMinutes()< 10){
           minutes = "0" + date.getMinutes();
        }
      else{ 
           minutes = date.getMinutes()
        }
                                                 
      
      const dateNow = {
        "hora" : date.getHours(),
        "minutos" : minutes,
        }
        
        setFecha(dateNow)
                      }) 
     
    }, [])
                                                 
  useEffect(() => { //intervalo de temperatura
  
 function funcion () { axios.get(urlTemp).then((response) => {
   let label = [];
   let datasets = [];
                                              
   response.data.forEach(element => {
     label.push(element.hora)
     datasets.push(element.temp)
     });

const sales = {
               labels: label,
               datasets: { 
                           label: "Temperatura", 
                           data: datasets 
                         },
               }
      setTemp(sales);
                                              
   const date = new Date(); //tomamos la fecha actual
   let minutes = 0;
   if(date.getMinutes()< 10){
        minutes = "0" + date.getMinutes();
     }
   else{ 
        minutes = date.getMinutes()
     }
                                              
   
   const dateNow = {
     "hora" : date.getHours(),
     "minutos" : minutes,
     }
    
     setFecha(dateNow)
                                              
                   })};
  
    const intervalo = setInterval(funcion,time)
    }, [])

    useEffect(() => { //inicializamos las ppm.
     
      axios.get(urlMono).then((response) => {
       let label = [];
       let datasets = [];
                                               
       response.data.forEach(element => {
         label.push(element.hora)
         datasets.push(element.ppm)
         });
    
    
    
    const task = {
                   labels: label,
                   datasets: { 
                               label: "Temperatura", 
                               data: datasets 
                             },
                   }
       setMono(task);
       const date = new Date(); //tomamos la fecha actual
       let minutes = 0;
       if(date.getMinutes()< 10){
            minutes = "0" + date.getMinutes();
         }
       else{ 
            minutes = date.getMinutes()
         }
                                                  
       
       const dateNow = {
         "hora" : date.getHours(),
         "minutos" : minutes,
         }
         
         setFecha(dateNow)
                       }) 
      
     }, [])
                                                  
   useEffect(() => { //intervalo de ppm
   
  function funcion () { axios.get(urlMono).then((response) => {
    let label = [];
    let datasets = [];
                                               
    response.data.forEach(element => {
      label.push(element.hora)
      datasets.push(element.ppm)
      });
 
 const task = {
                labels: label,
                datasets: { 
                            label: "Temperatura", 
                            data: datasets 
                          },
                }
    setMono(task);
                                               
    const date = new Date(); //tomamos la fecha actual
    let minutes = 0;
    if(date.getMinutes()< 10){
         minutes = "0" + date.getMinutes();
      }
    else{ 
         minutes = date.getMinutes()
      }
                                               
    
    const dateNow = {
      "hora" : date.getHours(),
      "minutos" : minutes,
      }
     
      setFecha(dateNow)
                                               
                    })};
   
     const intervalo = setInterval(funcion,time)
     }, [])

     useEffect(() => { //inicializamos los datos en tiempo real.
     
      axios.get(urlRTime).then((response) => {
        
        setstatusDash(response.data)
       
       const date = new Date(); //tomamos la fecha actual
       let minutes = 0;
       if(date.getMinutes()< 10){
            minutes = "0" + date.getMinutes();
         }
       else{ 
            minutes = date.getMinutes()
         }
                                                  
       
       const dateNow = {
         "hora" : date.getHours(),
         "minutos" : minutes,
         }
         
         setFechaRt(dateNow)
                       }) 
      
     }, [])
                                                  
   useEffect(() => { //intervalo de tiempo real
   
  function funcion () { axios.get(urlRTime).then((response) => {
    setstatusDash(response.data)
                                               
    const date = new Date(); //tomamos la fecha actual
    let minutes = 0;
    if(date.getMinutes()< 10){
         minutes = "0" + date.getMinutes();
      }
    else{ 
         minutes = date.getMinutes()
      }
                                               
    
    const dateNow = {
      "hora" : date.getHours(),
      "minutos" : minutes,
      }
     
      setFechaRt(dateNow)
                                               
                    })};
   
     const intervalo = setInterval(funcion,time)
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
                count={statusDash.status_puerta}
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
                count={statusDash.status_luz}
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
                count={statusDash.status_movimiento}
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
                    
                    </>
                  }
                  date={"Actualizado "+ fecha.hora+":"+fecha.minutos}
                  chart={temp}
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
                    
                    </>
                  }
                  date={"Actualizado "+ fecha.hora+":"+fecha.minutos}
                  chart={mono}
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
