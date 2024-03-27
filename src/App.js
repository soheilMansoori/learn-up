import { useEffect } from 'react';
import { useRoutes, useLocation } from 'react-router-dom';
import { useQuery } from 'react-query';
import { useCookies } from 'react-cookie';
import { useDispatch } from 'react-redux';
import { refreshTokenAction } from './redux/reducers/userReducer';
import router from './router/router';

function App() {
  const location = useLocation()
  const dispatch = useDispatch()
  const routes = useRoutes(router); // page routes
  const [mainCookie] = useCookies(["token"]); // get token from cookie
  const { data, isFetched } = useQuery("main-user", () => fetch(`${process.env.REACT_APP_BASE_URL}/users?token=${mainCookie.token}`).then(res => res.json()));
  
  useEffect(() => { // handel a refresh token
    if (mainCookie.token) {
      isFetched && dispatch(refreshTokenAction(data[0])) // dispatch the refresh token action
    } else {

    }
  }, [data])

  useEffect(() => { // run when pages change and scroll to top of page
    window.document.documentElement.scrollTo({
      top: 0,
      left: 0,
    })
  }, [location]);

  return routes; // routes render here
}

export default App;
