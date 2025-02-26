import { useSelector } from "react-redux";
import { RootState } from "../../../../store/configStore";
import GroupPannel from "./Group/GroupPannel";
import MyPannel from "./Me/MyContents";

export default function SidePannel() {
  const showPannel = useSelector((s: RootState) => s.ui.sidebar.open);
  const group = useSelector((s: RootState) => s.ui.active.group);

  if (!showPannel) {
    return null;
  } else {
    return (
      <div style={{
        marginTop: "46px",
        marginLeft: "2px",
        background: "aliceblue",
        zIndex: 1
      }} className="sidePannel">
        {group && <GroupPannel />}
        {!group && <MyPannel />}
      </div>
    );
  }
}
