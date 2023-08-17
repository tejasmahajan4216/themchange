import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import {
  Drawer,
  DrawerContent,
  DrawerSelectEvent,
} from "@progress/kendo-react-layout";
import "./Drawer.scss";

const items = [
  { text: "Inbox", icon: "k-i-inbox", selected: true, route: "/inbox" },
  { separator: true },
  { text: "Homepage", icon: "k-i-bell", route: "/homepage" },
];

const DrawerRouterContainer = (props: any) => {
  const { children } = props;
  const [expanded, setExpanded] = useState(true);
  const location = useLocation();
  const navigate = useNavigate();
  const onSelect = (e: DrawerSelectEvent) => {
    navigate(e.itemTarget.props.route);
    setExpanded(!expanded);
  };

  const setSelectedItem = (pathName: string) => {
    const currentPath: any = items.find((item) => item.route === pathName);
    if (currentPath && currentPath.text) {
      return currentPath.text;
    }
  };
  const selected = setSelectedItem(location.pathname);

  return (
    <div>
      <Drawer
        expanded={expanded}
        position={"start"}
        mode={"push"}
        mini={true}
        items={items.map((item) => ({
          ...item,
          selected: item.text === selected,
        }))}
        onSelect={onSelect}
      >
        <DrawerContent>{children}</DrawerContent>
      </Drawer>
    </div>
  );
};

export default DrawerRouterContainer;
