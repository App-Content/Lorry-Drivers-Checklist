describe("home page", () => {
  it("The h4 includes the correct text", () => {
    cy.visit("http://localhost:3000");
    cy.get("h4").contains("Zobacz więcej");
  });
});
