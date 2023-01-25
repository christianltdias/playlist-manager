import Page from "../../../shared/page/Page";
import background from "../../../assets/images/home-background.jpg";
import FlexCol from "../../../shared/layout/flex/flex-col/FlexCol";
import "./Home.scoped.scss";

const Home: React.FC = () => {
  return (
    <Page>
      <FlexCol className="home-wrapper">
        <div className="home-img-wrapper">
          <img src={background} alt="backround" className="home-img" />
        </div>
        <div className="home-content">
          <p>Content</p>
        </div>
      </FlexCol>
    </Page>
  );
};

export default Home;
