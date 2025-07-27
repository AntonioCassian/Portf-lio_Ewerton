import FotoFundo from "../assets/img/foto_fundo.png";
// import Foto from "../assets/img/Foto.png";
import { Line } from "../components/Line";
import { Footer } from "../components/Footer";
import { Habilidades } from "../components/Habilidades";
import { Experiencia } from "../components/Experiencia";

export const Sobre = () => {
  return (
    <>
      <main className="flex gap-5 p-2 mt-5">
        <div className="flex-1">
          <div
            className="relative h-[92%] w-[440px] bg-contain bg-center bg-no-repeat z-[9999] overflow-hidden"
            style={{ backgroundImage: `url(${FotoFundo})` }}
          >
            {/* <div className="absolute w-[65%] h-[73.555%] top-[50.5px] left-[72px] bottom-0 right-0">
              <img src={Foto} className="object-cover w-full h-full" />
            </div> */}
            <div className="absolute bottom-[37px] px-[5.4vw] w-full">
              <div className="flex justify-between">
              <p className="text-2xl">Ewerton</p>
              <p className="text-2xl">2025</p>
              </div>
            </div>
          </div>
        </div>

        <div className="flex-col p-8">
          <div className="flex gap-9">
            <div className="flex-1/2">
              <div className="text-start">
                <h1 className="text-4xl">Oi!</h1>
              </div>
              <div className="mt-9">
                <p className="text-lg">
                  Meu nome é Ewerton, sou desenvolvedor web e estou sempre em
                  busca de novos desafios. Tenho experiência em React, Node.js e
                  outras tecnologias modernas. Estou animado para compartilhar
                  meus projetos e colaborar com outros desenvolvedores.
                </p>
              </div>

              <Line />

              <div className="mt-4">
                <div className="flex flex-col items-start">
                  <h2 className="text-4xl">Formação</h2>
                  <div className="text-start mt-9">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Nulla aliquid illo magni nisi veniam blanditiis fuga
                    incidunt id unde quia. Sed fugit quidem, cumque consequuntur
                    iste quibusdam harum corporis hic!
                  </div>
                </div>
              </div>
            </div>

            <div className="flex flex-col gap-4 mt-4 flex-1/3">
              <Habilidades />
              <Experiencia />
            </div>
          </div>

          <Footer />
        </div>
      </main>
    </>
  );
};
