import React from "react";
import { MDBCol, MDBContainer, MDBRow, MDBFooter } from "mdbreact";
import styles from"./footer.module.css"

const FooterPage = () => {
  return (
    <MDBFooter color="black" className="font-small pt-4 mt-4" className={styles.footer}>
      <MDBContainer fluid className="text-center text-md-left" >
        <MDBRow>
          <MDBCol md="6">
            <h5 className="title" className={styles.title}>Footer Content</h5>
            <p className={styles.footer_content}>
              Here will be the footer content and bla bla bla
            </p>
          </MDBCol>
          <MDBCol md="6">
            <h5 className="title" className={styles.links}>Links</h5>
            <ul>
              <li className="list-unstyled" >
                <a href="#!" className={styles.link}>Link 1</a>
              </li>
              <li className="list-unstyled">
                <a href="#!" className={styles.link}>Link 2</a>
              </li>
              <li className="list-unstyled">
                <a href="#!" className={styles.link}>Link 3</a>
              </li>
              <li className="list-unstyled">
                <a href="#!" className={styles.link}>Link 4</a>
              </li>
            </ul>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
      <div className="footer-copyright text-center py-3">
        <MDBContainer fluid className={styles.copy}>
          &copy; {new Date().getFullYear()} Copyright: <a href="#" className={styles.copy_link}> Arnold Electronics </a>
        </MDBContainer>
      </div>
    </MDBFooter>
  );
}

export default FooterPage;

 // <div>footer
    //     <div className={styles.right}>
    //     &copy;Arnold electronics {CURRENT_YEAR}, All rights reserved.
    //         </div>
    // </div>