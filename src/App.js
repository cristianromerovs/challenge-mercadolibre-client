import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { MyNav } from './Components/MyNav'
import { Compras } from './Pages/Compras'
import { Profile } from './Pages/Profile'
import { NotFound } from './Pages/NotFound'
import { Home } from './Pages/Home'

import Container from 'react-bootstrap/Container';
import { Footer } from './Components/Footer'

function App() {

  // const [backendData, setBackendData] = useState([{}])

  // useEffect(() => {
  //   fetch("/api")
  //     .then(
  //       response => response.json()
  //     )
  //     .then(
  //       data => {
  //         setBackendData(data)
  //       }
  //     )
  // }, [])

  // return (
  //   <div>
  //     {(typeof backendData.users === 'undefined') ? (
  //       <p>Cargando Datos...</p>
  //     ) : (
  //       backendData.users.map((user, i) => (
  //         <p key={i}>{user}</p>
  //       ))
  //     )}
  //   </div>
  // )

  return (
    <>
      <MyNav />
      <Container>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/profile' element={<Profile />}></Route>
          <Route path='/compras/:id/' element={<Compras />} />
          <Route path='*' element={<NotFound />}></Route>
        </Routes>
      </Container>
      <Footer/>
    </>
  )
}

export default App