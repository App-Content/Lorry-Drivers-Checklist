import React, { Component } from "react";
import "./styles/App.scss";

import SwitchModeButton from "./SwitchModeButton";
import SeeMore from "./SeeMore";
import ToDoList from "./ToDoList";
import AddTask from "./AddTask";
import Header from "./Header";
class App extends Component {
  state = {
    items: [
      {
        id: 1,
        itemText: "Opony i ciśnienie gum w ciągniku",
        itemActive: true,
        itemDone: false,
      },
      {
        id: 2,
        itemText: "Opony i ciśnienie gum w naczepie (przyczepie)",
        itemActive: true,
        itemDone: false,
      },
      {
        id: 3,
        itemText: "Płyny eksploatacyjne",
        itemActive: true,
        itemDone: false,
      },
      {
        id: 4,
        itemText: "Praca silnika",
        itemActive: true,
        itemDone: false,
      },
      {
        id: 5,
        itemText: "Kontrolki systemów elektronicznych",
        itemActive: true,
        itemDone: false,
      },
      {
        id: 6,
        itemText: "Tachometr",
        itemActive: true,
        itemDone: false,
      },
      {
        id: 7,
        itemText: "Prawo jazdy",
        itemActive: true,
        itemDone: false,
      },
      {
        id: 8,
        itemText: "Karta kierowcy",
        itemActive: true,
        itemDone: false,
      },
      {
        id: 9,
        itemText: "Zaświadczenie o szkoleniach",
        itemActive: true,
        itemDone: false,
      },
      {
        id: 10,
        itemText: "Potwierdzenie badań lekarskich i psychologicznych",
        itemActive: true,
        itemDone: false,
      },
      {
        id: 11,
        itemText: "Ważny dowód rejestracyjny (ciągnik i naczepa)",
        itemActive: true,
        itemDone: false,
      },
      {
        id: 12,
        itemText: "Wypis z licencji transportowej",
        itemActive: true,
        itemDone: false,
      },
      {
        id: 13,
        itemText: "List przewozowy (CMR)",
        itemActive: true,
        itemDone: false,
      },
      {
        id: 14,
        itemText: "Informacje o zakazach jazdy ciężarówek",
        itemActive: true,
        itemDone: false,
      },
      {
        id: 15,
        itemText: "Stacje benzynowe i plan tankowania",
        itemActive: true,
        itemDone: false,
      },
      {
        id: 16,
        itemText: "Lista (plan) parkingów na odpoczynki dzienne",
        itemActive: true,
        itemDone: false,
      },
    ],
  };

  deleteItem = (id) => {
    const items = [...this.state.items];
    const itemIndex = items.findIndex((item) => item.id === id);
    items.splice(itemIndex, 1);
    this.setState({
      items,
    });
  };

  render() {
    return (
      <div className="App">
        <div className="container">
          <Header />
          <SwitchModeButton />
          <SeeMore />
          <ToDoList items={this.state.items} delete={this.deleteItem} />
          <AddTask />
        </div>
      </div>
    );
  }
}

export default App;
