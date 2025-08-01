import './tailwind.css'
import { JudgmentsAndDecisions } from './Pages/JudgmentsAndDecisions'
import { JudmentAndDecisionInfoPage } from './Pages/JudmentAndDecisionInfoPage'
import { Route,Routes } from 'react-router-dom'

function App() {

  return (
    // <main className=''>
    //   {/* <JudgmentsAndDecisions /> */}
    //   <JudmentAndDecisionInfoPage/>
    // </main>
    <Routes>
      <Route path="/" element={<JudgmentsAndDecisions />} />
      <Route path="/judgment/:id" element={<JudmentAndDecisionInfoPage />} />
    </Routes>
  )
}

export default App
