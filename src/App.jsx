import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Main from "./Components/main-component/Main";
import Form from "./Components/Forms/Form";
import Ticket from "./Components/ticketComponent/Ticket";
import Header from "./Components/Header";

const App = () => {
  return (
    <Router>  
      <Header />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/get-ticket" element={<Form />} />
        <Route path="/got-ticket" element={<Ticket />} />


      </Routes>
    </Router>
  );
};

export default App;
