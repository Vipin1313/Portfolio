import React from 'react';
import "./footer.css";


function Footer() {
    return (
      <>
      
      <div className="footer">
        Made with ❤️ by Vipin Kumar
      </div>
      <div class="counter">
     </div>
     
     <div class="center">
     <a href="https://www.freecounterstat.com" title="web counter html"><img src="https://counter7.stat.ovh/private/freecounterstat.php?c=n1gd73s94aru5tgbj36tarqkkcgzkdw2" border="0" title="web counter html" alt="web counter html"/></a>
     </div>
     </>
    );
  }
  

  
  // let counterElement="abcd";

// let counterElement = document.getElementsByClassName('count')[0];
// updateCounter()
// function updateCounter() {
  
//   fetch('https://api.countapi.xyz/update/uimonk/youtubechannel/?amount=1')
//       .then(res => res.json())
//       .then(data => counterElement.innerHTML = data.value)
// }
  export default Footer;