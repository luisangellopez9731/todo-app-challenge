import React, { FC } from "react";
import { Text as BaseText } from "react-native";

export const Text: FC = ({ children }) => {
  return <BaseText>{children}</BaseText>;
};
