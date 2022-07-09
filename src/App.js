import { AdvancedStatistics } from "./components/AdvancedStatistics";
import { BoostLinks } from "./components/BoostLinks";
import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
import { URLShorten } from "./components/URLShorten";
function App() {
  return (
    <div className="App">
      <Header/>
      <Hero/>
      <URLShorten/>
      <AdvancedStatistics/>
    <BoostLinks/>
    </div>
  );
}

export default App;
