import { html, nothing } from '../../node_modules/lit-html/lit-html.js';
import { getUser } from '../services/authService.js';

const guestLinks = html`
	<!--Only guest-->
	<li><a href="/login">Login</a></li>
	<li><a href="/register">Register</a></li>
`;

const userLinks = html`
	<!--Only user-->
    <li><a href="/logout">Logout</a></li>
`;

const createAlbum = html`
<li><a href="/create">Create Album</a></li>
`;

const navigationTemplate = (user) => html`
  <nav>
    <img src="/images/headphones.png" />
    <a href="/">Home</a>
    <ul>
        <li><a href="/catalog">Catalog</a></li>
    	<li><a href="/search">Search</a></li>
		${getUser()&&isAdminUser(user) 
			? createAlbum
			: nothing
		}
       	${user
			? userLinks
			: guestLinks
		}
    </ul>
  </nav>
`;

export const navigationView = (ctx) => {
	return navigationTemplate(ctx.user);
};

function isAdminUser(user) {

	if (user.email == 'peter@abv.bg' ||
		user.email == 'george@abv.bg' ||
		user.email == 'admin@abv.bg') {
			console.log("This is admin user!")
		return true;
	}

}