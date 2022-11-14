/* eslint-disable react/prop-types */
/* eslint-disable react/function-component-definition */
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
import Tooltip from "@mui/material/Tooltip";
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";
import MDAvatar from "components/MDAvatar";
import MDProgress from "components/MDProgress";

// Images
import logoXD from "assets/images/small-logos/logo-xd.svg";
import logoAtlassian from "assets/images/small-logos/logo-atlassian.svg";
import logoSlack from "assets/images/small-logos/logo-slack.svg";
import logoSpotify from "assets/images/small-logos/logo-spotify.svg";
import logoJira from "assets/images/small-logos/logo-jira.svg";
import logoInvesion from "assets/images/small-logos/logo-invision.svg";
import team1 from "assets/images/team-1.jpg";
import team2 from "assets/images/team-2.jpg";
import team3 from "assets/images/team-3.jpg";
import team4 from "assets/images/team-4.jpg";

export default function data() {
  const avatars = (members) =>
    members.map(([image, name]) => (
      <Tooltip key={name} title={name} placeholder="bottom">
        <MDAvatar
          src={image}
          alt="name"
          size="lg"
          sx={{
            border: ({ borders: { borderWidth }, palette: { white } }) =>
              `${borderWidth[2]} solid ${white.main}`,
            cursor: "pointer",
            position: "relative",

            "&:not(:first-of-type)": {
              ml: -1.25,
            },

            "&:hover, &:focus": {
              zIndex: "10",
            },
          }}
        />
      </Tooltip>
    ));

  const Company = ({ image, name }) => (
    <MDBox display="flex" alignItems="center" lineHeight={1}>
      <MDAvatar src={image} name={name} size="sm" />
      <MDTypography variant="button" fontWeight="medium" ml={1} lineHeight={1}>
        {name}
      </MDTypography>
    </MDBox>
  );

  return {
    columns: [
      { Header: "Empleado", accessor: "companies", width: "20%", align: "left" },
      { Header: "Estado", accessor: "budget", align: "center" },
      { Header: "Horas", accessor: "completion", align: "center" },
    ],

    rows: [
      {
        companies: <Company image={team2} name="Eduardo" />,
        budget: (
          <MDTypography variant="caption" color="text" fontWeight="medium">
            Trabajando
          </MDTypography>
        ),
        completion: (
          <MDBox width="8rem" textAlign="left">
             <MDTypography variant="caption" color="text" fontWeight="medium">
              5 horas
              </MDTypography>
            <MDProgress value={60} color="info" variant="gradient" label={false} />
          </MDBox>
        ),
      },
      {
        companies: <Company image={team1} name="Lucrecia" />,
        budget: (
          <MDTypography variant="caption" color="text" fontWeight="medium">
            Trabajando
          </MDTypography>
        ),
        completion: (
          <MDBox width="8rem" textAlign="left">
             <MDTypography variant="caption" color="text" fontWeight="medium">
              3 horas
              </MDTypography>
            <MDProgress value={30} color="info" variant="gradient" label={false} />
          </MDBox>
        ),
      },
      {
        companies: <Company image={team3} name="Maria" />,
        budget: (
          <MDTypography variant="caption" color="text" fontWeight="medium">
            NO Presente
          </MDTypography>
        ),
        completion: (
          <MDBox width="8rem" textAlign="left">
             <MDTypography variant="caption" color="text" fontWeight="medium">
              0 horas
              </MDTypography>
            <MDProgress value={100} color="warning" variant="gradient" label={false} />
          </MDBox>
        ),
      },
      {
        companies: <Company image={team4} name="Juan Cruz" />,
        budget: (
          <MDTypography variant="caption" color="text" fontWeight="medium">
            Trabajando
          </MDTypography>
        ),
        completion: (
          <MDBox width="8rem" textAlign="left">
             <MDTypography variant="caption" color="text" fontWeight="medium">
              8 horas
              </MDTypography>
            <MDProgress value={90} color="info" variant="gradient" label={false} />
          </MDBox>
        ),
      },
    ],
  };
}
