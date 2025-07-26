import './App.css';

const App = () => {
  const name = "Jane";
  const isNameShowing = true;
  const isUserLoggedIn = true;

  return (
    <div className="App">
      <h1>Hello, {isNameShowing ? name : "Someone"}</h1>
      {name ? (
        <>
          <h1>{name}</h1>
        </>
      ) : (
        <>
          <h1>test</h1>
          <h2>There is no name</h2>
        </>
      )}
    </div>
  );
}

export default App;
