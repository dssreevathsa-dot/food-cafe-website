// ================= SEARCH FOOD =================

function searchFood() {

    const searchValue = document
        .getElementById("searchInput")
        .value
        .toLowerCase()
        .trim();

    const foodCards = document.querySelectorAll(".food-card");

    foodCards.forEach(function(card) {

        const foodName = card
            .getAttribute("data-name")
            .toLowerCase();

        if (foodName.includes(searchValue)) {
            card.style.display = "block";
        } else {
            card.style.display = "none";
        }

    });

}


// ================= CATEGORY FILTER =================

function filterFood(category, button) {

    const foodCards = document.querySelectorAll(".food-card");

    const categoryButtons =
        document.querySelectorAll(".category-btn");


    // Remove active from all buttons

    categoryButtons.forEach(function(btn) {

        btn.classList.remove("active");

    });


    // Add active to clicked button

    button.classList.add("active");


    // Show / hide food cards

    foodCards.forEach(function(card) {

        const cardCategory =
            card.getAttribute("data-category");


        if (category === "all") {

            card.style.display = "block";

        }

        else if (cardCategory === category) {

            card.style.display = "block";

        }

        else {

            card.style.display = "none";

        }

    });


    // Clear search box

    document.getElementById("searchInput").value = "";

}