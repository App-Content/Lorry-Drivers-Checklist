import React, { Component } from "react";
import "../scss/App.scss";

import Header from "./Header";
import SwitchModeButton from "./SwitchModeButton";
import SeeMore from "./SeeMore";
import ToDoList from "./ToDoList";
import DoneList from "./DoneList";

class App extends Component {
  state = {
    items: [
      {
        id: 1,
        itemText: "Opony i ciśnienie gum w ciągniku",
        done: false,
      },
      {
        id: 2,
        itemText: "Opony i ciśnienie gum w naczepie (przyczepie)",
        done: false,
      },
      {
        id: 3,
        itemText: "Płyny eksploatacyjne",
        done: false,
      },
      {
        id: 4,
        itemText: "Praca silnika",
        done: false,
      },
      {
        id: 5,
        itemText: "Kontrolki systemów elektronicznych",
        done: false,
      },
      {
        id: 6,
        itemText: "Tachometr",
        done: false,
      },
      {
        id: 7,
        itemText: "Prawo jazdy",
        done: false,
      },
      {
        id: 8,
        itemText: "Karta kierowcy",
        done: false,
      },
      {
        id: 9,
        itemText: "Zaświadczenie o szkoleniach",
        done: false,
      },
      {
        id: 10,
        itemText: "Potwierdzenie badań lekarskich i psychologicznych",
        done: false,
      },
      {
        id: 11,
        itemText: "Ważny dowód rejestracyjny (ciągnik i naczepa)",
        done: false,
      },
      {
        id: 12,
        itemText: "Wypis z licencji transportowej",
        done: false,
      },
      {
        id: 13,
        itemText: "List przewozowy (CMR)",
        done: false,
      },
      {
        id: 14,
        itemText: "Informacje o zakazach jazdy ciężarówek",
        done: false,
      },
      {
        id: 15,
        itemText: "Stacje benzynowe i plan tankowania",
        done: false,
      },
      {
        id: 16,
        itemText: "Lista (plan) parkingów na odpoczynki dzienne",
        done: false,
      },
    ],
    newItemText: "",
  };

  deleteItem = (id) => {
    let items = [...this.state.items];
    items = items.filter((item) => item.id !== id);
    this.setState({
      items,
    });
  };

  changeItemStatus = (id) => {
    const items = [...this.state.items];
    items.forEach((item) => {
      if (item.id === id) {
        item.done = !item.done;
      }
    });
    this.setState({
      items,
    });
  };

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

  handleText = (event) => {
    this.setState({
      newItemText: event.target.value,
    });
  };

  addItem = (event) => {
    event.preventDefault();
    const items = [...this.state.items];
    let itemsLength = items.length;
    const newItem = {
      id: itemsLength + 1,
      itemText: this.state.newItemText,
      done: false,
    };

    this.setState({
      items: [...items, newItem],
      newItemText: "",
    });
  };

  render() {
    return (
      <div className="App container">
        <Header />
        <SwitchModeButton />
        <SeeMore />
        <ToDoList
          items={this.state.items}
          delete={this.deleteItem}
          changeItemStatus={this.changeItemStatus}
        />
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
              value={this.state.newItemText}
              onChange={this.handleText}
            />
            <button className="form__button" onClick={this.addItem}>
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
        </div>
        <DoneList
          items={this.state.items}
          changeItemStatus={this.changeItemStatus}
        />
      </div>
    );
  }
}

export default App;
