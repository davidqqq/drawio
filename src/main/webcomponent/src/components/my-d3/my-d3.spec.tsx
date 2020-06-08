import { newSpecPage } from '@stencil/core/testing';
import { MyD3 } from './my-d3';

describe('my-d3', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [MyD3],
      html: `<my-d3></my-d3>`,
    });
    expect(page.root).toEqualHtml(`
      <my-d3>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </my-d3>
    `);
  });
});
