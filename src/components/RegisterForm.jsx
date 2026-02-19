import { useState } from "react";

function RegisterForm({users, setUsers, onShowStatistics}) {
    const [name, setName] = useState("");
    const [role, setRole] = useState("member");
    const [plan, setPlan] = useState("Principiante")

    const handleSubmit = (e) =>{
        e.preventDefault();

        const newUser = {
            id: Date.now(),
            name,
            role,
            plan: role === "member" ? plan : null,
            createdAt: new Date().toISOString(),
        };
        setUsers([...users, newUser]);
        setName("");
        setRole("member");
        setPlan("Principiante");
    };
    return(
        <form onSubmit={handleSubmit} className="register-form">
            <h2>Registro de Usuario</h2>

            <input
                type="text"
                placeholder="Nombre"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
            />
            <select value={role} onChange={(e) => setRole(e.target.value)}>
                <option value="member">Miembro</option>
                <option value="trainer">Entrenador</option>
            </select>
            {role === "member" && (
                <select value={plan} onChange={(e) => setPlan(e.target.value)}>
                    <option>Principiante</option>
                    <option>Intermedio</option>
                    <option>Avanzado</option>
                </select>
            )}
            <div className="form-buttons">
                <button type="submit">Registrar Usuario</button>
                <button type="button" onClick={onShowStatistics} className="btn-statistics">Estadísticas</button>
            </div>
        </form>
    );
}

export default RegisterForm;