import './App.css';
import { ClassBasedGreeter } from './components/greeter/ClassBasedGreeter';
import { Greeter } from './components/greeter/Greeter';

function App() {
  return (
    <>
      <ClassBasedGreeter />
      <Greeter />
    </>
  );
}

export default App;
