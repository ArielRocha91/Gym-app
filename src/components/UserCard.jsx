import { useState } from "react";
import DietPlan from "./DietPlan";
import TrainingPlan from "./TrainingPlan";

function UserCard({ user, setUsers }) {
    const [isEditing, setIsEditing] = useState(false);
    const [plan, setPlan] = useState(user.plan);

    const handleDelete = () => {
        setUsers((prev) => prev.filter((u) => u.id !== user.id));
    };
    const handleSave = () => {
        setUsers((prev) => prev.map((u) => (u.id === user.id ? { ...u, plan } : u)));
        setIsEditing(false);
    };
    const createdAt = user.createdAt ? new Date(user.createdAt) : null;
    const createdAtLabel = createdAt && !Number.isNaN(createdAt.getTime())
        ? createdAt.toLocaleDateString()
        : "Sin fecha";
    return (
        <div className="user-card">
            <div className="user-card-header">
                <h3>{user.name}</h3>
                <button className="edit-btn" onClick={() => setIsEditing((prev) => !prev)}>
                    Editar dieta
                </button>
            </div>
            {isEditing ? (
                <div className="edit-plan">
                    <select value={plan} onChange={(e) => setPlan(e.target.value)}>
                        <option>Principiante</option>
                        <option>Intermedio</option>
                        <option>Avanzado</option>
                    </select>
                    <button className="save-btn" onClick={handleSave}>Guardar</button>
                </div>
            ) : null}
            <TrainingPlan plan={user.plan} />
            <DietPlan plan={user.plan} />
            <small>Registrado: {createdAtLabel}</small>

            <br />
            <button onClick={handleDelete}>Eliminar</button>
        </div>
    )
}

export default UserCard;
