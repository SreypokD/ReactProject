import React from 'react'
import "./footer.css"

function FooterBar() {
   return (
      <>
         <div className='h-footer'>
            <div className="footer-left">
               <img src="https://www.intel.com/content/dam/www/central-libraries/us/en/images/2022-08/chromebook-product-image-transparent-background.png.rendition.intel.web.576.324.png" alt="" width={300} />
            </div>
            <div className="footer-center">
               <h3>Computer</h3>
               <p>QuantumEdge</p>
               <p>CyberNexus </p>
               <p>TechnoByte</p>
               <p>SynthiCore</p>
            </div>
            <div className="contact">
               <h3>Contact by</h3>
               <div className="item ">
                  <i className="material-icons">email</i>
                  <p>Sreypokd@gmail.com</p>
               </div>
               <div className="item ">
                  <i className="material-icons">phone</i>
                  <p>088 841 65 27</p>
               </div>
               <div className="item ">
                  <i className="material-icons">location_on</i>
                  <p>Phnom Penh</p>
               </div>
            </div>
            <div className="footer-right">
               <h3>Other</h3>
               <div className="text-describe">
                  <p>Exploring the Boundless Horizons <br />
                     of Technology: Empowering Individuals, <br />
                     Revolutionizing Industries, and Enriching <br />
                     Lives through the Endless Possibilities of Computer Science</p>
               </div>
               <div className="more-contact">
                  <a href="https://t.me/seiipok"><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQG-J1Z-MEYw4E8kooPK6zc-zAeVnaDkiabXayEkJDLN1mhRoI&s" alt="" width={25} id='telegrame' /></a>
                  <a href=""><img src="https://icon-library.com/images/white-youtube-icon-png/white-youtube-icon-png-11.jpg" alt="" width={40} /></a>
                  <a href=""><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSakKjWDo-nkbOsJvo43jbwdTITuXWWbj9ETzd96mlIWAvyVMy3&s" alt="" width={40} /></a>
                  <a href=""><img src="https://icon-library.com/images/twitter-icon-png-circle/twitter-icon-png-circle-21.jpg" alt="" width={42} /></a>
                  <a href=""><img src="https://www.edigitalagency.com.au/wp-content/uploads/facebook-icon-white-png.png" alt="" width={40} /></a>
         
               </div>
            </div>
         </div>
      </>
   )
}

export default FooterBar
