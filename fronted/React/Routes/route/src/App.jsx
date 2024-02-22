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
// import { useState, useContext } from "react";


// import { CountContext } from './components/Context';
import { RecoilRoot,useRecoilState,useRecoilValue } from 'recoil';
import {countAtom, evenSelector} from './store/atoms/count'

function App() {
  // const [count, setCount] = useState(0);

  return (
<RecoilRoot>
<Count /> 
</RecoilRoot>
     

  );
}

function Count() {
  return (
    <div>
      <CountRenderer />
      <Buttons />
    </div>
  );
}
// context api
function CountRenderer() {
  const count = useRecoilValue(countAtom);
  return <div>{count}
  <EvencountRender/>
  </div>;
  
}
function EvencountRender(){
  const isEven = useRecoilValue(evenSelector)
  return <div>
    {isEven ?"it is even":null}
  </div>
}




function Buttons() {
  const [count,setCount] = useRecoilState(countAtom)

  return (
    <div>
      <button onClick={() => setCount(count+1)}>
        Increase
      </button>
      <button onClick={() => setCount(count -1)}>
        Decrease
      </button>
    </div>
  );
}

export default App;
 