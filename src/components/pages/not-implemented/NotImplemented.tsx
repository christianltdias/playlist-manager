import Card from "../../../shared/cards/Card";
import Page from "../../../shared/page/Page";
import "./NotImplemented.scoped.scss";

const NotImplemented: React.FC = () => {
  return (
    <Page
      name="Not implemented yet!"
      showHeader={false}
    >
      <Card>
        Not implemented yet!
      </Card>
    </Page>
  )
}


export default NotImplemented;