import React from 'react'

export const Footer = () => {
    return (
        <footer className="d-flex flex-wrap mt-5 justify-content-between align-items-center py-3  border-top text-white footer row">
            <div className="col-md-4 d-flex align-items-center ps-5">
                <span href="/" className="mb-3 me-2 mb-md-0 text-muted text-decoration-none lh-1">
                    Desing & Development 
                </span>
                <b className="mb-3 mb-md-0 text-muted h6">Mauro Venticinque</b>
            </div>

            <ul className="nav col-md-4 justify-content-end list-unstyled d-flex pe-5">
                <li className="ms-3 pt-1 pe-2"><a className="text-muted" href="#"><i className="fa-brands fa-twitter h5 iconoPresentacion"></i></a></li>
                <li className="ms-3 pt-1 pe-2"><a className="text-muted" href="#"><i className="fa-brands fa-github-alt h5 iconoPresentacion"></i></a></li>
                <li className="ms-3 pt-1 pe-2"><a className="text-muted" href="#"><i className="fa-brands fa-linkedin-in h5 iconoPresentacion"></i></a></li>
                <li className="ms-3 pt-1 pe-2"><a className="text-muted" href="#"><i className="fa-solid fa-envelope iconoPresentacion h5"></i></a></li>
                
            </ul>
        </footer>
    )
}
