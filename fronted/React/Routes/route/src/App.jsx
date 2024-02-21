import { Suspense,lazy } from 'react';

import { BrowserRouter, Route, Routes, useNavigate } from 'react-router-dom';
const Dashboard = lazy(() => import('./components/Dashboard'));
const Landing = lazy(() => import('./components/Landing'));


function App() {
  

  return ( 
    <div>
          <BrowserRouter>
      <Appbar />
      <Routes>
      <Route
          path='/dashboard'
          element={
            <Suspense fallback={<div>{'Loading...'}</div>}>
              <Dashboard />
            </Suspense>
          }
        />

      <Route path='/' element={<Suspense fallback={<div>{'lOADING...'}</div>}><Landing/></Suspense>} />
      </Routes>
    </BrowserRouter>
    </div>

  );
}

function Appbar() {
  const navigate = useNavigate();

  return (
    <div>
      <div>
        <button
          onClick={() => {
            navigate('/');
          }}
        >
          landing page
        </button>
        <button
          onClick={() => {
            navigate('/dashboard');
          }}
        >
          Dashboard
        </button>
      </div>
    </div>
  );
}

export default App;
