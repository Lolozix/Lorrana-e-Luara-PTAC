 import styles from "../PaginaDeCadastro/page.module.css"
 
 type BotaoProp = {
    titulo: string,
    botao: () => void
}

const Botao: React.FC<BotaoProp> = ({titulo, botao}) => {
    return (
        <button className={styles.btn} onClick={botao}>
            {titulo}
        </button>
    );
}

export default Botao;