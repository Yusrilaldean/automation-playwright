/** Generated from: src\api\features\request.feature */
import { test } from "playwright-bdd";

test.describe("Get data using reqres enpoint", () => {

  test("Get user data using endpoint users", async ({ Given, page, Then }) => {
    await Given("User send request to endpoint users", null, { page });
    await Then("User will get response the data", null, { page });
  });

});

// == technical section ==

test.use({
  $test: ({}, use) => use(test),
  $uri: ({}, use) => use("src\\api\\features\\request.feature"),
  $bddFileMeta: ({}, use) => use(bddFileMeta),
});

const bddFileMeta = {
  "Get user data using endpoint users": {"pickleLocation":"3:5"},
};