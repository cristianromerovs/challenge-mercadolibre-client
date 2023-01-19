import React from 'react'
import { Route, Routes } from 'react-router-dom'
import MyNav from './components/MyNav'
import { Compras } from './components/pages/Compras'
import { Profile } from './components/pages/Profile'
import { NotFound } from './components/pages/NotFound'

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

  const Home = () => <h1>Inicio</h1>

  return (
    <>
      <MyNav />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/profile' element={<Profile/>}></Route>
        <Route path='/compras/:id/' element={<Compras/>} />
        <Route path='*' element={<NotFound />}></Route>
      </Routes>
    </>
  )
}

export default App