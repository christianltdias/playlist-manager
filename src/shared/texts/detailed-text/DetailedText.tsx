import "./DetailedText.scoped.scss";
import Text from "../text/Text";
import Tooltip from "../tooltip/Tooltip";

interface IDetailedTextProps {
  children?: React.ReactNode,
}

const DetailedText: React.FC<IDetailedTextProps> = (
  {
    children,
  }
) => {
  return (
    <Tooltip>
      <Text>
        {children}
      </Text>
    </Tooltip>
  );
}

export default DetailedText;