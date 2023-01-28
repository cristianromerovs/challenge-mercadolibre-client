import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { MyNav } from './Components/MyNav'
import { Compras } from './Pages/Compras'
import { Profile } from './Pages/Profile'
import { NotFound } from './Pages/NotFound'
import { Home } from './Pages/Home'

import { Footer } from './Components/Footer'

import { QueryClientProvider, QueryClient } from "react-query"

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={ queryClient }>
      <MyNav />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/profile' element={<Profile />}></Route>
        <Route path='/compras/:id/' element={<Compras />} />
        <Route path='*' element={<NotFound />}></Route>
      </Routes>
      <Footer />
    </QueryClientProvider>
  )
}

export default App