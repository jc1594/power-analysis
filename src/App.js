import './App.css';
import AuthProvider from "./helpers/auth/auth";
import RelPowerLayout from "./components/Layouts/RelPowerLayout";

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
