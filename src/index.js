import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom'
import { QueryClient, QueryClientProvider } from 'react-query'
import App from './App';


// react query devtools 
import { ReactQueryDevtools } from 'react-query/devtools'


// redux configs 
import { Provider } from 'react-redux'
import store from './redux/store'


// Custom CSS
import './css/style.css';

// Custom Color Option  
import './css/colors.css'

// react query configs
const queryClient = new QueryClient()

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter >
    <Provider store={store}>
      <QueryClientProvider client={queryClient}>
        <App />
        {/* react query devtools component */}
        <ReactQueryDevtools position='top-right' initialIsOpen={false} /> 
      </QueryClientProvider>
    </Provider>
  </BrowserRouter>
);
