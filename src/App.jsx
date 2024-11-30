import { createBrowserRouter, RouterProvider } from "react-router-dom"
import RootLayout from "./layout/rootLayout"
import Index from "./pages"


const router = createBrowserRouter([
  {
    path:"/",
    element: <RootLayout/>,

    children:
    [
      {
        index: true,
        element: <Index/>
      }
    ]
  }
])

function App() {
  

  return (
    <>
    <RouterProvider router = {router}/>
    </>
  )
}

export default App
