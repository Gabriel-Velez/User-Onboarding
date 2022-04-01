describe("Onboarding App", () => {
  beforeEach(() => {
    //each test needs fresh state
    //refresh to reset state
    //must be abele to work in isolation
    cy.visit("http://localhost:3000/");
  });

  // H E L P E R //
  const firstNameInput = () => cy.get("input[name=first_name]");
  const lastNameInput = () => cy.get("input[name=last_name]");
  const emailInput = () => cy.get("input[name=email]");
  const passwordInput = () => cy.get("input[name=password]");
  const tosCheckbox = () => cy.get("input[name=tos]");
  const submitBtn = () => cy.get("button[id='submitBtn']");
  const firstNameError = () => cy.get("div[id='firstNameError']");
  const lastNameError = () => cy.get("div[id='lastNameError']");
  const emailError = () => cy.get("div[id='emailError']");
  const passwordError = () => cy.get("div[id='passwordError']");
  const tosError = () => cy.get("div[id='tosError']");

  it("Sanity check to make sure tests work", () => {
    //"it" is a test
    //"expect" is an assertion
    ///there can (and often are) multiple assertions per test
    expect(1 + 2).to.equal(3);
    expect(2 + 2).not.to.equal(3);
    expect({}).not.to.equal({}); // ===
    expect({}).to.eql({}); // ==
  });

  it("The proper elements are showing", () => {
    firstNameInput().should("exist");
    lastNameInput().should("exist");
    emailInput().should("exist");
    passwordInput().should("exist");
    tosCheckbox().should("exist");
    submitBtn().should("exist");
  });
  describe("Filling out the inputs and check if submit works", () => {
    it("can navigate to the site", () => {
      cy.url().should("include", "localhost");
    });
    it("submit button starts out disabled", () => {
      submitBtn().should("be.disabled");
    });
    it("can type in the inputs", () => {
      firstNameInput()
        .should("have.value", "")
        .type("Lorem ipsum")
        .should("have.value", "Lorem ipsum");
      lastNameInput()
        .should("have.value", "")
        .type("Lorem ipsum")
        .should("have.value", "Lorem ipsum");
      emailInput()
        .should("have.value", "")
        .type("Lorem@ipsum.com")
        .should("have.value", "Lorem@ipsum.com");
      passwordInput()
        .should("have.value", "")
        .type("Lorem ipsum")
        .should("have.value", "Lorem ipsum");
      tosCheckbox().should("not.be.checked").check().should("be.checked");
      submitBtn().should("not.be.disabled");
    });
    it("the submit button enables when all inputs are populated", () => {
      firstNameInput().type("Lorem ipsum");
      lastNameInput().type("Lorem ipsum");
      emailInput().type("Lorem@ipsum.com");
      passwordInput().type("Lorem ipsum");
      tosCheckbox().check();
      submitBtn().should("not.be.disabled");
    });
    it("the error messages come up when inputs not valid", () => {
      firstNameInput().type("Lorem ipsum").clear();
      firstNameError().should("exist");
      lastNameInput().type("Lorem ipsum").clear();
      lastNameError().should("exist");
      emailInput().type("Lorem@ipsum.com").clear();
      emailError().should("exist");
      passwordInput().type("Lorem ipsum").clear();
      passwordError().should("exist");
      tosCheckbox().check().uncheck();
      tosError().should("exist");
    });
  });
});
