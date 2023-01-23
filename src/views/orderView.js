import { html } from "../../../node_modules/lit-html/lit-html.js";

const orderTemplete = () => html`
  <div class="card-order">
    
    <p id="successful-order"><img src="/images/favicon_io/favicon-32x32.png" />Your order is successful!</p>
    <a href="/catalog" id="back-catalog" class="btn">Back to catalog</a>
  </div>
`;

export const orderView = (ctx) => {
  ctx.render(orderTemplete());
};
