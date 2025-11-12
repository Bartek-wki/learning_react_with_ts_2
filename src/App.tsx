import Button from "./components/Button";
import Button_2 from "./components/Button_2";
import Input from "./components/Input";

function App() {
  return (
    <main>
      <Button el="button">Przycisk</Button>
      <Button el="anchor" href="#">Link</Button>
      <br></br>
      <Button_2>Przycisk 2</Button_2>
      <Button_2 href="#">Link 2</Button_2>
    </main>
  )
}

export default App;
