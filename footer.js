import React from "react";
import './footer.css';


const Footer = (props) =>{

    return(


        <div >
        <footer className="d-flex flex-wrap justify-content-between align-items-center py-3 mt-4 border-top">
          <div className="col-md-4 d-flex align-items-center">
            <a href="/" classsName ="mb-3 me-2 mb-md-0 text-muted text-decoration-none lh-1">
              <svg className="bi" style={{width:'30', height:'24'}} ><use href="#bootstrap"></use></svg>
            </a>
            <span id="dscrtp" className="mb-3 mb-md-0 text-muted">© 2022 Company, Inc</span>
          </div>
          <div id="peaceIcon" className="iconItems">   
            <i className="fa-solid fa-peace"></i>
          </div>
          <ul className="nav col-md-4 justify-content-end list-unstyled d-flex " style={{marginLe
          :-50}}>
            <li className="ms-3 iconItems"><i className="fa-brands fa-square-facebook"></i></li>
            <li className="ms-3 iconItems"><i className="fa-brands fa-square-twitter"></i></li>
            <li className="ms-3 iconItems"><i className="fa-brands fa-square-instagram"></i></li>
          </ul>
        </footer>
      </div>
    )
}

export default Footer;