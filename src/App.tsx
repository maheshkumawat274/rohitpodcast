import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Footer from "./components/footer/Footer"
import PrivacyPolicy from "./components/PrivacyPolicy"
import TermsConditions from "./components/TermConditions"
import NoRefundPolicy from "./components/RefundCancellation"
import Homepage from "./pages/home";


const App = () => {
  return (
    <>
     <Router>
      <Routes>
      
       <Route path="/" element={ <Homepage/>} />
       <Route path="/privacy-policy" element={<PrivacyPolicy/>}/>
       <Route path="/terms-conditions" element={<TermsConditions/>}/>
       <Route path="/refund_returns" element={<NoRefundPolicy/>}/>
    </Routes>
     <Footer/>
     </Router>
    </>
  )
}

export default App