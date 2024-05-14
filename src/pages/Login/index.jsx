import { useContext } from "react";
import { AuthContext } from "../../App";
import Swal from 'sweetalert2'

function Login() {

    const { setLogado } = useContext(AuthContext);

    function logar() {
        // CAPTURA LOGIN E SENHA DIGITADOS
        // ENVIA PARA O BACKEND PARA CONSULTAR NO BANCO OS DADOS.
        const login = true;
        if(login) {
            Swal.fire({
                icon: "success",
                title: "Sucesso",
                text: "Usuario Logado com Sucesso!",
            });
            setLogado(true)
        } else {
            Swal.fire({
                icon: "error",
                title: "Oops...",
                text: "Login ou senha incorreto!",
            });
        }
    }

    return (
        <div className="container">
            <div className="row">
                <div className="col-md-4 offset-md-4">
                    <form className="mt-5">
                        <div>
                            <label htmlFor="">Login</label>
                            <input type="text" className="form-control" name="" id="" />
                        </div>
                        <div className="mt-3">
                            <label htmlFor="">Senha</label>
                            <input type="password" className="form-control" name="" id="" />
                        </div> 
                        <div className="mt-3">
                            <button onClick={logar} type="button" className="btn btn-primary btn-sm">Acessar</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Login;