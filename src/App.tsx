import { useRef } from "react";
import Button from "./components/Button";
import Button_2 from "./components/Button_2";
import Container from "./components/Container";
import Input from "./components/Input";
import Form, { type FormHandle } from "./components/Form";

function App() {
  const currentForm = useRef<FormHandle>(null)

  function handleSave(data: unknown) {
    const extractData = data as {name: string, age: string};
    console.log(extractData)
    currentForm.current?.clear()
  }

  return (
    <main>
      <Form onSave={handleSave} ref={currentForm}>
        <Input type="text" id="name" label="Name" />
        <Input type="number" id="age" label="Age" />
        <p>
          <Button_2>Save</Button_2>
        </p>
      </Form>
    </main>
  )
}

export default App;
