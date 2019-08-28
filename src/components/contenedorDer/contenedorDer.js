import React from 'react';
import './styles.css'
import banerDerecha from '../../assents/derechaaa.png'
import { FacebookProvider, Page } from 'react-facebook';

const ContenedorDer = () => {

  return (
    <section className="seccionDer d-none d-lg-block">
      {/* <FacebookProvider appId="182395702322445">
        <Page href="https://www.facebook.com/SuperJuguetesMx/" tabs="timeline" />
      </FacebookProvider> */}
      {/* <iframe src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2Fmob640nmm%2F&tabs=timeline&width=340&height=500&small_header=false&adapt_container_width=true&hide_cover=false&show_facepile=true&appId=145799399704791" width={280} height={500} style={{border: 'none', overflow: 'hidden'}} scrolling="no" frameBorder={0} allowTransparency="true" allow="encrypted-media" /> */}
      {/* <div class="LI-profile-badge"  data-version="v1" data-size="medium" data-locale="en_US" data-type="vertical" data-theme="light" data-vanity="jorgesalesboyoli"><a class="LI-simple-link" href='https://mx.linkedin.com/in/jorgesalesboyoli?trk=profile-badge'>Jorge Sales Boyoli</a></div>  */}
      <img src={banerDerecha} alt="baner T-REZ"/>
    </section>
  )

}

export default ContenedorDer