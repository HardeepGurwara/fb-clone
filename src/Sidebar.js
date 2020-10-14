import React from "react";
import LocalHospitalIcon from "@material-ui/icons/LocalHospital";
import EmojiFlagsIcon from "@material-ui/icons/EmojiFlags";
import PeopleIcon from "@material-ui/icons/People";
import ChatIcon from "@material-ui/icons/Chat";
import StorefrontIcon from "@material-ui/icons/Storefront";
import VideoLibraryIcon from "@material-ui/icons/VideoLibrary";
import ExpandMoreOutlinedIcon from "@material-ui/icons/ExpandMoreOutlined";
import "./Sidebar.css";

import SidebarRow from "./SidebarRow";
function Sidebar() {
  return (
    <div className="sidebar">
      <SidebarRow
        src="https://avatars3.githubusercontent.com/u/40870043?s=460&u=44e5752ac3097f5f91ce148d0d2d867bfcecd744&v=4"
        title="hardeep"
      />
      <SidebarRow
        Icon={LocalHospitalIcon}
        title="Covid-19 Information center"
      />
      <SidebarRow Icon={EmojiFlagsIcon} title="Pages" />
      <SidebarRow Icon={PeopleIcon} title="Friends" />
      <SidebarRow Icon={ChatIcon} title="Messenger" />
      <SidebarRow Icon={StorefrontIcon} title="Marketplace" />
      <SidebarRow Icon={VideoLibraryIcon} title="Videos" />
      <SidebarRow Icon={ExpandMoreOutlinedIcon} title="Marketplace" />
    </div>
  );
}

export default Sidebar;
