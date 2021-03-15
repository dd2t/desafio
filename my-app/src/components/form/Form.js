import './Form.css'
import {Link} from "react-router-dom"

function Form(props) {
    return (
        <div className="form-box container">
            {/* Marca, modelo, memória, lançamento */}
            <div className="add-phone-form">
                <h2 className="form-title">Celular</h2>
                <form>
                    <div className="mb-3 row g-2 align-items-center">
                        <label for="InputBrand" className="form-label col-4">Marca</label>
                        <input type="text" className="form-control col" id="InputBrand1" />
                    </div>
                    <div className="mb-3 row g-2 align-items-center">
                        <label for="InputModel" className="form-label col-4">Modelo</label>
                        <input type="text" className="form-control col" id="InputModel1" />
                    </div>
                    <div className="mb-3 row g-2 align-items-center">
                        <label for="InputMemory" className="form-label col-4">Memória</label>
                        <input type="number" className="form-control col" id="InputMemory1" />
                    </div>
                    <div className="mb-3 row g-2 align-items-center">
                        <label for="InputReleaseDate" className="form-label col-4">Lançamento</label>
                        <input type="date" className="form-control col" id="InputReleaseDate1" />
                    </div>
                </form>
            </div>
            <div className="form-buttons d-flex justify-content-evenly">
                <a className="btn btn-danger" href="/" role="button">Cancelar</a>
                <Link to="/">
                    <button type="submit" className="btn btn-primary">Salvar</button>
                </Link>
            </div>
        </div>
    )
}

export default Form;