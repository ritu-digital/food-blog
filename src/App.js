import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './App.css';
import AllRecipesPage from './components/AllRecipesPage';
import Footer from './components/Footer';
import HomePage from './components/HomePage';
import Navbar from './components/Navbar';
import SearchPage from './components/SearchPage';
import { recipeData } from './data/recipeData';

function App() {
  return (
    <BrowserRouter>
      <div className='app'>
        <Navbar />
        <Switch>
          <Route path='/'>
            <HomePage />
          </Route>
          <Route exact path='/searchpage/mangocheesecake'>
            <SearchPage recipes={recipeData[0]} />
          </Route>
          <Route exact path='/searchpage/raspberry'>
            <SearchPage recipes={recipeData[1]} />
          </Route>
          <Route exact path='/searchpage/mangoicecream'>
            <SearchPage recipes={recipeData[2]} />
          </Route>
          <Route exact path='/recipes'>
            <AllRecipesPage />
          </Route>
        </Switch>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
