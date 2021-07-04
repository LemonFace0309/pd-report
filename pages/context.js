import { useState, createContext, useContext } from "react";

const BtnContext = createContext();

const BtnProvider = () => {
	const [counter, setCounter] = useState(0);
  return (
	<BtnContext.Provider value={{ counter, setCounter }}>
	  <Home />
	</BtnContext.Provider>
  );
};

const Home = () => {
	const { counter, setCounter } = useContext(BtnContext);
  return (
	<div className="container">
	  <h1>{`Counter: ${counter}`}</h1>
	  <button className="counterBtn" onClick={() => setCounter(prev => prev + 1)}>Increment Counter</button>
	</div>
  );
};

export default BtnProvider;
