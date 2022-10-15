import { Provider } from "react-redux";
import "./App.css";
import Home from "./Components/Home";
import { counterStore } from "./Redux/counterStore";

function App() {
  return (
    <Provider store={counterStore}>
      <Home />
    </Provider>
  );
}

export default App;
