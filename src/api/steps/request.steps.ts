import { createBdd } from 'playwright-bdd';
import { expect } from '@playwright/test';

const { Given, Then } = createBdd();

let responseData: any 
Given('User send request to endpoint users', async ({page}) => {
    const response = await fetch('https://reqres.in/api/users/2', {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
    });
    responseData = await response.json();
    console.log(responseData);
});


Then('User will get response the data', async ({page}) => {
    expect(responseData).toHaveProperty('data');
    expect(responseData.data).toHaveProperty('id', 2);
    expect(responseData.data).toHaveProperty('email', 'janet.weaver@reqres.in');
    expect(responseData.data).toHaveProperty('first_name', 'Janet');
    expect(responseData.data).toHaveProperty('last_name', 'Weaver');
    expect(responseData.data).toHaveProperty('avatar', 'https://reqres.in/img/faces/2-image.jpg');
});
