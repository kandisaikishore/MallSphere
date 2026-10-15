const { test, expect } = require('@playwright/test');

test.beforeEach(async ({ page }) => {
  await page.addInitScript(() => localStorage.removeItem('mallsphere-data'));
  await page.goto('/');
});

test('all navigation sections render without runtime errors', async ({ page }) => {
  const errors = [];
  page.on('pageerror', error => errors.push(error.message));
  const pages = [
    ['tenants', 'Tenants'], ['leasing', 'Leasing & Units'], ['finance', 'Finance'],
    ['maintenance', 'Maintenance'], ['events', 'Events & Promotions'],
    ['footfall', 'Footfall analytics'], ['parking', 'Parking operations'],
    ['vendors', 'Vendors'], ['security', 'Security & Incidents'],
    ['reports', 'Reports'], ['settings', 'Settings']
  ];
  for (const [key, title] of pages) {
    await page.locator('[data-page="' + key + '"]').click();
    await expect(page.locator('#pageContent h1')).toContainText(title);
  }
  expect(errors).toEqual([]);
});

test('tenant create, edit, delete and persistence work', async ({ page }) => {
  await page.locator('[data-page="tenants"]').click();
  await page.getByRole('button', { name: /Add tenant/i }).click();
  await page.locator('[name="name"]').fill('Test Retailer');
  await page.locator('[name="category"]').fill('Test category');
  await page.locator('[name="unit"]').fill('T-999');
  await page.locator('[name="rent"]').fill('25000');
  await page.locator('[name="lease"]').fill('2027-12-31');
  await page.locator('#recordForm button[type="submit"]').click();
  const row = page.locator('tr').filter({ hasText: 'Test Retailer' });
  await expect(row).toBeVisible();
  await row.getByRole('button', { name: 'Edit' }).click();
  await page.locator('[name="name"]').fill('Updated Retailer');
  await page.locator('#recordForm button[type="submit"]').click();
  await expect(page.locator('tr').filter({ hasText: 'Updated Retailer' })).toBeVisible();
  await page.reload();
  await expect(page.locator('tr').filter({ hasText: 'Updated Retailer' })).toBeVisible();
  page.once('dialog', dialog => dialog.accept());
  await page.locator('tr').filter({ hasText: 'Updated Retailer' }).getByRole('button', { name: 'Delete' }).click();
  await expect(page.locator('tr').filter({ hasText: 'Updated Retailer' })).toHaveCount(0);
});

test('search and status filtering narrow records', async ({ page }) => {
  await page.locator('[data-page="finance"]').click();
  await page.locator('#statusFilter').selectOption({ label: 'Overdue' });
  await expect(page.locator('tbody')).toContainText('INV-2409');
  await expect(page.locator('tbody')).not.toContainText('INV-2408');
  await page.locator('#statusFilter').selectOption({ label: 'All' });
  await page.locator('#tableSearch').fill('Blue Tokai');
  await expect(page.locator('tbody')).toContainText('Blue Tokai');
  await expect(page.locator('tbody')).not.toContainText('Urban Outfitters');
});

test('mobile navigation opens and closes', async ({ page }) => {
  await page.setViewportSize({ width: 390, height: 844 });
  await page.locator('#mobileMenu').click();
  await expect(page.locator('#sidebar')).toHaveClass(/open/);
  await page.locator('[data-page="tenants"]').click();
  await expect(page.locator('#sidebar')).not.toHaveClass(/open/);
  await expect(page.locator('#pageContent h1')).toContainText('Tenants');
});

test('CSV export creates a downloadable file', async ({ page }) => {
  await page.locator('[data-page="tenants"]').click();
  const downloadPromise = page.waitForEvent('download');
  await page.locator('#exportCurrent').click();
  const download = await downloadPromise;
  expect(download.suggestedFilename()).toBe('mallsphere-tenants.csv');
});
