import "./App.css";
import { Navbar } from "./layouts/NavbarAndFooter/Navbar";
import { Footer } from "./layouts/NavbarAndFooter/Footer";
import { SearchBooksPage } from "./layouts/SearchBooksPage/SearchBooksPage";
import { HomePage } from "./layouts/HomePage/HomePage";
import { Redirect, Route, Switch, useHistory } from "react-router-dom";
import { BookCheckoutPage } from "./layouts/BookCheckoutPage/BookcheckoutPage";
import { oktaConfig } from "./lib/oktaConfig";
import {OktaAuth,toRelativeUrl} from "@okta/okta-auth-js";
import { LoginCallback, Security } from "@okta/okta-react";
import LoginWidget from "./Auth/LoginWidget";

const oktaAuth = new OktaAuth(oktaConfig);

export const App = () => {

  const customAuthHandler = () => {
    history.push('/login');
  }
  const history = useHistory();
  
  const restoreOriginalUri = async (_oktaAuth: any, originalUri:any) => {
    history.replace(toRelativeUrl(originalUri || '/',window.location.origin));
  };
//d-flex flex-colum min-vh-100
  return (
    <div className="">
      <Security oktaAuth={oktaAuth} restoreOriginalUri={restoreOriginalUri} onAuthRequired={customAuthHandler}>
      <Navbar/>
      <div className="flex-grow-1">
      <Switch>
        <Route path="/" exact>
          <Redirect to='/home' />
          <HomePage />
        </Route>
        <Route path="/home" exact>
          <HomePage />
        </Route>
        <Route path="/search">
          <SearchBooksPage />
        </Route>
        <Route path="/checkout/:bookId">
         <BookCheckoutPage/>
        </Route>
        <Route path='/login' render={() => <LoginWidget config={oktaConfig}/>}/>
        <Route path='/login/callback' component={LoginCallback}/>
      </Switch>
      </div>
      <Footer />
      </Security>
    </div>
  );
};

export default App;
