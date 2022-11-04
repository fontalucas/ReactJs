import './App.css';
import NavBar from './Componentes/NavBar/NavBar';
import ItemListContainer from './Componentes/ItemListContainer/ItemListContainer';
import 'bootstrap/dist/css/bootstrap.min.css';


const Notification = () => {
  const notificationStyles = {
    position: "absolute",
    top: 100,
    margin: "auto",
    color: "white",
  }
  return (
    <div style={notificationStyles}>
      Un  mensaje
    </div>
  )
}

function App() {
  return (
    <div className="App">
    <Notification />
    <NavBar />
    <ItemListContainer />
    </div>


  );
}

export default App;
