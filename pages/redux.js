import { createStore } from "redux";
import { Provider, useDispatch, useSelector } from "react-redux";

const INCREMENT = "INCREMENT";

// additional logic can be used here. A switch statement is not required.
const counterReducer = (state = { value: 0 }, action) => {
  switch (action.type) {
    case INCREMENT:
      return { value: state.value + 1 };
    default:
      return state;
  }
};

// sends and action to our reducer
const incrementCounter = () => {
  return {
    type: INCREMENT,
  };
};

// A redux store to maintain state in your app.
let store = createStore(counterReducer);

const ReduxProvider = () => {
  return (
    <Provider store={store}>
      <Home />
    </Provider>
  );
};

const Home = () => {
  // get state from useSelector hook
  const counter = useSelector((state) => state.value);

  // dispatches actions with useDispatch hook
  const dispatch = useDispatch();
  const increment = () => dispatch(incrementCounter());

  return (
    <div className="container">
      <h1>{`Counter: ${counter}`}</h1>
      <button className="counterBtn" onClick={increment}>
        Increment Counter
      </button>
    </div>
  );
};

export default ReduxProvider;
