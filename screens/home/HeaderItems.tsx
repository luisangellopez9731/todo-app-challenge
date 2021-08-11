import React from "react";
import { Ionicons } from "@expo/vector-icons";
import { Item } from "react-navigation-header-buttons";
import { HeaderButtons, HeaderButton } from "react-navigation-header-buttons";

export const IoniconsHeaderButton = (props) => (
  <HeaderButton IconComponent={Ionicons} iconSize={23} {...props} />
);

export const HeaderItems = () => {
  return (
    <>
      <HeaderButtons HeaderButtonComponent={IoniconsHeaderButton}>
        <Item
          title="search"
          iconName="ios-search"
          onPress={() => alert("search")}
        />
        <Item
          title="Notifications"
          iconName="notifications-outline"
          onPress={() => alert("Notifications")}
        />
        <Item
          title="Menu"
          iconName="menu-outline"
          onPress={() => alert("Menu")}
        />
      </HeaderButtons>
    </>
  );
};
