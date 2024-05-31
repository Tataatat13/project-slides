import './App.css';
import { useState } from 'react';
import { data } from './data';



function App() {

  const [project, setProject] = useState(0);

  const {id, name, creat, image} = data[project];

  const previosProject = () => {
    setProject ((project => {
      project --;
      if (project < 0) {
        return data.length -1;
      }
      return project;
    }))
  }
  
  const nextProject = () => {
    setProject((project => {
      project ++;
      if (project > data.length -1) {
        project = 0;
      }
      return project;
    }))
  }
  return (<div className='conteiner'>
    <div className='top'>
      <h1>{id}- {name}</h1>
      </div>
    <div className='top'>
      <img src={image} alt="foto" width="700px"/>
    </div>
    <div className='top'>
      <h3>{creat}</h3>
    </div>
    <div className='btn'>
      <button onClick={previosProject}>Previos</button>

      <button onClick={nextProject}>Next</button>
    </div>
    </div>
  );
}

export default App;
