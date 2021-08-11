import React, { FC } from "react";

import { Button as ButtonKitten, ButtonProps } from "@ui-kitten/components";

const style = {
  marginHorizontal: 20,
  backgroundColor: "#25c06d",
  borderColor: "#25c06d",
  borderRadius: 12,
};

export const Button: FC<ButtonProps> = (props) => {
  return (
    <ButtonKitten style={style} {...props}>
      {props.children}
    </ButtonKitten>
  );
};
