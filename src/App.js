import Card from "./components/Card";
import List from "./components/List";
import TypeMe from "./components/TypeMe";
import MyForm from "./components/MyForm";

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
      <TypeMe />
      <MyForm />
    </div>
  );
}

export default App;
