import { useContext } from "react";
import { AuthContext } from "../App";

function Menu() {

    const { setLogado } = useContext(AuthContext);

    return (
        <>
            <nav className="navbar navbar-expand-lg bg-body-tertiary">
                <div className="container-fluid">
                <a className="navbar-brand" href="#">DigCollege</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav">
                    <li className="nav-item">
                    <a className="nav-link active" aria-current="page" href="#">Painel</a>
                    </li>
                    <li className="nav-item">
                    <a className="nav-link" href="#">Produtos</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">Categorias</a>
                    </li>
                    <li className="nav-item">
                        <a onClick={() => setLogado(false)}  className="nav-link" aria-disabled="true">Sair</a>
                    </li>
                </ul>
                </div>
            </div>
            </nav>
        </>
    )
}

export default Menu;