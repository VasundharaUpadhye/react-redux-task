import { Route, BrowserRouter, Switch } from "react-router-dom";
import ProductList from "./Components/ProductList";
import NoMatch from "./Components/NoMatch";
import NavBar from "./Components/NavBar";
import Men from "./Components/Men";
import Women from "./Components/Women";
import LowPrice from "./Components/LowPrice";
import HighPrice from "./Components/HighPrice";
import Jewellery from "./Components/Jewellery";
import Electronics from "./Components/Electronics";
import ProductDetails from "./Components/ProductDetails";

export const AppRoutes = () => {
  return (
    <BrowserRouter>
      <NavBar />
      <Switch>
        <Route exact path="/" component={ProductList}></Route>
        <Route path="/men" component={Men}></Route>
        <Route path="/women" component={Women}></Route>
        <Route path="/lowprice" component={LowPrice}></Route>
        <Route path="/highprice" component={HighPrice}></Route>
        <Route path="/jewellery" component={Jewellery}></Route>
        <Route path="/electronics" component={Electronics}></Route>
        <Route path="/products/:productId" component={ProductDetails} />
        <Route path="*" component={NoMatch}></Route>
      </Switch>
    </BrowserRouter>
  );
};
