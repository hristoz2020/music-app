import { html, nothing } from "../../../node_modules/lit-html/lit-html.js";


const albumDetails = (albumId) => html`
  <div class="btn-group">
    <a href="/albums/${albumId}" id="details">Details</a>
    <a href="/buyAlbum/${albumId}" id="buy">Buy Album</a>
  </div>
`;

export const albumTemplate = (album, withDeatils = true) => html`
  <div class="card-box">
    <img src=${album.imgUrl} />
    <div>
      <div class="text-center">
        <p class="name">Name: ${album.name}</p>
        <p class="artist">Artist: ${album.artist}</p>
        <p class="genre">Genre: ${album.genre}</p>
        <p class="price">Price: ${album.price}</p>
        <p class="date">Release Date: ${album.releaseDate}</p>
      </div>
      ${withDeatils ? albumDetails(album._id) : nothing}
    </div>
  </div>
`;
