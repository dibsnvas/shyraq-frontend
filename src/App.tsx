import Header from "./components/Header";  // Ensure the path is correct based on your project structure
import HomePage from "./Page/HomePage";
import Body from './components/Body';
import { Analytics } from '@vercel/analytics/react';
import Footer from "./components/Footer";
import InfoBlock from "./components/InfoBlock";

const App = () => {
  return (
    <div>
      <Header />
      <main className="mt-16">
        <HomePage />
        <Body />
      </main>
      <InfoBlock />
      <Footer />
      <Analytics />
    </div>
  );
};

export default App;
