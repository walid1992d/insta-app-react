import HomePage from './home/Home';
import PlaygroundPage from './playground/Playground';
import { string } from 'prop-types';
import {RouteProps, withRouter} from 'react-router-dom'


const baseUrl = "";

export const ROUTES: RouteProps[] = [
    {path:baseUrl+"/", exact:true, component:HomePage},
    {path:baseUrl+"/home", component:HomePage},
    {path:baseUrl+"/playground", component:PlaygroundPage}

]