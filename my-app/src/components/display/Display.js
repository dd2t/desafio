import './Display.css';
import Cellphone from '../cellphone/Cellphone'

function Display(props) {

    const tableBody = () => {
        if (props.cellphoneList === 0) {
            return
        }

        let rows = []
        let list = props.cellphoneList.cellphoneArray;
        let i = 1

        list.forEach(element => {
            rows.push(<Cellphone  key={i} phone={element} />)
            i++
        })

        return <tbody>{rows}</tbody>
    }

  return (
    <div className="display-box">
        <div className="new-phone">
            <a className="btn btn-primary" href="/cellphone" id="new-phone-button" role="button">Novo celular</a>
        </div>

        <div className="phone-table">
            <table className="table table-striped table-hover table-bordered border-dark">
                <thead>
                    <tr className="table-info">
                        <td>Marca</td>
                        <td>Modelo</td>
                        <td>Capacidade de memória (GB)</td>
                        <td>Data de lançamento</td>
                        <td>Alterar</td>
                        <td>Excluir</td>
                    </tr>
                </thead>
                {tableBody()}
            </table>
        </div>
    </div>
  );
}

export default Display;
