import './App.css';
import AuthProvider from "./helpers/auth";
import RelPowerLayout from "./components/Layouts/relPowerLayout";

function App() {
  return (
      <AuthProvider>
    <div className="App">
      <header className="App-header">
        <RelPowerLayout/>
      </header>
    </div>
      </AuthProvider>
  );
}

export default App;
