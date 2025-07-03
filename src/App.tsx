import Header from './components/Header';
import TodoInput from './components/TodoInput';
import Footer from './components/Item';
import TodoList from './components/TodoList';
import Footer from './components/Footer';

function App() {
  return (
    <div className="todoapp">
      <Header />
      <section>
        <TodoInput />
        <TodoList />
        <Footer />
      </section>
    </div>
  );
}

export default App;

// function App() {
//   return (
//     <div className="todoapp">
//       <h1>Задачи</h1>
//       <section>
//         <input className="todo-input" placeholder="Что должно быть сделано?" />
//         <ul className="todo-list">
//           <li>
//             <input className="toggle" type="checkbox" />
//             <label>
//               <span className="description">Учить React 4 часа</span>
//               <span className="created">создана 3 дня назад</span>
//             </label>
//             <div className="buttons">
//               <button className="icon icon-edit">&#9998;</button>
//               <button className="icon icon-destroy">&#10006;</button>
//             </div>
//           </li>
//           <li>
//             <input className="toggle" type="checkbox" />
//             <label>
//               <span className="description">Учить React 4 часа</span>
//               <span className="created">создана 3 дня назад</span>
//             </label>
//             <div className="buttons">
//               <button className="icon icon-edit">&#9998;</button>
//               <button className="icon icon-destroy">&#10006;</button>
//             </div>
//           </li>
//           <li>
//             <input className="toggle" type="checkbox" />
//             <label>
//               <span className="description">Учить React 4 часа</span>
//               <span className="created">создана 3 дня назад</span>
//             </label>
//             <div className="buttons">
//               <button className="icon icon-edit">&#9998;</button>
//               <button className="icon icon-destroy">&#10006;</button>
//             </div>
//           </li>
//         </ul>
//         <footer className="footer">
//           <span className="todo-count">Осталось: 3</span>
//           <ul className="filters">
//             <li>
//               <button className="selected">Все</button>
//             </li>
//             <li>
//               <button>Активные</button>
//             </li>
//             <li>
//               <button>Готовые</button>
//             </li>
//           </ul>
//           <button className="clear-completed">Удалить готовые</button>
//         </footer>
//       </section>
//     </div>
//   );
// }

export default App;
