import React, { Component } from "react";

class AddTask extends Component {
  state = {};

  toggleForm = (addOwnButton, form, formClosingButton) => {
    addOwnButton = document.querySelector(".addOwnButton");
    form = document.querySelector(".form");
    formClosingButton = document.querySelector(".formClosingButton");

    function launchToggle() {
      if (addOwnButton.style.display === "none") {
        addOwnButton.style.display = "block";
        form.style.display = "none";
      } else {
        addOwnButton.style.display = "none";
        form.style.display = "block";
      }
    }
    return launchToggle();
  };

  render() {
    return (
      <div className="AddTask">
        <div>
          <button className="addOwnButton" onClick={this.toggleForm}>
            Dodaj własne
          </button>
        </div>
        <form className="form">
          <input
            type="text"
            className="form__input"
            value={this.state.text}
            onChange={this.handleText}
          />
          <button className="form__button" onClick={this.handleAddClick}>
            Dodaj
          </button>
          <div>
            <button
              type="button"
              className="formClosingButton"
              onClick={this.toggleForm}
            >
              Zamknij
            </button>
          </div>
        </form>

        <footer className="formFooter"></footer>
      </div>
    );
  }
}

export default AddTask;
