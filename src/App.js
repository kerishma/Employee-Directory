import React from 'react';
// import { BrowserRouter as Router, Route } from "react-router-dom";
import Main from './components/Main';
import Wrapper from './components/Wrapper';
import Header from './components/Header';
// import DataArea from './components/DataArea';
// import DateBody from './components/DataBody';
// import DataTable from './components/DataTable';
// import NavBar from './components/NavBar';
// import SearchName from './components/SearchName';
import "./App.css";


const App = () => {
  return (
    <div className="App">
   <Wrapper>
     <Header />
     <Main />
     {/* <DataArea /> */}
     {/* <DateBody />
     <DataTable /> */}
     {/* <NavBar /> */}
     {/* <SearchName /> */}

   </Wrapper>

    </div>
  );
}

export default App;

// function App() {
//   return (
//     <Router>
//       <div>
//         <Navbar />
//         <Wrapper>
//           <Route exact path="/" component={Main} />
//           <Route exact path="/Header" component={Header} />
//           <Route exact path="/DataArea" component={DataArea} />
//           <Route exact path="/DataBody" component={DateBody} />
//           <Route exact path="/DataTable" component={DateTable} />
//           <Route exact path="/NavBar" component={NavBar} />
//           <Route exact path="/SearchName" component={SearchName} />
//         </Wrapper>
//         <Footer />
//       </div>
//     </Router>
//   );
// }


