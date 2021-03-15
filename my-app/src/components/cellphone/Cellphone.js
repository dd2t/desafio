import './Cellphone.css';

function Cellphone(props) {

    // Model
    // <tr>
    //     <td>Apple</td>
    //     <td>Iphone 5</td>
    //     <td>2</td>
    //     <td>15/01/2015</td>
    //     <td><a href="/temp">Alterar</a></td>
    //     <td><a href="/temp">Excluir</a></td>
    // </tr>

    let cellphoneRow = () => {
        let tds = []
        // Object.keys(props.phone).forEach(key => {
        //     tds.push(<td>{props.phone[key]}</td>)
        // })

        tds.push(<td key={'brand'}>{props.phone.brand}</td>)
        tds.push(<td key={'model'}>{props.phone.model}</td>)
        tds.push(<td key={'memory'}>{props.phone.memory}</td>)
        tds.push(<td key={'releaseDate'}>{props.phone.releaseDate}</td>)
        tds.push(<td key={'Update'}><a href="/cellphone" >Alterar</a></td>)
        tds.push(<td key={'Delete'}><a href="/cellphone">Excluir</a></td>)

        return <tr>{tds}</tr>
    }

    return (
        <>
            {cellphoneRow()}
        </>
    );
}

export default Cellphone;
