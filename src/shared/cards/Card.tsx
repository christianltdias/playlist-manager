import FlexCol from "../layout/flex/flex-col/FlexCol";
import FlexRow from "../layout/flex/flex-row/FlexRow";
import "./Card.scoped.scss";

interface ICardProps {
  children?: React.ReactNode,
  title?: string,
  titleStyle?: React.CSSProperties,
  headerElement?: React.ReactNode,
  footer?: React.ReactNode,
}

const Card: React.FC<ICardProps> = (
  { 
    children, 
    title, 
    titleStyle, 
    headerElement, 
    footer,
   }) => {

  let header = null;

  if(title || headerElement) {
    header = 
    <FlexRow
      className="card-header"
      justify="space-between"
    >
      { title && 
        <h4 
          className="card-title"
          style={titleStyle}
        >
          {title}
        </h4>
      }
      {headerElement}
    </FlexRow>
  }

  let footerElement = null;

  if(footer) {
    footerElement = (
      <div className="card-footer">
        {footer}
      </div>
    )
  }

  return (
    <FlexCol className="card">
      {header}
      {children && 
        <div className="card-content">
          {children}
        </div>
      }
      {footerElement}
    </FlexCol>);
};

export default Card;
