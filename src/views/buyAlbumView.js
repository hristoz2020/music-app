import { html } from "../../node_modules/lit-html/lit-html.js";
import * as albumService from "../services/albumService.js";

const buyAlbumTemplate = (album) => html`
  <div id="wrapper">
    <div id="container">
      <div id="info">
        <img id="product" src=${album.imgUrl} />
        <p>${album.name}</p>
        <p>${album.artist}</p>
        <div id="price">
          <h2>${album.price}$</h2>
        </div>
      </div>

      <div id="payment">
        <form id="checkout">
          <input 
            class="card" 
            id="visa" 
            type="button" 
            name="card" 
            value="" 
            />
          <input
            class="card"
            id="mastercard"
            type="button"
            name="card"
            value=""
          />

          <label>Credit Card Number</label>
          <input
            id="cardnumber"
            type="number"
            pattern="[0-9]{13,16}"
            name="cardnumber"
            requierd="required"
            placeholder="0123-4567-8901-2345"
          />
          <label>Card Holder</label>
          <input
            id="cardholder"
            type="text"
            name="name"
            requierd="true"
            maxlength="50"
            placeholder="Cardholder"
          />

          <label>Expiration Date</label>
          <label id="cvc-label">CVC/CVV</label>
          <div id="left">
            <select name="month" id="month" onchange="" size="1">
              <option value="00">MM</option>
              <option value="01">01</option>
              <option value="02">02</option>
              <option value="03">03</option>
              <option value="04">04</option>
              <option value="05">05</option>
              <option value="06">06</option>
              <option value="07">07</option>
              <option value="08">08</option>
              <option value="09">09</option>
              <option value="10">10</option>
              <option value="11">11</option>
              <option value="12">12</option>
            </select>
            <p>/</p>
            <select name="year" id="year" onchange="" size="1">
              <option value="00">YY</option>
              <option value="01">16</option>
              <option value="02">17</option>
              <option value="03">18</option>
              <option value="04">19</option>
              <option value="05">20</option>
              <option value="06">21</option>
              <option value="07">22</option>
              <option value="08">23</option>
              <option value="09">24</option>
              <option value="10">25</option>
            </select>
          </div>

          <input id="cvc" type="number" placeholder="Cvc/Cvv" maxlength="3" />

          <a href="/order" class="btn" id="btn-submit">Purchase</a>
        </form>
      </div>
    </div>
  </div>
`;

export const buyAlbumView = (ctx) => {
  albumService.getOne(ctx.params.albumId).then((album) => {
    ctx.render(buyAlbumTemplate(album));
  });
};
