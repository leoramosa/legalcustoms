import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
/* import { Router } from '@reach/router' */
import Home from  '../pages/Home'
import About from  '../pages/About'
import Services from  '../pages/Services'
import NotFound from  '../pages/NotFound'
import Contact from  '../pages/Contact'
import Layout from '../pages/Layout';
import AppContext from '../context/AppContext'
import useInitialState from '../hooks/useInitialState'
import ServiceOne from '../pages/products/ServiceOne'
import ServiceTwo from '../pages/products/ServiceTwo'
import ServiceThree from '../pages/products/ServiceThree'
import ServiceFour from '../pages/products/ServiceFour'
import ServiceFive from '../pages/products/ServiceFive'
import ServiceSix from '../pages/products/ServiceSix'
import ServiceSeven from '../pages/products/ServiceSeven'
import ServiceEight from '../pages/products/ServiceEight'
import ServiceNine from '../pages/products/ServiceNine'
import ServiceTen from '../pages/products/ServiceTen'
import ServiceEleven from '../pages/products/ServiceEleven'

import '@fortawesome/fontawesome-free/css/all.min.css';
import ScrollTop from '../components/ScrollTop';

function App ()  {
  const initialState = useInitialState()

  return (
    <BrowserRouter>
      <ScrollTop/>
      <AppContext.Provider value={initialState}>
          
          <Switch>
            <Layout>
            <Route  exact path="/" component={Home} />
            <Route  exact path="/nosotros" component={About} />
            <Route  exact path="/servicios" component={Services}  />
            <Route  exact path="/servicios/aduanas-y-comercio-exterior" component={ServiceOne}  />
            <Route  exact path="/servicios/transporte-maritimo-mas" component={ServiceTwo}  />
            <Route  exact path="/servicios/administrativo-y-regulatorio" component={ServiceThree}  />
            <Route  exact path="/servicios/procesal" component={ServiceFour}  />
            <Route  exact path="/servicios/negociacion-y-conciliacion" component={ServiceFive}  />
            <Route  exact path="/servicios/arbitraje" component={ServiceSix}  />
            <Route  exact path="/servicios/laboral" component={ServiceSeven}  />
            <Route  exact path="/servicios/contractual" component={ServiceEight}  />
            <Route  exact path="/servicios/corporativo" component={ServiceNine}  />
            <Route  exact path="/servicios/precios-de-transferencia" component={ServiceTen}  />
            <Route  exact path="/servicios/tributario" component={ServiceEleven}  />

            <Route  exact path="/contacto"  component={Contact} />
            </Layout>
            
            <Route component={NotFound} />
        </Switch>
        
      </AppContext.Provider>
    </BrowserRouter>
  );
}

export default App;
