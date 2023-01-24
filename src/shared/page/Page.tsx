import FlexRow from "../layout/flex/flex-row/FlexRow";
import Text from "../texts/text/Text";
import "./Page.scoped.scss";

interface IPageProps {
  name?: string,
  children?: React.ReactNode,
  showHeader?: boolean,
  headerButtons?: IPageHeaderElement[],
}

export interface IPageHeaderElement {
  key: string,
  element: React.ReactNode,
}

const Page: React.FC<IPageProps> = (
  {
    name,
    children,
    headerButtons = [],
    showHeader = false,
  }
) => {
  const mustShowHeader: boolean = showHeader || !!(name || headerButtons.length);
  return (
    <>
      { mustShowHeader && 
        <FlexRow
          className="page-header"
          align="center"
          justify="space-between">
            <Text
              type="heading">
              {name}
            </Text>
            <FlexRow>
              {headerButtons.map(item => item.element)}
            </FlexRow>
          </FlexRow>
      }
      <div className="page-content">
        {children}
      </div>
    </>
  );
}

export default Page;