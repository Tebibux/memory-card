import React, {useState} from 'react'
import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";
import Main from "./components/main/Main";

function App() {
	const [started, setStarted] = useState(true);
  const handleStarted = (value) => {
		setStarted(value);
	}
  return (
    <div className="container">
      <Header />
      <Main onStart={started} gameStarter={handleStarted}/>
      <Footer />
    </div>
  );
}

export default App;
