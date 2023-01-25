import Page from "../../../shared/page/Page";
import background from "../../../assets/images/home-background.jpg";
import FlexCol from "../../../shared/layout/flex/flex-col/FlexCol";
import "./Home.scoped.scss";
import FlexRow from "../../../shared/layout/flex/flex-row/FlexRow";
import Button from "../../../shared/buttons/Button";

const Home: React.FC = () => {
  return (
    <Page>
      <FlexCol className="home-wrapper">
        <div className="home-img-wrapper">
          <img src={background} alt="backround" className="home-img" />
          <FlexRow className="home-img-content">
            <FlexCol 
              className="home-img-left"
              align="center"
              justify="center"
              gap>
              <h1>Start sharing on my own Playlist</h1>
              <span>
                You can share your playlist with your friends so they can start contributing with the whole group.
              </span>
              <Button buttonType="nav">Share my playlist</Button>
            </FlexCol>
            <FlexCol 
              className="home-img-right"
              align="center"
              justify="center"
              gap>
              <h1>Start sharing to a friend's Playlist</h1>
              <span>
                You can also start contributing to a friend's playlist, so everybody can start enjoying it together.
              </span>
              <Button buttonType="nav">Contribute to a playlist</Button>
            </FlexCol>
          </FlexRow>
        </div>
        <div className="home-content">
          <p>Content</p>
        </div>
      </FlexCol>
    </Page>
  );
};

export default Home;
