import { Route, Switch } from 'react-router-dom'
import { ASIC_IP_Search, RecentASIC_IPs, Home} from "./pages"

function App() {
  return (
    <Switch>
      <Route exact path="/" component={Home}/>
        <Route exact path="/search" component={ASIC_IP_Search}/>
        <Route exact path="/recent" component={RecentASIC_IPs}/>
    </Switch>
  );
}

export default App;
