import React from 'react'
class Formm extends React.Component {

    componentDidMount() {
        if (this.props.cellphoneList === []) {
            return
        }
        let param = window.location.href
            .replace('http://localhost:3000/cellphone?model=', '')
            .replace('%20', ' ')
            
        if (param !== 'http://localhost:3000/cellphone') {
            let inputCamps = document.getElementsByName('input')
            let list = this.props.cellphoneList
    
            if (list !== undefined){
                list.forEach(element => {
                    if (element.model === param){
                        inputCamps[0].value = element.brand
                        inputCamps[1].value = element.model
                        inputCamps[2].value = element.memory
                        inputCamps[3].value = element.releaseDate
                    }
                })
            }
        }
    }

    render() {

        const submitCellphone = () => {
            let inputName = document.getElementsByName('input')

            const requestOptions = {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    brand: inputName[0].value,
                    model: inputName[1].value,
                    memory: inputName[2].value,
                    releaseDate: inputName[3].value
                })
            };

            fetch('/update', requestOptions);
        }

        return (
            <div className="form-box container">
            {/* Marca, modelo, memória, lançamento */}
            <form>
                <div className="add-phone-form">

                    <h2 className="form-title">Celular</h2>
                    <div className="mb-3 row g-2 align-items-center">
                        <label htmlFor="InputBrand" className="form-label col-4">Marca</label>
                        <input type="text" className="form-control col" id="InputBrand1" name="input" />
                    </div>

                    <div className="mb-3 row g-2 align-items-center">
                        <label htmlFor="InputModel" className="form-label col-4">Modelo</label>
                        <input type="text" className="form-control col" id="InputModel1" name="input" />
                    </div>

                    <div className="mb-3 row g-2 align-items-center">
                        <label htmlFor="InputMemory" className="form-label col-4">Memória</label>
                        <input type="number" className="form-control col" id="InputMemory1" name="input" />
                    </div>

                    <div className="mb-3 row g-2 align-items-center">
                        <label htmlFor="InputReleaseDate" className="form-label col-4">Lançamento</label>
                        <input type="date" className="form-control col" id="InputReleaseDate1" name="input" />
                    </div>

                </div>

            </form>

            <div className="form-buttons d-flex justify-content-evenly">
                <a className="btn btn-danger" href="/" role="button">Cancelar</a>
                <a className="btn btn-primary" href="/" role="button" onClick={submitCellphone} >Salvar</a>
            </div>
        </div>
        )
    }
}
export default Formm;