import './App.css'
import CallbackExample from './hooks/CallbackExample';
import CustomHooksExample1 from './hooks/CustomHooksExample1';
import CustomHooksExample2 from './hooks/CustomHooksExample2';
import UseExamTwo from './hooks/UseExamTwo';
import UseRefExamOne from './hooks/UseRefExamOne';
import UseRefExamThree from './hooks/UseRefExamThree';

function App() {

  return (
    <>
    <h1>Hook</h1>
    <UseRefExamOne />
    <UseExamTwo />
    <UseRefExamThree />
    <CallbackExample />
    <CustomHooksExample2 />
    <CustomHooksExample1 />
    </>
  )
}

export default App
