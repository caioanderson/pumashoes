import { Switch, Route } from 'react-router-dom';

import { Home } from './pages/Home';
import { Cart } from './pages/Cart';

export function Routes() {
    return (
        <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/cart" exact component={Cart} />
            {/* <ExternalRedirect exact path="/instagram" to='https://www.instagram.com/puma/' /> */}
        </Switch>
    )
}