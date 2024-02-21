// import { Suspense,lazy } from 'react';

// import { BrowserRouter, Route, Routes, useNavigate } from 'react-router-dom';
// const Dashboard = lazy(() => import('./components/Dashboard'));
// const Landing = lazy(() => import('./components/Landing'));


// function App() {
  

//   return ( 
//     <div>
//           <BrowserRouter>
//       <Appbar />
//       <Routes>
//       <Route
//           path='/dashboard'
//           element={
//             <Suspense fallback={<div>{'Loading...'}</div>}>
//               <Dashboard />
//             </Suspense>
//           }
//         />

//       <Route path='/' element={<Suspense fallback={<div>{'lOADING...'}</div>}><Landing/></Suspense>} />
//       </Routes>
//     </BrowserRouter>
//     </div>

//   );
// }

// function Appbar() {
//   const navigate = useNavigate();

//   return (
//     <div>
//       <div>
//         <button
//           onClick={() => {
//             navigate('/');
//           }}
//         >
//           landing page
//         </button>
//         <button
//           onClick={() => {
//             navigate('/dashboard');
//           }}
//         >
//           Dashboard
//         </button>
//       </div>
//     </div>
//   );
// }

// export default App;


// prop drilling 
import { useState } from "react"

function App() {
  const [count,setCount]= useState(0)
  return (
    <div>
<Count count={count}/>
<Buttons count={count} setCount={setCount}/>
    </div>
  )
}   

function Count({count}){
  return <div>
{count}
  </div>
}
function Buttons({count,setCount}){
  return <div>
    <button onClick={()=>{
setCount(count+1)
    }}>
      increase
    </button>
    <button onClick={()=>{
      setCount(count-1)
    }}>
      decrease
    </button>
  </div>
}

export default App