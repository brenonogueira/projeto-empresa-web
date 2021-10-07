import{ BrowserRouter, Switch, Route} from 'react-router-dom';

import Home from './pages/Home';
import pageAsphalt from './pages/PageAsphalt';
import pageConcrete from './pages/PageConcrete';
import pageGround from './pages/PageGround';
import pageLogin from './pages/PageLogin';
import pageCustomers from './pages/PageCustomers';
import Layout from './components/Layout/Layout';

function App(){
    return(
        <BrowserRouter>
            <Switch> 
                <Layout>
                <Route path="/" exact component={Home}/>
                <Route path="/page-asphalt" component={pageAsphalt} />
                <Route path="/page-concrete" component={pageConcrete} />
                <Route path="/page-ground" component={pageGround} />    
                <Route path="/page-login" component={pageLogin} />    
                <Route path="/page-customers" component={pageCustomers} />    
            </Layout>
            </Switch>
        </BrowserRouter>

    );
};

export default App;