import React, { Component } from "react";
import "../scss/App.scss";

import Header from "./Header";
import SwitchModeButton from "./SwitchModeButton";
import SeeMore from "./SeeMore";
import ToDoList from "./ToDoList";
import AddTask from "./AddTask";

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
  };

  deleteItem = (id) => {
    let items = [...this.state.items];
    items = items.filter((item) => item.id !== id);
    this.setState({
      items,
    });
  };

  render() {
    return (
      <div className="App container">
        <Header />
        <SwitchModeButton />
        <SeeMore />
        <ToDoList items={this.state.items} delete={this.deleteItem} />
        <AddTask addItem={this.addItem} />
      </div>
    );
  }
}

export default App;
