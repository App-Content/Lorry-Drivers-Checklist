import React from "react";

const SwitchModeButton = () => {
  const toggleParams = [
    "Tryb ciemny",
    "Tryb jasny",
    "switchModeButton__light",
    "switchModeButton__dark",
  ];
  const toggleMode = (buttonText) => {
    buttonText = document.querySelector(".switchModeButton");
    if (buttonText.textContent === toggleParams[0]) {
      buttonText.textContent = toggleParams[1];
      buttonText.classList.add(toggleParams[2]);
    } else {
      buttonText.textContent = toggleParams[0];
      buttonText.classList.remove(toggleParams[2]);
      buttonText.classList.add(toggleParams[3]);
    }
  };

  return (
    <button
      className="switchModeButton switchModeButton__dark"
      onClick={toggleMode}
    >
      {toggleParams[0]}
    </button>
  );
};

export default SwitchModeButton;
