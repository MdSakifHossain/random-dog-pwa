/// stylesheet
import "/src/css/main.css";

// grabbing DOM elements
const requester = document.getElementById("requester");
const imageHolder = document.getElementById("imageHolder");

// grabbing imaginary elements which probably doesn't exists
const meta_theme_tag = document.querySelector(`meta[name="theme-color"]`);
const title_tag = document.querySelector("head title");
const favicon_link_tag = document.querySelector(`link[rel="icon"]`);
const ios_status_bar = document.querySelector(
	`meta[name="apple-mobile-web-app-status-bar-style"]`
);

// importing helper functions
import { getDog } from "./lib/getDog.js";
import {
	injectMetaThemeTag,
	injectTitle,
	injectFavicon,
	injectIosStatusBar
} from "./lib/injections.js";

// importing constants
import {
	theme_color,
	new_title,
	faviconProps,
	icon_path
} from "./constants/index.js";

// ~~~~~UFO~~~~~ //

// ~~~~~UFO~~~~~ //

// injeting necessary shits 
(() => {
	injectMetaThemeTag(meta_theme_tag, theme_color);
	injectTitle(title_tag, new_title);
	injectFavicon(favicon_link_tag, faviconProps);
	injectIosStatusBar(ios_status_bar, theme_color);
	imageHolder.src = icon_path;
})();

// actual shit is happening here 
requester.addEventListener("click", () => {
	getDog(imageHolder);
});
