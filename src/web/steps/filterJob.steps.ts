import { createBdd } from 'playwright-bdd';
import { FilterJobList } from '../pages/filterJob.page';

const { Given, When, Then } = createBdd();


Given('User can access url staffinc', async ({page}) => {
  const filterJobList = new FilterJobList(page);
  await filterJobList.accessUrl();
});

When('User use filter using job location Bandung', async ({page}) => {
  const filterJobList = new FilterJobList(page);
  await filterJobList.filterJobsListUsingLocation();
});

Then('User can see all the job list located in Bandung', async ({page}) => {
  const filterJobList = new FilterJobList(page);
  await filterJobList.listJobLocatedInBandung();
  await page.screenshot({ path: 'screenshot-results/screenshot.png' });
});
