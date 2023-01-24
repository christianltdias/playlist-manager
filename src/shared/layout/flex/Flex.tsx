import React from "react";
import { IFlexProps } from "../../../types/flex.types";
import "./Flex.scoped.scss";

const Flex= React.forwardRef<HTMLDivElement, IFlexProps>((props, ref) => {

  const {
    children,
    wrap = 'wrap',
    justify,
    align,
    className,
    direction,
    gap,
    onClick,
  } = props;

  const style = {
    flexDirection: direction,
    flexWrap: wrap,
    justifyContent: justify,
    alignItems: align,
  };

  return (
    <div 
      className={`flex ${className ?? ""} ${gap ? 'gap' : 'no-gap'}`}
      style={style}
      onClick={onClick}
      ref={ref}>
      {children}
    </div>
  );
})

export default Flex;