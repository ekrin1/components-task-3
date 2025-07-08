import TodoInput from './components/TodoInput';
import TodoList from './components/TodoList';
import Footer from './components/Footer';

function App() {
  return (
    <div className="todoapp">
      <h1>Задачи</h1>
      <section>
        <TodoInput />
        <TodoList />
        <Footer />
      </section>
    </div>
  );
}

export default App;


