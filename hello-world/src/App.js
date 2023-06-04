import logo from './logo.svg';
import './App.css';
import Greet from './Components/Greet';
import Welcome from './Components/Welcome';
import Message from './Components/Message';
import Counter from './Components/Counter';
import Eventhandling from './Components/Eventhandling';
import ClassClick from './Components/ClassClick';
import EventBind from './Components/EventBind';
function App() {
  return (
    <div className="App">
     {/* <Greet name="Bruce" heroname="Batman"></Greet>
     <Greet name="Banner" heroname="Hulk"></Greet>
     <Greet name="Natasha" heroname="BlackWidow"></Greet>
     <Welcome name="Clark" heroname="Superman"></Welcome> */}
     {/* <Message></Message> */}
     {/* <Counter></Counter> */}
     {/* <Eventhandling></Eventhandling> */}
     {/* <ClassClick></ClassClick> */}
     <EventBind></EventBind>

    </div>
  );
}

export default App;
