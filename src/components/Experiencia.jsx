import { Line } from "./Line";

export const Experiencia = () => {
  return (
    <div className="flex flex-col items-center justify-center gap-4 p-4">
      <h2 className="mt-4 text-4xl">Experiência</h2>
      <Line />
      <p className="text-lg">
        Aqui estão algumas das minhas experiências profissionais e projetos.
      </p>
      {/* Add your experience content here */}
    </div>
  );
};
