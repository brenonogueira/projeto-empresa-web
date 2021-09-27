import{ BrowserRouter, Switch, Route} from 'react-router-dom';

import Home from './pages/Home';
import pageAsphalt from './pages/PageAsphalt';
import pageConcrete from './pages/PageConcrete';
import pageGround from './pages/PageGround';

function App(){
    return(
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={Home}/>
                <Route path="/page-asphalt" component={pageAsphalt} />
                <Route path="/page-concrete" component={pageConcrete} />
                <Route path="/page-ground" component={pageGround} />    
            </Switch>
        </BrowserRouter>

    );
};

export default App;