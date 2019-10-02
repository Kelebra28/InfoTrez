import React, { Component } from 'react';
import ReactDOM from 'react-dom'
import {BrowserRouter as Router,Route} from 'react-router-dom'
import './App.css';
import Navbar from './components/Navbar/Navbar'
import Footer from './components/Footer/Footer'
import FooterResponsive from './components/FooterResponsive/FooterResponsive';

//Home
import Home from  './Pages/Home'
//Nosotros 
import Nosotros from './Pages/Us/Nosotros'
//socias
import Socias from './Pages/Socias/Socias';
import SociasLert from './Pages/Socias/SociasLER';
import SociasIEMS from './Pages/Socias/SociasIEMS';
//Profecionales
import Profecionales from './Pages/Profecionales/ProfeIEMS';
import ProfeLERT from './Pages/Profecionales/ProfeLERT';
import ProfeIEMS from './Pages/Profecionales/ProfeIEMS'; 
//Servicios
import Servicios from './Pages/Servicios/Servicios';
import DisputasC from './Pages/Servicios/DisputasC';
import LitigiosA from './Pages/Servicios/LitigiosA';
import EconomiaS from './Pages/Servicios/Economia';
import Monitoreos from './Pages/Servicios/Monitoreos';
import MxUSA from './Pages/Servicios/MxUSA';
import RemediosCo from './Pages/Servicios/Remedios'
//Remedios Comerciales 
import RemediosComerciales from './Pages/Remedios comerciales/RemediosComer';
import AntiDumpig from './Pages/Remedios comerciales/AntiDumping';
import AntiSubveciones from './Pages/Remedios comerciales/AntiSubvenciones';
import Salvaguardias from './Pages/Remedios comerciales/Salvaguardias';
import Examenes from './Pages/Remedios comerciales/Examenes';
import Revisiones from './Pages/Remedios comerciales/Revisiones';
import Elusion from './Pages/Remedios comerciales/Elusion';
import Cobertura from './Pages/Remedios comerciales/Cobertura';
//Disputas Comerciales
import DisputasComerciales from './Pages/DisputasComerciales/DisputasComerciales';
import PlanesOMC from './Pages/DisputasComerciales/PlanesOMC';
import PlanesTLC from './Pages/DisputasComerciales/PlanesTLC';
//Litigios Antidumping
import Amparos from './Pages/LitigiosAntidumoing/Amparos';
import Juicios from './Pages/LitigiosAntidumoing/Juicios';
import LitigiosAnti from './Pages/LitigiosAntidumoing/LitigiosAnti';
import Peritajes from './Pages/LitigiosAntidumoing/Peritajes';
import RecursosReno from './Pages/LitigiosAntidumoing/RecursoReno';
//Economia Litigios
import Analisis from './Pages/Economia/Analisis';
import Calculo from './Pages/Economia/Calculo';
import DanoIn from './Pages/Economia/DanoIn';
import Economia from './Pages/Economia/Economia';
import Margenes from './Pages/Economia/Margenes';
import VerificacionesE from './Pages/Economia/Verificaciones';
//Monitoreo estrategico
import Alertas from './Pages/Monitoreo/Alertas';
import Monitoreo from './Pages/Monitoreo/Monitoreo';
import Precios from './Pages/Monitoreo/Precios';
//Mx-USA Trade Planning
import Cuestionarios from './Pages/MXUSA/Cuestionarios';
import MXUSA from './Pages/MXUSA/Mxusa';
import Riesgos from './Pages/MXUSA/Riesgos';
import Verificaciones from './Pages/MXUSA/Verificaciones';
//Industrias
import Agropecuario from './Pages/Industrias/Agropecuario';
import Consumo from './Pages/Industrias/Cosumo';
import Industrias from './Pages/Industrias/Industrias';
import Manufacturero from './Pages/Industrias/Manufacturero';
//Presencia
import Articulos from './Pages/Presencia/Articulos';
import Noticia from './Pages/Presencia/Noticia';
import Presencia from './Pages/Presencia/Presencia';
import Redes from './Pages/Presencia/Redes';
//Recursos
import AntiMe from './Pages/Recursos/AntiMe';
import AntiUsa from './Pages/Recursos/AntiUSa';
import Estadisticas from './Pages/Recursos/Estadisticas';
import Legislacion from './Pages/Recursos/Legislacion';
import Otros from './Pages/Recursos/Otros';
import Recursos from './Pages/Recursos/Recursos';
//Contacto
import Contacto from './Pages/Contacto';
//Lang
import Esp from './Lang/Esp.json'
import Eng from './Lang/Eng.json'

//Coming Soon
import ComingSoon from './Pages/ComingSoon'

// import { faStroopwafel as fasFaStroopwafel } from '@fortawesome/free-solid-svg-icons'
// import { faStroopwafel as farFaStroopwafel } from '@fortawesome/free-regular-svg-icons'

import { fab } from '@fortawesome/free-brands-svg-icons'
import { library } from '@fortawesome/fontawesome-svg-core'
import { far } from '@fortawesome/free-regular-svg-icons'
import { faCheckSquare, faBlog } from '@fortawesome/free-solid-svg-icons'

import Prueba from './Pages/Prueba'

library.add(fab, far, faCheckSquare, faBlog)



const dataEsp = Esp
const dataEng = Eng

class App extends Component {


  state = {
    data: dataEsp,
    idioma: "Esp"
  }

  handelChangeIdioma = () => {
    this.state.idioma === "Esp" ?
    this.setState({
      data:dataEng,
      idioma:"Eng"
    })
    :
    this.setState({
      data:dataEsp,
      idioma:"Esp"
    })
  }


  render() {
    return (
      <Router> 
        <Navbar/>
              {/* Home */}
              <Route exact path= "/" component={() => <Home data={this.state.data}/>}/>
              <Route exact path="/Nosotros/" component={() => <Nosotros data={this.state.data} />}/>
              <Route exact path= "/ComingSoon" component={() => <ComingSoon data={this.state.data}/>}/>
              {/* Socias */}
              <Route exact path="/Socias/" component={() => <Socias data={this.state.data} />}/>
              <Route exact path="/Socias/LERT" component={() => <SociasLert data={this.state.data} />}/>
              <Route exact path="/Socias/IEMS" component={() => <SociasIEMS data={this.state.data} />}/>
              {/* Profecionales */}
              <Route exact path="/Profesionales/" component={() => <Profecionales data={this.state.data} />}/>
              <Route exact path="/Profesionales/LERT" component={() => <ProfeLERT data={this.state.data} />}/>
              <Route exact path="/Profesionales/IEMS" component={() => <ProfeIEMS data={this.state.data} />}/>
              {/* Servicios */}
              <Route exact path="/Servicios/" component={() => <Servicios data={this.state.data} />}/>
              <Route exact path="/Servicios/RemediosC" component={() => <RemediosCo data={this.state.data} />}/>
              <Route exact path="/Servicios/DisputasC" component={() => <DisputasC data={this.state.data} />}/>
              <Route exact path="/Servicios/LitiguiosA" component={() => <LitigiosA data={this.state.data} />}/>
              <Route exact path="/Servicios/Economia" component={() => <EconomiaS data={this.state.data} />}/>
              <Route exact path="/Servicios/Monitoreos" component={() => <Monitoreos data={this.state.data} />}/>
              <Route exact path="/Servicios/MX-USA" component={() => <MxUSA data={this.state.data} />}/> 
              {/* Remedios Comerciales */}
              <Route exact path="/RemediosC/" component={() => <RemediosComerciales data={this.state.data} />}/>
              <Route exact path="/RemediosComerciales/Anti-Dumping" component={() => <AntiDumpig data={this.state.data} />}/>
              <Route exact path="/RemediosComerciales/Anti-Subvenciones" component={() => <AntiSubveciones data={this.state.data} />}/>
              <Route exact path="/RemediosComerciales/Salvaguardias" component={() => <Salvaguardias data={this.state.data} />}/>
              <Route exact path="/RemediosComerciales/Examenes-Vigilancia" component={() => <Examenes data={this.state.data} />}/>
              <Route exact path="/RemediosComerciales/Revisiones-Anuales" component={() => <Revisiones data={this.state.data} />}/>
              <Route exact path="/RemediosComerciales/Anti-elusion" component={() => <Elusion data={this.state.data} />}/>
              <Route exact path="/RemediosComerciales/Cobertura" component={() => <Cobertura data={this.state.data} />}/>
              {/* Disputas Comerciales */}
              <Route exact path="/DisputasComerciales/" component={() => <DisputasComerciales data={this.state.data} />}/>
              <Route exact path="/DisputasComerciales/Planes-OMC" component={() => <PlanesOMC data={this.state.data} />}/>
              <Route exact path="/DisputasComerciales/Planes-TLC" component={() => <PlanesTLC data={this.state.data} />}/>
              {/* Litigios Antidumping */}
              <Route exact path="/LitigiosAntidumping/" component={() => <LitigiosAnti data={this.state.data} />}/>
              <Route exact path="/LitigiosAntidumping/Recursos-Revocacion" component={() => <RecursosReno data={this.state.data} />}/>
              <Route exact path="/LitigiosAntidumping/Juicios-Nualidad" component={() => <Juicios data={this.state.data} />}/>
              <Route exact path="/LitigiosAntidumping/Amparos" component={() => <Amparos data={this.state.data} />}/>
              <Route exact path="/LitigiosAntidumping/Peritajes" component={() => <Peritajes data={this.state.data} />}/>
              {/* Economia Litigios */}
              <Route exact path="/EconomiaLitigios/" component={() => <Economia data={this.state.data} />}/>
              <Route exact path="/EconomiaLitigios/Analisis-Importaciones" component={() => <Analisis data={this.state.data} />}/>
              <Route exact path="/EconomiaLitigios/Margenes-Dumping" component={() => <Margenes data={this.state.data} />}/>
              <Route exact path="/EconomiaLitigios/Dano-Industria" component={() => <DanoIn data={this.state.data} />}/>
              <Route exact path="/EconomiaLitigios/Calculo-Subvenciones" component={() => <Calculo data={this.state.data} />}/>
              <Route exact path="/EconomiaLitigios/Verificaciones" component={() => <VerificacionesE data={this.state.data} />}/>
              {/* Monitoreo Estrategico */}
              <Route exact path="/MonitoreoEstrategico/" component={() => <Monitoreo data={this.state.data} />}/>
              <Route exact path="/MonitoreoEstrategico/Monitoreo-Precios" component={() => <Precios data={this.state.data} />}/>
              <Route exact path="/MonitoreoEstrategico/Alertas-Dumping" component={() => <Alertas data={this.state.data} />}/>
              {/* Mx-USA Trade Planning */}
              <Route exact path="/Mx-USA-TradePlanning/" component={() => <MXUSA data={this.state.data} />}/>
              <Route exact path="/Mx-USA-TradePlanning/Riesgo-Antidumpig" component={() => <Riesgos data={this.state.data} />}/>
              <Route exact path="/Mx-USA-TradePlanning/Cuestionarios" component={() => <Cuestionarios data={this.state.data} />}/>
              <Route exact path="/Mx-USA-TradePlanning/Verificaciones" component={() => <Verificaciones data={this.state.data} />}/>
              {/* Industrias */}
              <Route exact path="/Industrias/" component={() => <Industrias data={this.state.data} />}/>
              <Route exact path="/Industrias/Agropecuario" component={() => <Agropecuario data={this.state.data} />}/>
              <Route exact path="/Industrias/Manufacturero" component={() => <Manufacturero data={this.state.data} />}/>
              <Route exact path="/Industrias/ConsumoFinal" component={() => <Consumo data={this.state.data} />}/>
              {/* Presencia */}
              <Route exact path="/Presencia/" component={() => <Presencia data={this.state.data} />}/>
              <Route exact path="/Presencia/RedesSociales" component={() => <Redes data={this.state.data} />}/>
              <Route exact path="/Presencia/Articulos" component={() => <Articulos data={this.state.data} />}/>
              <Route exact path="/Presencia/Noticias" component={() => <Noticia data={this.state.data} />}/>
              {/* Recursos */}
              <Route exact path="/Recursos/" component={() => <Recursos data={this.state.data} />}/>
              <Route exact path="/Recursos/Legislacion-OMC" component={() => <Legislacion data={this.state.data} />}/>
              <Route exact path="/Recursos/Antidumping-Mexico" component={() => <AntiMe data={this.state.data} />}/>
              <Route exact path="/Recursos/Antidumping-USA" component={() => <AntiUsa data={this.state.data} />}/>
              <Route exact path="/Recursos/Estadisticas-Comerciales" component={() => <Estadisticas data={this.state.data} />}/>
              <Route exact path="/Recursos/Otros-Sitios" component={() => <Otros data={this.state.data} />}/>
              {/* Contacto */}
              <Route exact path="/Contacto/" component={() => <Contacto data={this.state.data} />}/>
              {/* Prueba */}
              <Route exact path="/Prueba/" component={() => <Prueba data={this.state.data} />}/>
      <Footer/>
      <FooterResponsive/>
  </Router>
    );
  }
}

export default App;
