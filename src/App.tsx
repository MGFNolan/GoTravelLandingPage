import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

// page
import Header from "./components/Header";
import Navigation from "./components/Navigation/Navigation";
import Hero from "./components/Hero/Hero";

// header
import Page from "./components/page";

// main
import Main from "./components/Main";
import Steps from "./components/Steps/Steps";
import Services from "./components/Services/Services";
import News from "./components/News/News";
import ExploreMore from "./components/ExploreMore/ExploreMore";
import FrequentTraveller from "./components/FrequentTraveller";
import Testimonials from "./components/Testimonials/Testimonials";

// footer
import Footer from "./components/Footer";

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Page>
        <Header>
          <Navigation />
          <Hero />
        </Header>

        <Main>
          <Steps />
          <Services />
          <News />
          <ExploreMore />
          <FrequentTraveller />
          <Testimonials />
        </Main>

        <Footer />
      </Page>

      <ReactQueryDevtools />
    </QueryClientProvider>
  );
}

export default App;
