import './App.css';
import Counter from './component/Counter';
import TodoApp from './component/TodoApp';

function App() {
  return (
    <div className="App">
      <h1>Counter</h1>
      <Counter />
      <h1>Todo</h1>
      <TodoApp />

    </div>
  )
}

export default App;
