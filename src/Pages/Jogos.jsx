import { Line } from "../components/Line";
import Uebity from "../assets/jogos/uebeti.png";
import { IconHab } from "../components/IconHab";
import { useState } from "react";

export const Jogos = () => {
  const Lista_Jogos = [
    {
      id: 0,
      imagem: Uebity,
      name: "Uebity",
      link: "https://wertongomes.github.io/Uebeti/",
    },
    {
      id: 1,
      imagem: Uebity,
      name: "Uebity",
      link: "https://wertongomes.github.io/Grief-TLSS",
    },
    {
      id: 2,
      imagem: Uebity,
      name: "Uebity",
      link: "https://wertongomes.github.io/Grief-TLSS",
    },
    {
      id: 3,
      imagem: Uebity,
      name: "Uebity",
      link: "https://wertongomes.github.io/Grief-TLSS",
    },
    {
      id: 4,
      imagem: Uebity,
      name: "Uebity",
      link: "https://wertongomes.github.io/Grief-TLSS",
    },
    {
      id: 6,
      imagem: Uebity,
      name: "Uebity",
      link: "https://wertongomes.github.io/Grief-TLSS",
    },
  ];

  const [open, setOpen] = useState(false);
  const [selectedGame, setSelectedGame] = useState("");
  const handleOpen = (link) => {
    setSelectedGame(link);
    return setOpen(!open);
  };

  //    useEffect(() => {
  //   if (!open) return;

  //   const iframe = document.getElementById("iframe");
  //   if (!iframe) return;

  //   const iframeWindow = iframe.contentWindow;
  //   const iframeDocument = iframe.contentDocument || iframeWindow?.document;

  //   const footer = iframeDocument?.querySelector("#unity-footer");
  //   if (footer) {
  //     footer.style.display = "none";
  //   }
  // }, [open]);
  const chunkedGames = [];
  for (let i = 0; i < Lista_Jogos.length; i += 4) {
    chunkedGames.push(Lista_Jogos.slice(i, i + 4));
  }

  return (
    <>
      <main className="pt-8 pr-14 pl-14">
        {chunkedGames.map((grupo, index) => (
          <div key={index} className="mb-6">
            <div className="grid grid-cols-4 gap-4">
              {grupo.map((item) => (
                <div key={item.id}>
                  <IconHab
                    onClick={() => handleOpen(item.link)}
                    icone={item.imagem}
                    name={item.name}
                    className={"cursor-pointer relative"}
                    circleClassName={"!h-[117px] !w-[117px] relative z-4"}
                    sty={true}
                    positionImg={"w-[86px] h-[86px] mx-[10px] my-[13px]"}
                  />
                </div>
              ))}
            </div>

            {/* Linha reta que ocupa todo o espaço */}
            <div className="w-full mt-4">
              <Line />
            </div>
          </div>
        ))}
      </main>

      <>
        {open && (
          <div className="fixed top-0 bottom-0 left-0 right-0 bg-blue-950 z-[900] bg-opacity-40 backdrop-blur-2xl">
            <div
              className="absolute right-3.5 text-2xl top-2.5 text-amber-50 cursor-pointer"
              onClick={() => setOpen(false)}
            >
              X
            </div>
            <div className="flex items-center justify-center w-full h-full">
              <div className="h-full w-4xl">
                <iframe
                  width={"100%"}
                  height={"100%"}
                  className="w-full h-full"
                  allowFullScreen
                  aria-autocomplete="inline"
                  src={selectedGame}
                  title="Jogo"
                ></iframe>
              </div>
            </div>
          </div>
        )}
      </>
    </>
  );
};
