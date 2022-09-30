import React from 'react'
import audioPresentacion from '../Audio/presentacion.mp3'

export const Presentacion = ({ ingresar }) => {


    return (
        <div className="container-fluid bg-dark min-vh-100 text-white presentacion d-flex align-items-center">
            <div className="row d-flex container d-block mx-auto">
                <div className="col-4 container texto">
                    <h1 className='textoTitulo mb-3 animate__animated animate__fadeIn animate__delay-1s'>Welcome!</h1>
                    <h3 className='textoSubtitulo animate__animated animate__fadeIn animate__delay-2s' style={{textShadow: '-2px 3px 5px #000'}}><span className='comillas'>“</span> Too much of anything is bad, but too much good whiskey is rarely enough <span className='comillas'>”</span></h3>
                    <div className="row mt-3">
                        <div className="col-6 text-end animate__animated animate__fadeIn animate__delay-3s">
                            <a href="https://www.linkedin.com/in/mauro-venticinque-39a256235/" target='_blank'><i className="fa-brands fa-linkedin-in iconoPresentacion h4 p-2"></i></a>
                            <a href="https://github.com/VenticinqueMauro" target='_blank'><i className="fa-brands fa-github-alt iconoPresentacion h4 p-2"></i></a>
                            <a href="https://twitter.com/VenticinqueMa" target='_blank'><i className="fa-brands fa-twitter iconoPresentacion h4 p-2"></i></a>
                            <a href="mailto:mauro.venticinque@hotmail.com"><i className="fa-solid fa-envelope iconoPresentacion h4 p-2"></i></a>
                        </div>
                        <div className="col-6 text-start">
                        <button className='textoBoton btn btn-warning animate__animated animate__fadeIn animate__delay-3s' onClick={() => ingresar()}>Come Here!</button>
                        </div>
                    </div>
                </div>
                <div className="col-4">
                    <audio src={audioPresentacion} autoPlay type='audio/mp3'></audio>
                </div>
                <div className="col-4 d-flex flex-column d-block my-auto text-center redesPresentacion">
                </div>
            </div>
        </div>

    )
}
