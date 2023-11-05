import './App.css'
import {ClassComponentCounter} from "./Components/ClassComponent.jsx";
import {FunctionComponentCounter} from "./Components/FunctionComponent.jsx";
import {Stack} from "@mui/material";

function App() {

  return (
    <>
      <Stack spacing={40} direction='row'>
        <ClassComponentCounter/>
        <FunctionComponentCounter/>
      </Stack>
    </>
  )
}

export default App
