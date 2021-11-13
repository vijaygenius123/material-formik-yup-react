import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import Notes from "./pages/Notes";
import Create from "./pages/Create";

function App() {
    return (
        <Router>
            <Switch>
                <Route exact path="/" component={<Notes/>}></Route>
                <Route path="/create" component={<Create/>}></Route>
            </Switch>
        </Router>
    );
}

export default App;
