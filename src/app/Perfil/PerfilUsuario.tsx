import React from 'react';

interface Usuario {
    nome: string;
    idade: number;
    email: string;
}

interface PerfilUsuarioProps {
    usuario: Usuario;
}

const PerfilUsuario: React.FC<PerfilUsuarioProps> = ({ usuario }) => {
    return (
        <div>
            <h2>Perfil do Usuário</h2>
            <p>Nome: {usuario.nome}</p>
            <p>Idade: {usuario.idade}</p>
            <p>Email: {usuario.email}</p>
        </div>
    );
};

export default PerfilUsuario;
