import Menu from '../../layouts/Menu';
function Painel() {

    return (
      <div className="">
        <Menu />
        <h1>Dashboard</h1>
        <div className="row mt-4">
          <div className="col-md-6">
            <div className="card">
              <div className="card-header">Gráfico de Barras</div>
              <div className="card-body">
              
              </div>
            </div>
          </div>
          <div className="col-md-6">
            <div className="card">
              <div className="card-header">Gráfico de Pizza</div>
              <div className="card-body">
              
              </div>
            </div>
          </div>
        </div>
      </div>
    )
}

export default Painel;

