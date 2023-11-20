import { Box } from "@mui/material";
import SidebarIcons from "./Icons/SideBarIcons";
import SidePannel from "./Pannel/SidePannel";

export default function Sidebar() {
  // Group list, subgroup, channels
  return (
    <Box
      sx={{
        maxWidth: "60px",
        height: "100vh",
        display: "flex",
        flexDirection: "row",
        background: "aliceblue",
      }}
    >
      <SidebarIcons />
      <SidePannel />
    </Box>
  );
}
