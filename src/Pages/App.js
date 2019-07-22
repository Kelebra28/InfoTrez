import React, { Component } from 'react';
import {BrowserRouter as Router,Route} from 'react-router-dom'
import './App.css';
import Navbar from '../components/Navbar/Navbar'
import Footer from '../components/Footer/Footer'
//Home
import Home from  './Home'
//Nosotros 
import Nosotros from './Nosotros'
//socias
import Socias from './Socias/Socias';
import SociasLert from './Socias/SociasLER';
import SociasIEMS from './Socias/SociasIEMS';
//Profecionales
import Profecionales from './Profecionales/ProfeIEMS';
import ProfeLERT from './Profecionales/ProfeLERT';
import ProfeIEMS from './Profecionales/ProfeIEMS'; 
//Servicios
import Servicios from './Servicios/Servicios';
import DisputasC from './Servicios/DisputasC';
import LitigiosA from './Servicios/LitigiosA';
import EconomiaS from './Servicios/Economia';
import Monitoreos from './Servicios/Monitoreos';
import MxUSA from './Servicios/MxUSA';
import RemediosCo from './Servicios/Remedios'
//Remedios Comerciales 
import RemediosComerciales from './Remedios comerciales/RemediosComer';
import AntiDumpig from './Remedios comerciales/AntiDumping';
import AntiSubveciones from './Remedios comerciales/AntiSubvenciones';
import Salvaguardias from './Remedios comerciales/Salvaguardias';
import Examenes from './Remedios comerciales/Examenes';
import Revisiones from './Remedios comerciales/Revisiones';
import Elusion from './Remedios comerciales/Elusion';
import Cobertura from './Remedios comerciales/Cobertura';
//Disputas Comerciales
import DisputasComerciales from './DisputasComerciales/DisputasComerciales';
import PlanesOMC from './DisputasComerciales/PlanesOMC';
import PlanesTLC from './DisputasComerciales/PlanesTLC';
//Litigios Antidumping
import Amparos from './LitigiosAntidumoing/Amparos';
import Juicios from './LitigiosAntidumoing/Juicios';
import LitigiosAnti from './LitigiosAntidumoing/LitigiosAnti';
import Peritajes from './LitigiosAntidumoing/Peritajes';
import RecursosReno from './LitigiosAntidumoing/RecursoReno';
//Economia Litigios
import Analisis from './Economia/Analisis';
import Calculo from './Economia/Calculo';
import DanoIn from './Economia/DanoIn';
import Economia from './Economia/Economia';
import Margenes from './Economia/Margenes';
import VerificacionesE from './Economia/Verificaciones';
//Monitoreo estrategico
import Alertas from './Monitoreo/Alertas';
import Monitoreo from './Monitoreo/Monitoreo';
import Precios from './Monitoreo/Precios';
//Mx-USA Trade Planning
import Cuestionarios from './MXUSA/Cuestionarios';
import MXUSA from './MXUSA/Mxusa';
import Riesgos from './MXUSA/Riesgos';
import Verificaciones from './MXUSA/Verificaciones';
//Industrias
import Agropecuario from './Industrias/Agropecuario';
import Consumo from './Industrias/Cosumo';
import Industrias from './Industrias/Industrias';
import Manufacturero from './Industrias/Manufacturero';
//Presencia
import Articulos from './Presencia/Articulos';
import Noticia from './Presencia/Noticia';
import Presencia from './Presencia/Presencia';
import Redes from './Presencia/Redes';
//Recursos
import AntiMe from './Recursos/AntiMe';
import AntiUsa from './Recursos/AntiUSa';
import Estadisticas from './Recursos/Estadisticas';
import Legislacion from './Recursos/Legislacion';
import Otros from './Recursos/Otros';
import Recursos from './Recursos/Recursos';
//Contacto
import Contacto from './Contacto';
//Lang
import Esp from './Lang/Esp.json'
import Eng from './Lang/Eng.json'


import { fab } from '@fortawesome/free-brands-svg-icons'
import { library } from '@fortawesome/fontawesome-svg-core'


library.add(fab)



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
              <Route exact path= "/" component={() => <Home ata={this.state.data}/>}/>
              <Route exact path="/Nosotros/" component={() => <Nosotros data={this.state.data} />}/>
              {/* Socias */}
              <Route exact path="/Socias/" component={() => <Socias data={this.state.data} />}/>
              <Route exact path="/Socias/LERT" component={() => <SociasLert data={this.state.data} />}/>
              <Route exact path="/Socias/IEMS" component={() => <SociasIEMS data={this.state.data} />}/>
              {/* Profecionales */}
              <Route exact path="/Profecionales/" component={() => <Profecionales data={this.state.data} />}/>
              <Route exact path="/Profecionales/LERT" component={() => <ProfeLERT data={this.state.data} />}/>
              <Route exact path="/Profecionales/IEMS" component={() => <ProfeIEMS data={this.state.data} />}/>
              {/* Servicios */}
              <Route exact path="/Servicios/" component={() => <Servicios data={this.state.data} />}/>
              <Route exact path="/Servicios/RemediosC" component={() => <RemediosCo data={this.state.data} />}/>
              <Route exact path="/Servicios/DisputasC" component={() => <DisputasC data={this.state.data} />}/>
              <Route exact path="/Servicios/LitiguiosA" component={() => <LitigiosA data={this.state.data} />}/>
              <Route exact path="/Servicios/Economia" component={() => <EconomiaS data={this.state.data} />}/>
              <Route exact path="/Servicios/Monitoreos" component={() => <Monitoreos data={this.state.data} />}/>
              <Route exact path="/Servicios/MX-USA" component={() => <MxUSA data={this.state.data} />}/>
              {/* Remedios Comerciales */}
              <Route exact path="/RemediosComerciales/" component={() => <RemediosComerciales data={this.state.data} />}/>
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
      <Footer/>
  </Router>
    );
  }
}

export default App;
