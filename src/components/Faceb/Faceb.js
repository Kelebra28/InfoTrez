import React from 'react';
import { FacebookProvider, Page } from 'react-facebook';

const Faceb = () => {

  return (
    <section className="seccionDer">
      <FacebookProvider appId="637048456377536">
        <Page href="https://www.facebook.com" tabs="timeline" />
      </FacebookProvider>
    </section>
  )

}

export default Faceb