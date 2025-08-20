import React,{useEffect,useState} from 'react'
import './Body.css'
const Body = () => {
  const [image, setimage] = useState('')
  const [fetchDataTrigger, setFetchDataTrigger] = useState(false);
  const [upperText, setupperText] = useState('')
  const [lowerText, setlower] = useState('')
useEffect(() => {
  fetch('https://api.imgflip.com/get_memes')
  .then((response)=>response.json())
  .then((users)=>{
    let random=Math.floor(Math.random()*100);
    const url = users.data.memes[random].url;
    setimage(url)
     console.log(url)
  console.log(data)
  })
}, [fetchDataTrigger])
const handleClick = () => {

  setFetchDataTrigger(!fetchDataTrigger);
};
const handleUpperInputChange = (event) => {
  setupperText(event.target.value);
};
const handleLowerInputChange = (event) => {
  setlower(event.target.value);
};
  return (
    <div className='BODY'>
        <div className='input'>
            <input onChange={handleUpperInputChange} value={upperText} className='inputs' type="text" placeholder='Enter upper text'/>
            <input onChange={handleLowerInputChange} className='inputs' type="text"  placeholder='Enter lower text'/>
        </div>
      
            <button onClick={handleClick} className='btn'>Get a new meme</button>
        
            <div className="upperText" style={{
    position: 'relative',
    
      top: "40%",
      left:'0',
       textAlign: 'center', padding: '10px', color: 'white'
  }}>
    {upperText}
  </div>
            <img className='meme' src={image} alt="" />
            <div className="lowerText" style={{
    position: 'relative',
    
      top: "40%",
      left:'0',
       textAlign: 'center', padding: '10px', color: 'white'
  }}>
    {lowerText}
  </div>
        
    </div>
  )
}

export default Body