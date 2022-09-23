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
});
