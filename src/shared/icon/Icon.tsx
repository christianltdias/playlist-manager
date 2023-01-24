import FlexRow from "../layout/flex/flex-row/FlexRow";
import Text from "../texts/text/Text";
import "./Icon.scoped.scss";

interface IIconProps {
  children?: React.ReactNode,
  color?: 'primary' | 'secondary' | 'white' | 'error',
  text?: string,
}

const Icon: React.FC<IIconProps> = (
  {
    children,
    color = 'primary',
    text,
  }
) => {
  return (
    <FlexRow className={`icon ${color}`}>
      {children}
      { text &&
        <Text>
          {text}
        </Text>
      }
    </FlexRow>
  )
}

export default Icon;