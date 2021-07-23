import React from "react";
import cn from "classnames";

import { LabelProps } from "../index";

const Label: React.FunctionComponent<LabelProps> = ({
  className,
  children,
  size,
  weight,
}) => {
  const sizeClass = size && `type--${size}`;
  const weightClass = weight && `type--${weight}`;

  return (
    <div className={cn("label", sizeClass, weightClass, className)}>
      {children}
    </div>
  );
};

export default Label;
