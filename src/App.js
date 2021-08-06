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
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <div className='app'>
        <Navbar />
        <Switch>
          <Route path='/searchpage/mangocheesecake'>
            <SearchPage recipes={recipeData[0]} />
          </Route>
          <Route path='/searchpage/raspberry'>
            <SearchPage recipes={recipeData[1]} />
          </Route>
          <Route path='/searchpage/mangoicecream'>
            <SearchPage recipes={recipeData[2]} />
          </Route>
          <Route path='/recipes'>
            <AllRecipesPage />
          </Route>
          <Route path='/'>
            <HomePage />
          </Route>
        </Switch>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
