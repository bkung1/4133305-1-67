import { test, expect } from '@playwright/test';
import path from 'path';

const authFile = path.resolve(__dirname,'../playwright/.auth/user.json');


test('has title', async ({ page }) => {
  await page.goto('http://localhost:3000/login');
  await page.getByRole('button',{name: 'Google Logo เข้าสู่ระบบด้วย'}).click();
  await page.getByLabel('Email or phone').fill('650112418052@gmail.ac.th');
  await page.getByRole('button',{name:'Next',exact: true}).click();
  await page.getByLabel('Enter your password').fill('r@68641f74');
  await page.getByRole('button',{name : 'Next'}).click();
  await page.getByRole('button',{name: 'ดำเนินการต่อ'}).click();


  await page.context().storageState({path: authFile});

  await page.getByRole('button',{name: 'Open user menu User Profile'}).click();
  await page.getByRole('button',{name : 'ออกจากระบบ'}).click();



 
});



test('test - 2', async ({ page }) => {
  await page.goto('http://localhost:3000/login');
  await page.getByRole('button', { name: 'Google Logo เข้าสู่ระบบด้วย' }).click();
  await page.getByLabel('Email or phone').fill('650112418052@bru.ac.th');
  await page.getByRole('button', { name: 'Next', exact: true }).click();
  await page.getByLabel('Enter your password').fill('r@68641f74');
  await page.getByRole('button', { name: 'Next' }).click();
  await page.getByRole('button', { name: 'ดำเนินการต่อ' }).click();
});