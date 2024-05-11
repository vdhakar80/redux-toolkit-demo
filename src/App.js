import logo from "./logo.svg";
import "./App.css";
import SamosaComponent from "./App/features/samosa/SamosaComponent";
import { Provider } from "react-redux";
import store from "./App/store";
import ColddrinkComponent from "./App/features/coldDrink/ColddrinkComponent";
import UserComponent from "./App/features/users/UserComponent";

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <header className="App-header">
          <SamosaComponent />
          <ColddrinkComponent />
          <UserComponent />
        </header>
      </div>
    </Provider>
  );
}

export default App;
