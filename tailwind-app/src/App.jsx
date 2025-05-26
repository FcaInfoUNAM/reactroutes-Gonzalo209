import { BrowserRouter, Routes, Route } from "react-router-dom"
import About from './About'
import ContactUs from './ContactUs'
import TeamSection from './TeamSection' 
import NotFound from './NotFound'

function App() {
  
  return (
    <>
      <BrowserRouter>
          <Routes>
            <Route path="/" element={
                <div key="product-grid" className="bg-orange-500 p-8 grid grid-cols-4 gap-4">      
                  {products.map(e=>
                  <div key={e.model+"div"}><Card key={e.model} title={e.name} paragraph={e.properties} image={e.b64Image} model={e.model}/></div>)}
                </div>
              }
            />
            <Route path="Contact" element={<ContactUs/>} />
            <Route path="Team" element={<TeamSection/>} />
            <Route path="About" element={<About/>} />
            <Route path="*" element={<NotFound />} />
          </Routes>
      </BrowserRouter>
    </>
  )
}

export default App