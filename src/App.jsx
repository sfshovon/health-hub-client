import { Toaster } from 'react-hot-toast'
import { RouterProvider } from 'react-router-dom'
import './App.css'
import { router } from './Routes/Routes'

function App() {

  return (
    <div className="max-w-[1440px] mx-auto">
      <RouterProvider router={router }/>
      <Toaster/>
    </div>
  )
}

export default App
