
import MainPage from "./Mainpage/MainPage";
import { kebabCase } from 'lodash'
import dashboard from "./Dashboard/dashboard";

export default {
    MainPage,
    dashboard
}
const createPagesConf = ( pagesList ) =>
  pagesList.map( ( { name, roles, ...rest } ) => ( {
    component: name,
    link: kebabCase( name ),
    roles,
    title: kebabCase( name ).split( '-' ).join( ' ' ),
    ...rest,
  } ) )

const Page = [
    {name:'MainPage'}
]

export const MainPageConf = createPagesConf(Page)