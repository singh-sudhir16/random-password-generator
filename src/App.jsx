import { useEffect, useRef , useState  , useCallback} from 'react'
import './index.css'


function App() {

const [pass,setPass] = useState("passwordddd");
const [isNum,setNum] = useState(false)  
const [isChar,setChar] = useState(false)  
const [length,setLength] = useState(0)  

const generatePass =  useCallback(() => {
   let passi=""
   let str="qwertyuiopasdfghjklzxcvbnmQWERTYUIOPASDFGHJKLZXCVBNM"
    
   if(isNum) str += "0123456789"
   if(isChar) str += "~!@#$%^&*()<>,.?/\|`[]="

   for(let i=0 ; i<length;i++)
   {
       let io= Math.floor(Math.random() * str.length + 1)
       passi += str.charAt(io)
   }
   setPass(passi);

},[length , isChar , isNum])

  useEffect(()=>{
    generatePass();
  } , [length , isChar , isNum ])

const copyToBoard = ()=> {
       window.navigator.clipboard.writeText(pass)
} 

  return (
    <>  
     <div className="w-full  max-w-lg mx-auto shadow-md rounded-lg px-4 py-3 my-8 bg-gray-600 text-slate-50">
    <h1 className='text-white text-center my-3'>Password generator</h1>
  <div className="flex shadow rounded-lg overflow-hidden mb-4">
     <input
            type="text"
            value={pass}
            className="outline-none w-full py-1 px-3 rounded-lg text-gray-800"
            placeholder="Get randomly generated password"
            readOnly
            // ref={passwordRef}
        />
        <button
        onClick={copyToBoard}
        className=' bg-[#24292F] text-white hover:bg-[#24292F]/90 focus:ring-4 focus:outline-none focus:ring-[#24292F]/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-gray-500 dark:hover:bg-[#050708]/30 '
        >Copy</button> 
    </div>

    <div>
      <input type="range"
       value={length}
       className='cursor-pointer'
       min={6}
       max={100}
      
       onChange={e=>setLength(e.target.value)}
      />
      <label > Length : {length} </label>

      <div className="flex items-center gap-x-1">
      <input
          type="checkbox"
          defaultChecked={isNum}
          id="numberInput"
          onChange={() => {
              setNum(isNum => !isNum);
          }}
      />
      <label htmlFor="numberInput">Numbers</label>
      </div>
      <div className="flex items-center gap-x-1">
      <input
          type="checkbox"
          defaultChecked={isChar}
          id="numberInput"
          onChange={() => {
              setChar(isChar => !isChar);
          }}
      />
      <label >Characters</label>
      </div>
    </div>
    
      

  </div>
       
    </>
  )
}

export default App
