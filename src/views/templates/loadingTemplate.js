import { html, nothing } from '../../../node_modules/lit-html/lit-html.js';


const loadingTemplete = () => html`
    <div class="loader"></div>
`;

export const loadingView = (ctx) => {
    ctx.render(loadingTemplete());
}