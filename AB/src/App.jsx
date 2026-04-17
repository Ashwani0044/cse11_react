import './App.css'
import Greeting from '/src/Greeting.jsx';
import Student from '/src/components/Student.jsx';

function App() {
  

  return (
    <>
      <Greeting />
      <Student name={'Ashwani'} age={18}/>
    </>
  )
}

export default App

