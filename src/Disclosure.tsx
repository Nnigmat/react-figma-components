import React, { useState } from "react";
import cn from "classnames";

import { DisclosureProps } from "../index";

const Disclosure: React.FunctionComponent<DisclosureProps> = ({
  defaultExpanded,
  className,
  label,
  children,
  section,
  onExpand,
}) => {
  const [isExpanded, onExpandedStateChange] = useState(
    Boolean(defaultExpanded)
  );
  const toggleExapndState = () => {
    onExpand?.(!isExpanded);
    onExpandedStateChange(!isExpanded);
  };

  const labelClass = section ? "disclosure--section" : "";
  const expandClass = isExpanded ? "disclosure--expanded" : "";

  return (
    <div className={cn("disclosure", className)}>
      <div className={cn("disclosure__item", expandClass)}>
        <div
          className={cn("disclosure__label", labelClass)}
          onClick={toggleExapndState}
        >
          {label}
        </div>
        <div className="disclosure__content">{children}</div>
      </div>
    </div>
  );
};

export default Disclosure;
