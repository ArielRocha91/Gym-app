function TrainingPlan({plan}) {
  const plans = {
    Principiante: "🏃 Cardio + Full Body 3x/semana",
    Intermedio: "💪 Fuerza + Cardio 4x/semana",
    Avanzado: "🔥 Rutina dividida 6x/semana "
  };

  return(
    <p className="training-plan">
        Plan: <strong>{plans[plan]}</strong>
    </p>
  )
}

export default TrainingPlan;