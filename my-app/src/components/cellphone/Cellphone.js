import { setToEdit } from '../../store/index'
function Cellphone(props) {

    // Modelo
    // <tr>
    //     <td>Apple</td>
    //     <td>Iphone 5</td>
    //     <td>2</td>
    //     <td>15/01/2015</td>
    //     <td><a href="/temp">Alterar</a></td>
    //     <td><a href="/temp">Excluir</a></td>
    // </tr>

    const passToEdit = () => {
        setToEdit(props.phone)
    }

    const deleteCellphone = (() => {
        const requestOptions = {
            method: 'DELETE',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(props.phone)
        };

        fetch('/delete', requestOptions);
    })


    let cellphoneRow = () => {
        let tds = []
        // Object.keys(props.phone).forEach(key => {
        //     tds.push(<td>{props.phone[key]}</td>)
        // })

        tds.push(<td key="brand">{props.phone.brand}</td>)
        tds.push(<td key="model">{props.phone.model}</td>)
        tds.push(<td key="memory">{props.phone.memory}</td>)
        tds.push(<td key="releaseDate">{props.phone.releaseDate}</td>)
        tds.push(<td key="Update" onClick={passToEdit} ><a href={`/cellphone?model=${props.phone.model}`} >Alterar</a></td>)
        tds.push(<td key="Delete" onClick={deleteCellphone} ><a href="/">Excluir</a></td>)

        return <tr>{tds}</tr>
    }
    

    return (
        <>
            {cellphoneRow()}
        </>
    );
}

export default Cellphone;
