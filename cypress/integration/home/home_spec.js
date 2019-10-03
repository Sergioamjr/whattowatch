/* eslint-disable no-undef */
describe("My First Test", () => {
  it("Does not do much!", () => {
    expect(true).to.equal(true);
  });

  it("should visit home", () => {
    cy.visit("http://localhost:3000/");
    cy.contains("Welcomes");
  });

  it("Should render list of movies", () => {
    cy.visit("http://localhost:3000/");
    cy.get('[data-test-id="test-example"]').should("have.length", 20);
  });
});
