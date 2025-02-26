import { AccountCircle } from "@mui/icons-material";
import { Fab, Tooltip } from "@mui/material";
import { Link } from "react-router-dom";

export default function DashBoardIcon() {
  return (
    <div style={{
      marginBottom: "8px"
    }}>
      <Link to={"/@me/"}>
        <Tooltip title="To My DashBoard">
          <Fab>
            <AccountCircle />
          </Fab>
        </Tooltip>
      </Link>
    </div>
  );
}
