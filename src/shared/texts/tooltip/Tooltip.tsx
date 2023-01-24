import "./Tooltip.scoped.scss";

interface ITooltipProps {
  children?: React.ReactNode,
}

const Tooltip: React.FC<ITooltipProps> = (
  {
    children
  }
) => {
  return (
    <>
      {children}
    </>
  )
}

export default Tooltip;