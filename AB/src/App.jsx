import './App.css'
import Greeting from '/src/components/Greeting.jsx';
import Exp4 from '/src/components/Exp4.jsx';

function App() {
  

  return (
    <>
      <Greeting />
      <Exp4 name={'Rahul Sharma'} course={'Computer Science'} marks={85} />
      <Exp4 name={'Priya Singh'} course={'Mathematics'} marks={92} />
      <Exp4 name={'Amit Kumar'} course={'Physics'} marks={78} />
    </>
  )
}

export default App

