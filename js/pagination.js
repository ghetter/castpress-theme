const first_page = body.querySelector(".first-page"),
    last_page = body.querySelector(".last-page")
    prev_page = body.querySelector(".c-pagination__prev-page"),
    next_page = body.querySelector(".c-pagination__next-page");

// Pagination logic
//
if (first_page.classList.contains('page-active')) {
    prev_page.classList.add("disabled");
};



if (last_page.classList.contains('page-active')) {
    next_page.classList.add("disabled");
};

///////////////////////////////////////////////
