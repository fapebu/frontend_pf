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
import Card from "@mui/material/Card";
import Icon from "@mui/material/Icon";

// Material Dashboard 2 React components
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";

// Material Dashboard 2 React example components
import TimelineItem from "examples/Timeline/TimelineItem";

import { useState,useEffect } from "react";
import axios from "axios";

function OrdersOverview() {


  const urlNoti = 'http://localhost:3001/notificacion/1'

  const [noti, setNoti] = useState(new Array({color:"primary",info:"none"},{color:"primary",info:"none"},{color:"primary",info:"none"},{color:"primary",info:"none"},{color:"primary",info:"none"}));

  useEffect(() => { //inicializamos la temperatura.
     
    axios.get(urlNoti).then((response) => {
     
     let datasets = [];
                                             
     response.data.forEach(element => {
      const noti = {
                info: element.info,
                color: element.color 
        }
       
        datasets.push(noti);
       });
  
       setNoti(datasets)
  
    })
     
      
    
   }, [])
                                                
 useEffect(() => { //intervalo de temperatura
 
function funcion () {  axios.get(urlNoti).then((response) => {
     
     let datasets = [];
                                             
     response.data.forEach(element => {
      const noti = {
                info: element.info,
                color: element.color 
        }
       
        datasets.push(noti);
       });
  
       setNoti(datasets)
  
    })};
 
   const intervalo = setInterval(funcion,500)
   }, [])
  return (
    <Card sx={{ height: "100%" }}>
      <MDBox pt={3} px={3}>
        <MDTypography variant="h6" fontWeight="medium">
          Ultimas notificaciones
        </MDTypography>
      </MDBox>
      <MDBox p={2}>
        
        
        <TimelineItem
          color={noti[0].color}
          icon="notifications"
          title={noti[0].info}
          dateTime=""
        />
        <TimelineItem
          color={noti[1].color}
          icon="notifications"
          title={noti[1].info}
          dateTime=""
        />
        <TimelineItem
          color={noti[2].color}
          icon="notifications"
          title={noti[2].info}
          dateTime=""
        />
        <TimelineItem
          color={noti[3].color}
          icon="notifications"
          title={noti[3].info}
          dateTime=""
        />
        <TimelineItem
          color={noti[4].color}
          icon="notifications"
          title={noti[4].info}
          dateTime="18 DEC 4:54 AM"
          lastItem
        />
      </MDBox>
    </Card>
  );
}

export default OrdersOverview;
