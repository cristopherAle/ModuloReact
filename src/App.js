import LoginComponent from './components/Login/Login'
import HeaderComponent from './components/Header/Header'
import MessageComponnet from './components/Alert/Alert';
import FooterComponent from './components/Footer/Footer'

import { useState } from 'react';

const App = () =>{
  const[mensaje, setMensaje] = useState({msg:'', color:''})

  return (
    <div className='container'>
        <header>
           <HeaderComponent/>
        </header>
        <section>
            <LoginComponent setMensaje={setMensaje}/>
           
            <div className='mensajealerta'>
                <MessageComponnet mensaje={mensaje}/>
            </div>
        </section>
        <footer>
          <FooterComponent/>        
        </footer>
      
    
       
       
    </div>
    
  );
}

export default App;
