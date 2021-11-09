import{ BrowserRouter, Switch, Route} from 'react-router-dom';

import Home from './pages/Home';
import pageAsphalt from './pages/PageAsphalt';
import pageConcrete from './pages/PageConcrete';
import pageGround from './pages/PageGround';
import pageLogin from './pages/PageLogin';
import pageCustomers from './pages/PageCustomers';
import Layout from './components/Layout/Layout';
import pageAbautUs from './pages/PageAbautUs/index';
import pageSlump from './pages/PageConcrete/Services_Slump/index';
import pageEsclerometria from './pages/PageConcrete/Services_Esclerometria/index';
import pageRomper from './pages/PageConcrete/Services_Romper/index';
import pageExtracao from './pages/PageConcrete/Services_Extracao/index';
import pageBetume from './pages/PageAsphalt/Services_Betume/index';
import pageImprimacao from './pages/PageAsphalt/Services_Imprimacao/index';
import pageMarshell from './pages/PageAsphalt/Services_Marshell/index';
import pageTeorLigante from './pages/PageAsphalt/Services_TeorLigante/index'
import pageCalifornia from './pages/PageGround/Services_California/index'
import pageGranulometria from './pages/PageGround/Services_Granulometria/index'
import pageInsitu from './pages/PageGround/Services_Insitu/index'
import pageLiquidez from './pages/PageGround/Services_Liquidez/index'
import pagePlaticidade from './pages/PageGround/Services_Plasticidade/index'
import pageSondagem from './pages/PageGround/Services_Spt/index'
import pageValues from './pages/Missão_Valores_visão/index'

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
                    <Route path="/page-abautUs" component={pageAbautUs} />    
                    <Route path="/page-slump" component={pageSlump} />    
                    <Route path="/page-esclerometria" component={pageEsclerometria} />    
                    <Route path="/page-romper" component={pageRomper} />    
                    <Route path="/page-extracao" component={pageExtracao} />    
                    <Route path="/page-betume" component={pageBetume} />    
                    <Route path="/page-imprimacao" component={pageImprimacao} />    
                    <Route path="/page-marshell" component={pageMarshell} />    
                    <Route path="/page-teorligante" component={pageTeorLigante} />    
                    <Route path="/page-california" component={pageCalifornia} />    
                    <Route path="/page-granulometria" component={pageGranulometria} />    
                    <Route path="/page-insitu" component={pageInsitu} />    
                    <Route path="/page-liquidez" component={pageLiquidez} />    
                    <Route path="/page-plasticidade" component={pagePlaticidade} />    
                    <Route path="/page-sondagem" component={pageSondagem} />    
                    <Route path="/page-values" component={pageValues} />    
                </Layout>
            </Switch>
        </BrowserRouter>

    );
};

export default App;