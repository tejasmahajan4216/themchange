import * as React from "react";

import {
  Drawer,
  DrawerContent,
  DrawerSelectEvent,
} from "@progress/kendo-react-layout";
import { Button } from "@progress/kendo-react-buttons";

const items = [
  { text: "Inbox", icon: "k-i-inbox", selected: true, route: "/" },
  { separator: true },
  { text: "Homepage", icon: "k-i-bell", route: "/notifications" },
  { text: "Calendar", icon: "k-i-calendar", route: "/calendar" },
  { separator: true },
  { text: "Attachments", icon: "k-i-hyperlink-email", route: "/attachments" },
  { text: "Favourites", icon: "k-i-star-outline", route: "/favourites" },
];

const DrawerRouterContainer = (props: {
  history: any[];
  location: { pathname: string };
  children: any;
}) => {
  const [expanded, setExpanded] = React.useState(true);

  const handleClick = () => {
    setExpanded(!expanded);
  };

  const onSelect = (e: DrawerSelectEvent) => {
    props.history.push(e.itemTarget.props.route);
    setExpanded(!expanded);
  };

  const setSelectedItem = (pathName: string) => {
    let currentPath: any = items.find((item) => item.route === pathName);
    if (currentPath.text) {
      return currentPath.text;
    }
  };
  let selected = setSelectedItem(props.location.pathname);

  return (
    <div>
      <div className="custom-toolbar">
        <Button icon="menu" fillMode="flat" onClick={handleClick} />
        <span className="mail-box">Mail Box</span>
      </div>
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
        <DrawerContent>{props.children}</DrawerContent>
      </Drawer>
    </div>
  );
};

export default DrawerRouterContainer;
