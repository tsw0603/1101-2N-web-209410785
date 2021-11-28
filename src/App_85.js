import { Switch, Route } from 'react-router-dom';
import Homepage_85 from './pages/Homepage_85';
import Header_85 from './components/Header_85';
import Footer_85 from './components/Footer_85';
import Product_85 from './pages/ProductPage_85';
import Coffee_85 from './pages/CoffeePage_85';
import Store_85 from './pages/StorePage_85';
import StarCourtesy_85 from './pages/StarCourtesyPage_85';
import FourthSpace_85 from './pages/FourthSpacePage_85';
import GiftArea_85 from './pages/GiftAreaPage_85';
import OnlineStore_85 from './pages/OnlineStorePage_85';
import './App_85.scss';


const App_85 = () => {
  return (
    <div>
      <Header_85 />
      <Switch>
        <Route exact path='/' component={Homepage_85} />
        <Route exact path='/CoffeePage_85' component={Coffee_85} />
        <Route exact path='/Product_85' component={Product_85} />
        <Route exact path='/StorePage_85' component={Store_85} />
        <Route exact path='/StarCourtesyPage_85' component={StarCourtesy_85} />
        <Route exact path='FourthSpacePage_85' component={FourthSpace_85} />
        <Route exact path='GiftAreaPage_85' component={GiftArea_85} />
        <Route exact path='/OnlineStorePage_85' component={OnlineStore_85} />
      </Switch>
      <Footer_85 />
    </div>
  );
}

export default App_85;
