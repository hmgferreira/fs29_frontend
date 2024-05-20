import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import Painel from "../pages/Painel";
import Produtos from '../pages/Produtos'
import Categorias from '../pages/Categorias'
import NotFound from '../pages/NotFound'

function AppRoutes () {
    return (
        <>
           <BrowserRouter>

            <Link to="/">Painel</Link>
            <Link to="/produtos">Produtos</Link>
            <Link to="/categorias">Categorias</Link>
            
            <Routes>
                <Route path="/" element={<Painel />} />
                <Route path="/produtos" element={<Produtos />} />
                <Route path="/categorias" element={<Categorias />} />
                <Route path="*" element={<NotFound />} />
            </Routes>
           </BrowserRouter>
        </>
    )
}

export default AppRoutes;