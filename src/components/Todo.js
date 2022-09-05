function Todo({ text }) {
  function deleteHandler() {
    console.log("Clicked here");
  }
  return (
    <div className="card">
      <h2>{text}</h2>
      <div className="actions">
        <button className="btn" onClick={deleteHandler}>Delete</button>
      </div>
    </div>
  );
}

export default Todo;
