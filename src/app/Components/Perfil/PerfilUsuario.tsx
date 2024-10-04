import PerfilUsuario from '../components/Perfil/PerfilUsuario';

const PaginaInicial = () => {
  const usuario = {
    nome: 'João Silva',
    idade: 28,
    email: 'joao.silva@example.com'
  };

  return (
    <div>
      <h1>Página Inicial</h1>
      <PerfilUsuario usuario={usuario} />
    </div>
  );
};

export default PaginaInicial;
