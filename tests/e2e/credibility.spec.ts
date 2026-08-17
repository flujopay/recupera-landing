import { test, expect } from '@playwright/test'

test('Credibility renderiza el logo wall de clientes vigentes', async ({ page }) => {
  await page.goto('/')

  const section = page.locator('#credibilidad')
  await expect(section).toBeVisible()
  await expect(section.getByAltText("L'Oréal").first()).toBeAttached()
  await expect(section.getByAltText('Científica Andina').first()).toBeAttached()
})

test('Credibility no muestra clientes retirados', async ({ page }) => {
  await page.goto('/')

  const section = page.locator('#credibilidad')
  await expect(section.getByAltText('Proweld')).toHaveCount(0)
  await expect(section.getByAltText('Aquarius Consulting')).toHaveCount(0)
  await expect(section.getByAltText('Recsa')).toHaveCount(0)
})
