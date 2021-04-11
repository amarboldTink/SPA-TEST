import Homepage from "./views/Homepage.js";
import Products from "./views/Products.js";
import Single from "./views/SingleProduct.js";
import ContactUs from "./views/Contactus.js";
import SignIn from "./views/Signin.js";
import Cart from "./views/Cart.js";
import Payment from "./views/Payment.js";
import Builder from "./views/Builder.js"

const navigateTo = url => {
    history.pushState(null, null, url);
    router();
};



const router = async () => {
    const routes = [
        { path: "/", view: Homepage },
        { path: "/products", view: Products },
        { path: "/contactus", view: ContactUs },
        { path: "/cart", view: Cart },
        { path: "/signin", view: SignIn },
        { path: "/payment", view: Payment },
        { path: "/single", view: Single },
        { path: "/builder", view: Builder },
    ];

    const potentialMatches = routes.map(route => {
        return {
            route: route,
            isMatch: location.pathname === route.path
        };
    });

    let match = potentialMatches.find(potentialMatch => potentialMatch.isMatch);

    if(!match) {
        match = {
            route: routes[0],
            isMatch: true
        }
    }


    const view = new match.route.view();

    document.querySelector("#app").innerHTML = await view.Render();
};

window.addEventListener("popstate", router);

document.addEventListener("DOMContentLoaded", () => {
    document.body.addEventListener("click", e => {
        if(e.target.matches("[data-link]")) {
            e.preventDefault();
            navigateTo(e.target.href);
        }
    })

    router();
});

