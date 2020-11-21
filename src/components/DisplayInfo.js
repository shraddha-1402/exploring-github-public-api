import React, {useEffect} from 'react';
import '../App.css';

const DisplayInfo = ({usrInfo, infoLoaded})=> {
  useEffect(()=>{
    console.log(usrInfo)
    if(Object.keys(usrInfo).length){
      (function(){
        document.getElementById('scrollTrigger').click();
        console.log("scroll ", infoLoaded);
      })();
    }
  },[usrInfo, infoLoaded])

  return(
    <React.Fragment>
      <a id="scrollTrigger" href="#infoDom"><div>scroll click</div></a>
      {infoLoaded.show && 
        <div className="display-info" id="infoDom">
          Scrolled till here
        </div>
      }
    </React.Fragment>
  )
}

export default DisplayInfo;