import { AdvancedStatistics } from "./components/AdvancedStatistics";
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
    </div>
  );
}

export default App;
