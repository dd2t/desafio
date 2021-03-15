import './Display.css';
import Cellphone from '../cellphone/Cellphone'

function Display(props) {

    const testList = {
        cellphoneArray: [
            {
                id: 1,
                brand: 'Apple',
                model: 'Iphone 5',
                memory: '2',
                releaseDate: '15/01/2015'
            },
            {
                id: 2,
                brand: 'Apple',
                model: 'Iphone 6',
                memory: '3',
                releaseDate: '15/01/2016'
            }
        ]
    }

    const tableBody = () => {
        let rows = []
        testList.cellphoneArray.forEach(element => {
            rows.push(<Cellphone  key={element.id} phone={element} />)
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
