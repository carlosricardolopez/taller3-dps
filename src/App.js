import './App.css';
import Principal from './Componentes/componente1';
import Bienvenida from './Componentes/Bienvenida';
import userEvent from '@testing-library/user-event';

function App() {
  const Datos = {nombre: 'Ricardo', apellido: 'Lopez'}
  const Skills = {csharp: '30%', html: '55%', css: '50%', js: '12%'}
  return (
    <div className="App">
      <div id="Contenedor">
        <Principal></Principal>
        <Bienvenida valor={Datos.nombre} valor2={Datos.apellido} pr1={Skills.csharp} pr2={Skills.html} pr3={Skills.css} pr4={Skills.js}></Bienvenida>
      </div>
    </div>
  );
}

export default App;
