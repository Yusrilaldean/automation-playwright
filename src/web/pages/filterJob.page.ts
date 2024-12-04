import { expect, type Page } from '@playwright/test';

export class FilterJobList {
    constructor(private page: Page) {}

    async accessUrl(): Promise<void> {
        await this.page.goto('https://jobs.staffinc.co/');
    }

    async filterJobsListUsingLocation(): Promise<void> {
        const listAllJob = this.page.getByText("Lihat Semua Pekerjaan");
        await listAllJob.click();

        const filterButton = this.page.getByText("Filter");
        await filterButton.click();

        const locationButton = this.page.getByText("Lokasi Pekerjaan");
        await locationButton.click();

        const provinceButton = this.page.locator('(//div[@class="ant-select-selector"])[1]');
        await provinceButton.click();

        const provinceJawaBaratButton = this.page.getByText("Jawa Barat");
        await provinceJawaBaratButton.click();

        const cityButton = this.page.locator('(//input[@id="city_ids"])[1]');
        await cityButton.waitFor({ state: 'attached' });
        await cityButton.evaluate(el => { el.removeAttribute("readonly"); el.removeAttribute("disabled"); });
        await cityButton.click({ force: true });

        const searchCityButton = this.page.locator('//input[@placeholder="Cari kota..."]');
        await searchCityButton.fill("Bandung");

        const cityListButton = this.page.getByText("Kota Bandung");
        await cityListButton.click();

        const saveCityButton = this.page.locator('(//button[@type="button"])[2]');
        await saveCityButton.click();

        const saveButton = this.page.locator('(//button[@type="button"])[10]');
        await saveButton.click();
    };

    async listJobLocatedInBandung(): Promise<void> {
        const bandungLocations = this.page.locator('//span[text()="Kota Bandung"]').first();
        await expect(bandungLocations).toContainText("Bandung");
    }
}
