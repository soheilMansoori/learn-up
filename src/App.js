import { useEffect } from 'react';
import { useRoutes, useLocation } from 'react-router-dom'
import router from './router/router'

function App() {
  const location = useLocation()
  const routes = useRoutes(router); // page routes

  useEffect(() => { // run when pages change and scroll to top of page
    window.document.documentElement.scrollTo({
      top: 0,
      left: 0,
    })
  }, [location]);

  return routes;
}

export default App;
