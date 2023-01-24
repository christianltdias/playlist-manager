import React from "react";
import { IFlexChildProps } from "../../../../types/flex.types";
import Flex from "../Flex";

const FlexCol = React.forwardRef<HTMLDivElement, IFlexChildProps>((props, ref) => {
  const {
    children,
    wrap = 'wrap',
    justify,
    align,
    className,
    gap,
    onClick,
  } = props;
  
  return (
    <Flex
      direction="column"
      wrap={wrap}
      justify={justify}
      align={align}
      className={className}
      gap={gap}
      onClick={onClick}
      ref={ref}
    >
      {children}
    </Flex>
  );
});

export default FlexCol;
