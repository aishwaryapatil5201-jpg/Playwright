import { test, expect } from '@playwright/test';
import { PaymentPage } from '../Pages/PaymentPage';

test('Complete Payment', async ({ page }) => {

    const payment = new PaymentPage(page);

    await page.goto('/payment');

    await payment.pay({

        name: 'John Smith',

        card: '4111111111111111',

        cvc: '123',

        month: '10',

        year: '2030'

    });

    await expect(page.locator('text=Congratulations')).toBeVisible();

});