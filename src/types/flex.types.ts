export interface IFlexProps extends IFlexChildProps {
  direction?:  'row' | 'row-reverse' | 'column' | 'column-reverse',
}

export interface IFlexChildProps {
  children: React.ReactNode,
  wrap?: "nowrap" | "wrap" | "wrap-reverse",
  justify?:
    | "flex-start"
    | "flex-end"
    | "center"
    | "space-between"
    | "space-around"
    | "space-evenly"
    | "start"
    | "end"
    | "left"
    | "right",
  align?:
    | "stretch"
    | "flex-start"
    | "flex-end"
    | "center"
    | "baseline"
    | "first baseline"
    | "last baseline"
    | "start"
    | "end"
    | "self-start",
  className?: string,
  gap?: boolean,
  onClick?: () => void,
}