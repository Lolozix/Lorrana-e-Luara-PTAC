import style from "../styles/login.module.css"

type BotãoProp = {
    titulo: string,
    botao: () => void
}

const Botao: React.FC<BotaoProp> = ({titulo, botao}) => {
    return (
        <button className= {style.botao} onclick={botao}>
            {titulo}
        </button>
    );
}

export default Botao;