import { useAuth } from "../context/AuthContext";
import UserList from "../components/UserList";
import TrainingPlan from "../components/TrainingPlan";
import DietPlan from "../components/DietPlan";

export default function Dashboard() {
    const { user, logout } = useAuth();
    return (
        <div>
            <h1>Gym Dashboard</h1>
            <p>Rol: {user.role}</p>
            <button onClick={logout}>Cerrar Sesión</button>
            <UserList />
            <TrainingPlan />
            <DietPlan />
        </div>
    );
}