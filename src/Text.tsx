import React from "react";
import cn from "classnames";

import { TextProps } from "../index";

const Text: React.FunctionComponent<TextProps> = ({
  className,
  children,
  size,
  weight,
}) => {
  const sizeClass = size && `type--${size}`;
  const weightClass = weight && `type--${weight}`;

  return (
    <p className={cn("type", sizeClass, weightClass, className)}>{children}</p>
  );
};

export default Text;
