const
    reply_form = document.createElement("div"),
    reply_btn = body.querySelector(".c-message__reply"),
    message = body.querySelector(".c-message");

function addReplyForm() {
    reply_form.className="c-reply";
        reply_form.innerHTML = `
        <div class="c-reply__header">
            <h3 class="c-reply__heading">Leave to X</h3>
            <div class="c-reply__cancel">Cancel Reply</div>
            <div class="c-reply__subheading">Required Fields Are Marked *</div>
        </div>
        <form class="c-reply__form">
            <div class="c-reply__comment c-reply__row">
                <h4 class="c-reply__input-title input-title-req">Comment</h4>
                <textarea required id="comment" name="comment"></textarea>
            </div>
            <div class="c-reply__name c-reply__row">
                <h4 class="c-reply__input-title input-title-req">Name</h4>
                <input required type="text" name="name"/>
            </div>
            <div class="c-reply__email c-reply__row">
                <h4 class="c-reply__input-title input-title-req">Email</h4>
                <input required type="email" name="email">
            </div>
            <div class="c-reply__website c-reply__row">
                <h4 class="c-reply__input-title">Website</h4>
                <input type="text" name="website"/>
            </div>
            <div class="c-reply__saving-info">
                <input type="checkbox" id="saving-info" name="saving-info" value="save"/>
                <label for="saving-info">Save my name, email, and website in this browser for the next time I comment</label>
            </div>
            <button class="c-reply__submit">Submit
                <svg width="5" height="8" viewBox="0 0 5 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M0.0557556 0.768491C0.0200717 0.730943 0 0.679832 0 0.626512C0 0.573193 0.0200717 0.522081 0.0557556 0.484534L0.455359 0.0605983C0.489564 0.0219332 0.53732 0 0.587303 0C0.637286 0 0.685042 0.0219332 0.719247 0.0605983L4.18373 3.73604C4.23677 3.79224 4.2666 3.86848 4.26667 3.94801V4.05199C4.2666 4.13152 4.23677 4.20776 4.18373 4.26396L0.719247 7.9394C0.685042 7.97807 0.637286 8 0.587303 8C0.53732 8 0.489564 7.97807 0.455359 7.9394L0.0557556 7.51547C0.0200717 7.47792 0 7.42681 0 7.37349C0 7.32017 0.0200717 7.26906 0.0557556 7.23151L3.10179 4L0.0557556 0.768491Z" fill="white"/>
                </svg>
            </button>
        </form>
      `;
};

reply_btn.addEventListener("click", addReplyForm());
