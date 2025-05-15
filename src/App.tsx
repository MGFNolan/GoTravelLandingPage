// page
import Header from "./components/Header";
import Navigation from "./components/Navigation/Navigation";
import Hero from "./components/Hero/Hero";

// header
import Page from "./components/page";

function App() {
  return (
    <Page>
      <Header>
        <Navigation />
        <Hero />
      </Header>
    </Page>
  );
}

export default App;
