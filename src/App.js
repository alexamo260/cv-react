import './App.css';
import { Rutas } from './components/router/Rutas';
import { ThemeProvider } from './context/ThemeContext';

function App() {
  return (
    <ThemeProvider>
      <div className="layout">
        <Rutas />
      </div>
    </ThemeProvider>
  );
}

export default App;
