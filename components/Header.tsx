import React, { FC } from "react";
import { Text } from "@ui-kitten/components";

export const Header: FC = ({ children }) => {
  return (
    <Text category="h3" style={{ marginBottom: 16, fontWeight: "bold" }}>
      {children as string}
    </Text>
  );
};
