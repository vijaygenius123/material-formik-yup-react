import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import Notes from "./pages/Notes";
import Create from "./pages/Create";

function App() {
    return (
        <Router>
            <Routes>
                <Route exact path="/" component={<Notes/>}/>
                <Route path="/create" component={<Create/>}/>
            </Routes>
        </Router>
    );
}

export default App;
