import { test, expect } from '@playwright/test';

test('homepage loads and shows hero title', async ({ page }) => {
    await page.goto('/');
    await expect(page.getByRole('heading', { level: 1 })).toBeVisible();
    // Expect it contains academy title OR its a slider
    await expect(page.locator('h1')).toContainText(['Academy', 'Ethereum Lima', 'Aprende']);
});

test('navigation to routes works', async ({ page }) => {
    await page.goto('/');
    await page.getByRole('link', { name: /empezar ruta/i }).click();
    await expect(page).toHaveURL(/\/docs\/rutas\/intro/);
    await expect(page.locator('h1')).toBeVisible();
});

test('markdown page renders correctly', async ({ page }) => {
    await page.goto('/docs/rutas/fundamentos/que-es-blockchain');
    await expect(page.locator('h1')).toContainText('¿Qué es Blockchain?');
    await expect(page.locator('.theme-doc-markdown')).toBeVisible();
});
