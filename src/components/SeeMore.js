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
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Possimus
        provident, architecto repudiandae quis labore voluptates asperiores
        itaque nisi ab corrupti delectus molestiae adipisci natus a corporis
        nobis, officiis ullam. Fuga.
      </div>
    </div>
  );
};

export default SeeMore;
