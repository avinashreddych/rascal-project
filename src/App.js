
import Home from './screens/home';
import Courses from './screens/courses.jsx';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import CoursePage from './screens/coursepage';

function App(){
  return (
    <>
      <Router>
        <Switch>
          <Route path="/" exact component={Home}></Route>
          <Route path="/courses/" exact component={Courses}></Route> 
          <Route path="/courses/:id/" exact component={CoursePage} ></Route>
        </Switch>
      </Router>
    </>

  );
}

export default App;
