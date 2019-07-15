describe("My Website", () => {
    it("Displays my name on the home page", () => {
        cy.visit("/");
        cy.contains("John A. Geddes");
    });
});