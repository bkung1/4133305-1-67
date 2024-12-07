import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('http://localhost:3000/projects');
  await page.getByRole('link', { name: 'เพิ่มเมนู' }).click();
  await page.getByRole('link', { name: 'ประเภทอาหาร' }).click();
  await page.getByRole('button', { name: '+ เพิ่มประเภท' }).click();
  await page.getByPlaceholder('ชื่อประเภท').click();
  await page.getByPlaceholder('ชื่อประเภท').click();
  await page.getByPlaceholder('ชื่อประเภท').fill('ขนมไทย');
  await page.getByRole('button', { name: 'ยกเลิก' }).click();
  await page.getByRole('link', { name: 'ประเภทอาหาร' }).click();
  await page.getByRole('link', { name: 'ตัวเลือก' }).click();
  await page.getByRole('button', { name: '+ เพิ่มตัวเลือก' }).click();
  await page.getByRole('checkbox').check();
  await page.getByPlaceholder('ชื่อตัวเลือก').click();
  await page.getByPlaceholder('ชื่อตัวเลือก').fill('ขอ');
  await page.getByPlaceholder('ชื่อตัวเลือก').press('Enter');
  await page.getByPlaceholder('ชื่อตัวเลือก').fill('ของคาว');
  await page.getByText('/100ราคาเท่าเดิมราคาเพิ่มขึ้น').click();
  await page.getByPlaceholder('กรอกชื่อช้อยส์').click();
  await page.getByPlaceholder('กรอกชื่อช้อยส์').fill('ต้มยำ');
  await page.getByRole('button', { name: 'เพิ่มช้อยส์' }).click();
  await page.getByRole('button', { name: 'บันทึก' }).nth(1).click();
});