import React, { useEffect, useRef } from "react";
import { Player } from 'video-react';

function App() {
  const array = [1,2,3,4,5,6,7,8,9,10];
  const videoRef = useRef();
  const cardHeight = 300;

  const getScrollPosition = () =>{
    const position = window.pageYOffset;
    const currentCard = Math.floor(position/cardHeight)+1;
    const ref = videoRef.current;
    const totalCard = ref.childNodes.length;
    for(var x=0;x<currentCard;x++){
      // ref.childNodes[x].style.color="black";
      ref.childNodes[x].childNodes[0].childNodes[0].pause();
    }
    for(var y=currentCard+1;y<totalCard;y++){
      // ref.childNodes[y].style.color="black";
      ref.childNodes[y].childNodes[0].childNodes[0].pause();
    }
    //ref.childNodes[currentCard].play();
    ref.childNodes[currentCard].childNodes[0].childNodes[0].play();
  }

  useEffect(()=>{
    window.addEventListener('scroll', getScrollPosition);
    return ()=>{
      window.removeEventListener('scroll', getScrollPosition);
    }
  });
  


  return (
    <div ref={videoRef} style={{ height: '100vh',display:'flex',flexDirection:'column',alignItems:'center',marginTop:'10px'}}>
      {array.map((index)=>(
        <div key={index} style={{ marginBottom:'10px' }} >
          <Player fluid={false} height={300} width={300} muted={false}>
            <source src="https://media.w3.org/2010/05/sintel/trailer_hd.mp4" />
          </Player>
        </div>
      ))}
    </div>
  );
}

export default App;
