function DietPlan({dieta}) {
  const diets = {
    Principiante: "🍞 Dejar el pan y harinas, tomar 2 litros de agua al día",
    Intermedio: "🍗🥗 Comer más proteína, más ensaladas y tomar 2 litros de agua al día",
    Avanzado: "💊 Dejar harinas, aumentar proteína, más ensaladas, 2 litros de agua ademas de suplementos"
  };

  return(
    <p className="training-plan">
        Dieta: <strong>{diets[dieta]}</strong>
    </p>
  )
}

export default DietPlan;