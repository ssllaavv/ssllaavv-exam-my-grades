const { test, expect } = require('@playwright/test');

test('Check home page', async ({ page }) => {
    await page.goto('https://ssllaavv-exam-my-grades.onrender.com/');
    const heading = await page.$('h1');
    const text = await heading.textContent();
    expect(text).toContain('My Grades');  
  });
  