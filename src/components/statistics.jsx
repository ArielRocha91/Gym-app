function Statistics({ users = [], onBack }) {
  // Contar miembros
  const countByPlan = {
    Principiante: users.filter(u => u.plan === "Principiante").length,
    Intermedio: users.filter(u => u.plan === "Intermedio").length,
    Avanzado: users.filter(u => u.plan === "Avanzado").length,
  };

  // Contar entrenadores
  const countTrainers = users.filter(u => u.role === "trainer").length;

  const totalUsers = users.length;

  return (
    <div className="statistics-container">
      <h2>Estadísticas de Usuarios</h2>
      <div className="statistics-cards">
        <div className="stat-card trainer">
          <div className="stat-icon">👲👊</div>
          <h3>Entrenadores</h3>
          <div className="stat-number">{countTrainers}</div>
          <p className="stat-percentage">
            {totalUsers > 0 ? ((countTrainers / totalUsers) * 100).toFixed(1) : 0}%
          </p>
        </div>

        <div className="stat-card principiante">
          <div className="stat-icon">🐥</div>
          <h3>Principiante</h3>
          <div className="stat-number">{countByPlan.Principiante}</div>
          <p className="stat-percentage">
            {totalUsers > 0 ? ((countByPlan.Principiante / totalUsers) * 100).toFixed(1) : 0}%
          </p>
        </div>

        <div className="stat-card intermedio">
          <div className="stat-icon">💪</div>
          <h3>Intermedio</h3>
          <div className="stat-number">{countByPlan.Intermedio}</div>
          <p className="stat-percentage">
            {totalUsers > 0 ? ((countByPlan.Intermedio / totalUsers) * 100).toFixed(1) : 0}%
          </p>
        </div>

        <div className="stat-card avanzado">
          <div className="stat-icon">🏋️</div>
          <h3>Avanzado</h3>
          <div className="stat-number">{countByPlan.Avanzado}</div>
          <p className="stat-percentage">
            {totalUsers > 0 ? ((countByPlan.Avanzado / totalUsers) * 100).toFixed(1) : 0}%
          </p>
        </div>
      </div>

      <div className="total-stats">
        <p>Total de usuarios: <strong>{totalUsers}</strong></p>
      </div>

      <button className="btn-back" onClick={onBack}>Volver a Lista de Usuarios</button>
    </div>
  );
}

export default Statistics;
