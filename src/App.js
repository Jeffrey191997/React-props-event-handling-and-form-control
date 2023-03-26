import Card from "./components/Card";
import List from "./components/List";
import TypeMe from "./components/TypeMe";

function App() {
  const user = {
  name: "John Doe",
  job: "Engineer",
  hobby: "Listen to music",
}
  return (
    <div className="App">
      <Card user={user} />
      <List />
      <TypeMe  />
    </div>
  );
}

export default App;
