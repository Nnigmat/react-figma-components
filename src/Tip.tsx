import React from "react";
import cn from "classnames";

import { TipProps } from "../index";
import { Icon } from "./";

const Text: React.FunctionComponent<TipProps> = ({
  className,
  children,
  iconName,
  iconText,
  iconColor,
}) => {
  return (
    <div className={cn("onboarding-tip", className)}>
      {iconName && (
        <div className="onboarding-tip__icon">
          <Icon name={iconName} color={iconColor} text={iconText} />
        </div>
      )}
      <div className="type onboarding-tip__msg">{children}</div>
    </div>
  );
};

export default Text;
