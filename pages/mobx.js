import { makeAutoObservable } from "mobx";
import { observer } from "mobx-react-lite";

class Counter {
  value = 10;

  constructor() {
    makeAutoObservable(this);
  }

  increment() {
    this.value += 1;
  }
}

const myCounter = new Counter();

const HomeView = () => <Home counter={myCounter} />;

const Home = observer(({ counter }) => {
  return (
    <div className="container">
      <h1>{`Counter: ${counter.value}`}</h1>
      <button className="counterBtn" onClick={() => counter.increment()}>
        Increment Counter
      </button>
    </div>
  );
});

export default HomeView;
