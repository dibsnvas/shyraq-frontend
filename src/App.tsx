import Header from "./components/Header";  // Ensure the path is correct based on your project structure
import HomePage from "./Page/HomePage";
import Body from './components/Body'
import Footer from "./components/Footer";

const App = () => {
  return (
    <div>
      <Header />
      <HomePage />
      <Body />
      <Footer/>
    </div>
  );
};

export default App;
