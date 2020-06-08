import { newE2EPage } from '@stencil/core/testing';

describe('my-d3', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<my-d3></my-d3>');

    const element = await page.find('my-d3');
    expect(element).toHaveClass('hydrated');
  });
});
