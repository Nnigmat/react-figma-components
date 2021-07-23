import { FC, createElement } from "react";
import cn from "classnames";

import { TitleProps } from "../index";

const Title: FC<TitleProps> = ({
  className,
  children,
  level = "h1",
  size,
  weight,
}) => {
  const sizeClass = size && `type--${size}`;
  const weightClass = weight && `type--${weight}`;

  return createElement(level, {
    props: {
      className: cn("section-title", sizeClass, weightClass, className),
    },
    children,
  });
};

export default Title;
