import PerfilUsuario from '../components/Perfil/PerfilUsuario';

const PaginaInicial = () => {
  const usuario = {
    nome: 'João Silva',
    idade: 28,
    email: 'joao.silva@example.com'
  };

  return (
    <div>
      <h1>Nome: {usuario.nome}</h1>
      <PerfilUsuario usuario={usuario} />
      <p> Idade: {usuario.idade}</p>
    </div>
  )
};

export default PaginaInicial;
