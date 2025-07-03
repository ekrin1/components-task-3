function TodoItem() {
  return (
    <li>
      <input className="toggle" type="checkbox" />
      <label>
        <span className="description">Учить React 4 часа</span>
        <span className="created">создана 3 дня назад</span>
      </label>
      <div className="buttons">
        <button className="icon icon-edit">&#9998;</button>
        <button className="icon icon-destroy">&#10006;</button>
      </div>
    </li>
  );
}

export default TodoItem;
