
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'

import {createBrowserRouter, createRoutesFromElements, Route, RouterProvider} from 'react-router-dom'
import Home from './pages/landing/Home.tsx'
import About from './pages/About/About.tsx'



const router = createBrowserRouter(
  createRoutesFromElements(
    <>
     <Route path="/" element={<App />}>
     <Route index element={<Home/>}/>
     <Route path='/About' element={<About/>}/>
     </Route>
    </>
  )
)

createRoot(document.getElementById('root')!).render(



    <RouterProvider router={router}>

    </RouterProvider>

)
