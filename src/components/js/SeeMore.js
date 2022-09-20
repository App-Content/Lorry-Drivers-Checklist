import React from "react";

const SeeMore = () => {
  const seeMoreLess = ["Zobacz więcej...", "Zobacz mniej..."];

  const toggleSeeMoreText = (header, text) => {
    header = document.querySelector(".seeMore__header");
    text = document.querySelector(".seeMore__text");
    if (header.textContent === seeMoreLess[0]) {
      header.textContent = seeMoreLess[1];
      text.style.display = "block";
    } else {
      header.textContent = seeMoreLess[0];
      text.style.display = "none";
    }
  };
  return (
    <div className="seeMore">
      <h4 className="seeMore__header" onClick={toggleSeeMoreText}>
        {seeMoreLess[0]}
      </h4>
      <div className="seeMore__text">
        Aplikacja pomaga kierowcy ciężarowki (powyżej 3,5t dmc) sprawdzić to, co
        niezbędne przed wyjazdem w krajową lub międzynarodową trasę z ładunkiem.
        Lista startowa to podstawowy (uniwersalny) zestaw punktów, który może
        być uzupełniony ręcznie, wg indywidualnych potrzeb (np. w przypadku
        trasnportów specjalistycznych). Pozycje z listy można usuwać, jeśli nie
        są ważne w konkretnym przypadku. Sprawdzone punkty - po oznaczeniu jako
        ukończone - trafiają na listę "Sprawdzone". Można je przywrócić na listę
        główną i sprawdzić jeszcze raz.
      </div>
    </div>
  );
};

export default SeeMore;
