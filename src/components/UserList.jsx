import TrainingPlan from "./TrainingPlan";
import DietPlan from "./DietPlan";

function UserList({ users }) {
    return (
        <div className="header2">
            <h2>👥 Usuarios Registrados</h2>
            {users.length == 0 && <p>No hay usuarios aún</p>}
            {users.map((user) => (
                <div key={user.id} className="user-card">
                    <p className="user-name">{user.name}</p>
                    <TrainingPlan plan={user.plan}/>
                    <DietPlan dieta={user.plan}/>
                </div>
            ))}
        </div>
    );
}

export default UserList;