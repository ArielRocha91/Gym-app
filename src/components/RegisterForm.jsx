import { useState } from "react";

function RegisterForm({users, setUsers}) {
    const [name, setName] = useState("");
    const [plan, setPlan] = useState("Principiante")

    const handleSubmit = (e) =>{
        e.preventDefault();

        const newUser = {
            id:Date.now(),
            name,
            plan,
        };
        setUsers([...users, newUser]);
        setName("");
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
            <select value={plan} onChange={(e) => setPlan(e.target.value)}>
                <option>Principiante</option>
                <option>Intermedio</option>
                <option>Avanzado</option>
            </select>
            <button type="submit">Registrar Usuario</button>
        </form>
    );
}

export default RegisterForm;