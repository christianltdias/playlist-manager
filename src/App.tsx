import "./App.scoped.scss";
import Header from "./components/header/Header";
import Routing from "./routes/Routing";

function App() {
  return (
    <>
      <Header/>
      <div className="content">
        <Routing />
      </div>
    </>
  );
}

export default App;
