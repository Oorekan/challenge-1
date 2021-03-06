import { Switch, Route } from 'react-router-dom';
import HomePage from '../screens/HomePage';
import ResultPage from '../screens/ResultPage';

export default function Main() {
  return (
    <main>
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/city/:cityName" component={ResultPage} />
      </Switch>
    </main>
  );
}
