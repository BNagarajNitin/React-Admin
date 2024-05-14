import {Admin, EditGuesser, ListGuesser, Resource} from 'react-admin';
import jsonServerProvider from 'ra-data-json-server';
import { PosterList } from './components/PosterList';
import { PosterEdit } from './components/PosterEdit';
import { PosterCreate } from './components/PosterCreate';
import { CategoryList } from './components/CategoryList';
import { CategoryCreate } from './components/CategoryCreate';
import { CategoryEdit } from './components/CategoryEdit';

const dataProvider=jsonServerProvider("http://localhost:3000")



const App = ()=> <Admin dataProvider={dataProvider}>
   <Resource name='categories' list={CategoryList} edit={CategoryEdit} create={CategoryCreate} />
  <Resource name='posters' list={PosterList} edit={PosterEdit} create={PosterCreate}/>
</Admin>

export default App;