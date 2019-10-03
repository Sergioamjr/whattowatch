/* eslint-disable no-undef */
describe("My First Test", () => {
  it("Does not do much!", () => {
    expect(true).to.equal(true);
  });

  it("Should visit home", () => {
    cy.visit("http://localhost:3000/");
    cy.contains("Welcomes");
  });

  it("Should render header correctly", () => {
    cy.visit("http://localhost:3000/");
    cy.contains("header h1", "MovieMmendation");
    cy.get("header nav li").should("have.length", 2);
    cy.contains("header nav li a", "Home");
    cy.contains("header nav li a", "Movie");
  });

  it("Should render list of movies", () => {
    cy.visit("http://localhost:3000/");
    cy.get('[data-test-id="test-example"]').should("have.length", 20);
  });
});
