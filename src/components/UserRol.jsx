function UserRol({ role }) {
    const roles = {
        trainer: "Entrenador",
        member: "Miembro",
    };
    return <span>{roles[role] || "Desconocido"}</span>;
}

export default UserRol;