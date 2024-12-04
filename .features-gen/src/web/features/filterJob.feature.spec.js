/** Generated from: src\web\features\filterJob.feature */
import { test } from "playwright-bdd";

test.describe("Filter Job Using Bandung", () => {

  test("User can filter jobs list using Bandung", async ({ Given, page, When, Then }) => {
    await Given("User can access url staffinc", null, { page });
    await When("User use filter using job location Bandung", null, { page });
    await Then("User can see all the job list located in Bandung", null, { page });
  });

});

// == technical section ==

test.use({
  $test: ({}, use) => use(test),
  $uri: ({}, use) => use("src\\web\\features\\filterJob.feature"),
  $bddFileMeta: ({}, use) => use(bddFileMeta),
});

const bddFileMeta = {
  "User can filter jobs list using Bandung": {"pickleLocation":"3:5"},
};