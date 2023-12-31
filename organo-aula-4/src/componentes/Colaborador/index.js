import './Colaborador.css'

const Colaborador = ({ nome, imagem, cargo }) => {
    return (<div className='colaborador'>
        <div className='cabecalho'>
            <img src='https://github.com/RodriguesAna.png'  alt='Ana Maria'/>
        </div>
        <div className='rodape'>
            <h4>{nome}</h4>
            <h5>{cargo}</h5>
        </div>
    </div>)
}

export default Colaborador