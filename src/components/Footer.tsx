function Footer() {
  return (
    <footer className="footer">
      <span className="todo-count">Осталось: 3</span>
      <ul className="filters">
        <li>
          <button className="selected">Все</button>
        </li>
        <li>
          <button>Активные</button>
        </li>
        <li>
          <button>Готовые</button>
        </li>
      </ul>
      <button className="clear-completed">Удалить готовые</button>
    </footer>
  );
}

export default Footer;
