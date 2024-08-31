import{Route, createBrowserRouter, createRoutesFromElements, RouterProvider} from 'react-router-dom';

import Layout from './layouts/layout';
import Homepage from './pages/Homepage';
import Aboutpage from './pages/Aboutpage';
import Workpage from './pages/Workpage';
import Contactpage from './pages/Contactpage';
import Unknown from './components/Unknown';
import Testimonialspage from './pages/Testimonialspage';
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route index path="/" element={<Homepage />} />
      <Route index path="/About" element={<Aboutpage />} />
      <Route index path="/Works" element={<Workpage />} />
      <Route index path="/Reviews" element={<Testimonialspage />} />
      <Route index path="/Contact" element={<Contactpage />} />
      <Route path='*' element={<Unknown />} />
    </Route>,
  )
);

function App() {
  return <RouterProvider router={router} />
}

export default App;