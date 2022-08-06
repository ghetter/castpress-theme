const  body = document.querySelector("body"),
    toggle = body.querySelector(".nav__icon"),
    logo = body.querySelector(".c-header__logo")
    subtoggle = body.querySelector(".toggle-submenu"),
    header = body.querySelector(".c-header"),
    menu = body.querySelector (".nav__list"),
    item_has_children = body.querySelector(".item-has-children"),
    submenu = body.querySelector(".nav__sublist"),
    search_toggle_c = body.querySelector(".s-toggle-closed"),
    search_toggle_o = body.querySelector(".s-toggle-opened"),
    search = body.querySelector(".search__form");

// Burger Logic //
//
toggle.addEventListener("click", () => {
    menu.classList.toggle("active");
    toggle.classList.toggle("active");
    if(toggle.classList.contains("active")){
        toggle.classList.remove("inactive");
    } else {
        toggle.classList.add("inactive");
    }
    body.classList.toggle("locked");
    logo.classList.toggle("locked");
});
//
///////////////////////////////////////////////


// Search Logic //
//
search_toggle_c.addEventListener("click", () => {
    search_toggle_o.classList.add("active");
    search_toggle_c.classList.add("inactive");
    search.classList.remove("hidden");
    search.classList.add("visible");
});

//
search_toggle_o.addEventListener("click", () => {
    search_toggle_o.classList.remove("active");
    search_toggle_c.classList.remove("inactive");
    search.classList.remove("visible");
    search.classList.add("hidden");
});

///////////////////////////////////////////////

// Mobile and Desktop navigation logic //
//


setInterval(function(){
    if (matchMedia('(min-width: 949px)').matches) {
        body.classList.remove("locked");

    }

    else if(menu.classList.contains("active")) {
        body.classList.add("locked");
    }


    if (matchMedia('(min-width: 949px)').matches) {
        header.addEventListener("mouseleave", () => {
            submenu.classList.remove("active");
            subtoggle.classList.remove("active");
        });

        header.addEventListener("click", () => {
            submenu.classList.remove("active");
            subtoggle.classList.remove("active");
        });

        subtoggle.addEventListener("mouseover", () => {
            submenu.classList.add("active");
            subtoggle.classList.add("active");
        });

        submenu.addEventListener("mouseleave", () => {
            submenu.classList.remove("active");
            subtoggle.classList.remove("active");
        });
    }

    else {}


    if (matchMedia('(max-width: 948px)').matches) {
        subtoggle.addEventListener("click", () => {
            submenu.classList.toggle("active");
            subtoggle.classList.toggle("active");
        });
    }

    else {}
}, 1000);

///////////////////////////////////////////////
