import React from 'react';
import {createRoot} from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { Child, Parent } from './components/parent';
import { About } from './pages/about';
import { Acceuil } from './pages/Acceuil';
import { Cv } from './pages/cv';
import { Details } from './pages/details';
import { Effect } from './pages/Effect';
import { Formulaire } from './pages/Formulaire';
import { Home } from './pages/Home';
import {Layout } from './pages/Layout';
import { LoginPage } from './pages/loginPage';
import { Page404 } from './pages/Page404';
import { Textarea } from './pages/textearea';
import { Search } from './pages/Search';
import { Cast } from './pages/cast';


const root = document.getElementById('root')
const app = createRoot(root)


const App = () => {

    const [name, setName] = React.useState('')

    const router = createBrowserRouter([
        //{path: '/', element: <Home/>},
        //{path: 'formulaire', element: <Formulaire/>},
        //{path: "pokemons/:id", element : <Details/>},
        //{path: "pokemons", element : <Effect/>},
        //{path: "parent", element : <Parent/>, children : [{path: "child", element : <Child/>}]}
        //{path: '/', element: <Layout connected={true} name={name}/>, children : [{path: "acceuil", element : <Acceuil/>},{path: "about", element : <About name={name}/>}]},
        //{path: 'loginPage', element: <LoginPage setName={setName}/>},
        //{path: ':pages', element: <Page404 />}
        //{path: 'cv', element: <Cv/>},
        //{path: 'text', element: <Textarea/>},
        {path: '/', element: <Search/>},
        {path: 'cast/:id', element: <Cast/>}
    ])

    
    return(

    <RouterProvider router={router}/>
    )
}

app.render(<React.StrictMode>
    <App/>
</React.StrictMode>)