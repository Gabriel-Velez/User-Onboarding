describe("Onboarding App", () => {
  beforeEach(() => {
    //each test needs fresh state
    //refresh to reset state
    //must be abele to work in isolation
    cy.visit("http://localhost:3000/");
  });

  // H E L P E R //
  it("Sanity check to make sure tests work", () => {
    //"it" is a test
    //"expect" is an assertion
    ///there can (and often are) multiple assertions per test
    expect(1 + 2).to.equal(3);
    expect(2 + 2).not.to.equal(3);
    expect({}).not.to.equal({}); // ===
    expect({}).to.eql({}); // ==
  });
});
