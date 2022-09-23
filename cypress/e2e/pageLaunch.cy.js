/* eslint-disable no-undef */
describe("launch home page", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000");
  });
  it("The title includes correct text", () => {
    cy.get("[data-test-id=header]")
      .contains("Do sprawdzenia przed wyjazdem")
      .should("be.visible")
      .should("have.class", "header__title")
      .invoke("css", "font-weight")
      .should("equal", "900");
  });

  it("See more visibility", () => {
    cy.get("[data-test-id=seeMoreHeader]").contains("Zobacz więcej...");

    cy.get(".seeMore__text").invoke("css", "display").should("equal", "none");
  });

  it("Table ToDo", () => {
    cy.get(".todoList__header > span").contains(16);

    cy.get("[data-test-id=toDoItems]").find("tr").should("have.length", 16);

    cy.get(":nth-child(16) > :nth-child(1)").contains(
      "Lista (plan) parkingów na odpoczynki dzienne"
    );
  });

  it("Button AddYourOwn", () => {
    cy.get(".addOwnButton")
      .contains("Dodaj własne")
      .should("have.class", "addOwnButton");
  });

  it("TableDone", () => {
    cy.get(".doneList__header").contains("Sprawdzone");

    cy.get(".doneList__header > span").contains(0);

    cy.get("[data-test-id=doneItems]").find("tr").should("have.length", 0);
  });
});
