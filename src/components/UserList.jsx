import UserCard from "./UserCard";

function UserList({ users = [], setUsers }) {
  if (users.length === 0) {
    return <p>No hay usuarios registrados</p>;
  }

  return (
    <ul>
      {users.map((user) => (
        <li key={user.id}>
          <UserCard user={user} setUsers={setUsers} />
        </li>
      ))}
    </ul>
  );
}

export default UserList;