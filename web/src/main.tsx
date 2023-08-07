import React from 'react'
import ReactDOM from 'react-dom/client'
import { MainRoutes } from './routes'
import { BrowserRouter } from 'react-router-dom'
import { ApolloProvider } from "@apollo/client";
import { client } from "./graphql/client";
import  './styles/global.css'


ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <BrowserRouter>
      <ApolloProvider client={client}>
        <MainRoutes />
      </ApolloProvider>
    </BrowserRouter>
  </React.StrictMode>,
)
