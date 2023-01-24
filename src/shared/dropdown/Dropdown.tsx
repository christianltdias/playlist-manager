import { useRef, useState } from "react";
import FlexRow from "../layout/flex/flex-row/FlexRow";
import "./Dropdown.scoped.scss";

interface IDropdownProps {
  icon?: React.ReactNode;
  children?: React.ReactNode;
  items?: IDropdownItem[];
  type?: "primary" | "secondary" | "tertiary" | "red" | "nav";
  isDisabled?: boolean;
}

export interface IDropdownItem {
  icon?: React.ReactNode;
  text?: string;
  onClick: () => void;
}

const Dropdown: React.FC<IDropdownProps> = ({
  icon,
  children,
  items,
  type = "primary",
  isDisabled,
}) => {
  const [display, setDisplay] = useState<"none" | "block">("none");
  const childRef = useRef<HTMLDivElement>(null);
  const parentRef = useRef<HTMLDivElement>(null);

  const setChildPosition: () => void = () => {
    if(parentRef.current && childRef.current){
      const topValue = parentRef.current.clientHeight.toString();
      childRef.current.style.top = topValue + "px";
    }
  }

  const changeDisplay: () => void = () => {
    if(!isDisabled) {
      if (display === "none") {
        setChildPosition();
        setDisplay("block");
      } else {
        setDisplay("none");
      }
    }
  };

  const onMouseLeave = () => {
    if (!isDisabled && display === "block") {
      setDisplay("none");
    }
  };

  return (
    <div
      className="dropdown-wrapper" 
      onMouseLeave={() => onMouseLeave()}>
      <FlexRow
        className={`dropdown ${type} ${display === "block" ? "active" : ""} ${isDisabled ? 'disabled' : ''}`}
        align="center"
        wrap="nowrap"
        gap={false}
        onClick={() => changeDisplay()}
        ref={parentRef}
      >
        <div className="dropdown-text">{children}</div>
        <div className="dropdown-arrow">⯆</div>
        {items && (
          <div className="dropdown-content" style={{ display: display }} ref={childRef}>
            {items.map((item) => (
              <div className={`content-item ${type}`} onClick={item.onClick} key={item.text}>
                {item.text}
              </div>
            ))}
          </div>
        )}
      </FlexRow>
    </div>
  );
};

export default Dropdown;
