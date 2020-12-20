import {Switch, Route, Redirect} from 'react-router-dom'
import AboutPage from './pages/AboutPage'
import TodosPage from './pages/TodosPage'

export const useRoutes: React.FC = () => {
      return (
            <Switch>
                  <Route component={TodosPage} path="/" exact/>
                  <Route component={AboutPage} path="/about" exact/>
                  <Redirect to="/"/>
            </Switch>
      )
}
