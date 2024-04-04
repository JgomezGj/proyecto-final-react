import { Provider } from 'react-redux';
import './App.css';
import Layout from './componentes/Layout/index';
import store from "./store";
import Productos from './vistas/Productos';

function App() {
  return (
    <>
      <Provider store={store}>
      
      <Layout>
        <Productos/>
      </Layout>
      </Provider>
    </>
  )
}

export default App;
