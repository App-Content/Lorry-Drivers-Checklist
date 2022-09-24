describe("launch home page", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000");
  });

  it("See more click", () => {
    cy.get("[data-test-id=seeMoreHeader]")
      .click()
      .contains("Zobacz mniej...")
      .get(".seeMore__text")
      .invoke("css", "display")
      .should("equal", "block");
  });

  it("Click TableToDo", () => {
    cy.get(":nth-child(1) > :nth-child(2) > button")
      .click()
      .get(".todoList__header > span")
      .contains(15)
      .get("[data-test-id=toDoItems]")
      .find("tr")
      .should("have.length", 15);

    cy.get(":nth-child(7) > :nth-child(3) > input")
      .click()
      .get("[data-test-id=toDoItems]")
      .find("tr")
      .should("have.length", 14)
      .get(".doneList__header > span")
      .contains(1)
      .get("[data-test-id=doneItems]")
      .find("tr")
      .should("have.length", 1)
      .get(".doneList > .table > tbody > tr > :nth-child(1)")
      .contains("Karta kierowcy");
  });

  it("Form input using", () => {
    cy.get(".form__input").type("Nowa");
    cy.get(".form__button")
      .click()
      .get(":nth-child(17) > :nth-child(1)")
      .contains("Nowa");
  });
});
