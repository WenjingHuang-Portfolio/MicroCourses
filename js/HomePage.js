function openExploreAllCourses() {
    document.getElementById("welcome").style.display = "none";
    var i, tabContent, tab;
    tabContent = document.getElementsByClassName("tabContent");
    for (i = 0; i < tabContent.length; i++) {
        tabContent[i].style.display = "none";
    }
    tab = document.getElementsByClassName("tab");
    for (i = 0; i < tab.length; i++) {
        tab[i].classList.remove("active");
    }
    document.getElementById("allCoursesContainer").style.display = "flex";
    document.getElementById("ExploreAllCourses").classList.add("active");
}

function openCourse(evt, specialty) {
    document.getElementById("hideWhenTabActive").style.display = "none";
    var i, tabContent, tab;
    tabContent = document.getElementsByClassName("tabContent");
    for (i = 0; i < tabContent.length; i++) {
        tabContent[i].style.display = "none";
    }
    tab = document.getElementsByClassName("tab");
    for (i = 0; i < tab.length; i++) {
        tab[i].classList.remove("active");
    }
    document.getElementById(specialty).style.display = "flex";
    evt.currentTarget.classList.add("active");
}

//Enrol Buttons
const enrolForm = document.getElementById("enrolForm");
const enrolButtons = document.querySelectorAll(".enrolButton");
const courseName = document.getElementById("courseName");
const PriceinForm = document.getElementById("PriceinForm");

Array.from(enrolButtons).forEach(button => {
    button.addEventListener("click", function (event) {
        event.preventDefault();
        enrolForm.style.display = "flex";
        const selectedCard = button.closest(".cards");
        const cardTitle = selectedCard.querySelector(".cardTitle").textContent;
        const coursePrice = selectedCard.querySelector(".coursePrice").textContent;
        courseName.innerHTML = cardTitle;
        PriceinForm.innerHTML = coursePrice;
    });
});

const closeForm = document.getElementById("closeForm");
closeForm.addEventListener("click", function () {
    enrolForm.style.display = "none";
})

//validate form inputs
document.getElementById('FormtoEnrol').addEventListener('submit', function (event) {
    event.preventDefault();

    // Get form values
    const YourName = document.getElementById('YourName').value.trim();
    const YourEmailAddress = document.getElementById('YourEmailAddress').value.trim();
    const YourPhoneNumber = document.getElementById('YourPhoneNumber').value;
    const AccountName = document.getElementById('AccountName').value.trim();
    const CardNumber = document.getElementById('CardNumber').value;
    const Expiry = document.getElementById('Expiry').value;
    const CVV = document.getElementById('CVV').value;
    //Get error message containers
    const YourNameError = document.getElementById('YourNameError');
    const YourEmailAddressError = document.getElementById('YourEmailAddressError');
    const YourPhoneNumberError = document.getElementById('YourPhoneNumberError');
    const AccountNameError = document.getElementById('AccountNameError');
    const CardNumberError = document.getElementById('CardNumberError');
    const ExpiryError = document.getElementById('ExpiryError');
    const CVVError = document.getElementById('CVVError');

    //Clear previous error messages
    YourNameError.textContent = '';
    YourPhoneNumberError.textContent = '';
    YourEmailAddressError.textContent = '';
    CardNumberError.textContent = '';
    AccountNameError.textContent = '';
    ExpiryError.textContent = '';
    CVVError.textContent = '';

    // Validation flags
    let isValid = true;

    // Validate Your Name
    if (YourName.length === 0) {
        isValid = false;
        YourNameError.textContent = 'Your Name is required.';
        YourNameError.style.color = 'red';
    } else if (YourName.length < 3 || YourName.length > 50) {
        isValid = false;
        YourNameError.textContent = 'Your Name must be between 3 and 50 characters.';
        YourNameError.style.color = 'red';
    }

    // Validate Your Email Address
    if (YourEmailAddress.length === 0) {
        isValid = false;
        YourEmailAddressError.textContent = 'Your Email Address is required.';
        YourEmailAddressError.style.color = 'red';
    } else if (YourEmailAddress.length < 5 || YourEmailAddress.length > 200) {
        isValid = false;
        YourEmailAddressError.textContent = 'Your Email Address must be between 5 and 200 characters.';
        YourEmailAddressError.style.color = 'red';
    }


    // Validate Your Phone Number
    if (isNaN(YourPhoneNumber) || YourPhoneNumber < 0) {
        isValid = false;
        YourPhoneNumberError.textContent = 'Your Phone Number must be a positive number.';
        YourPhoneNumberError.style.color = 'red';
    } else if (YourPhoneNumber.length < 8 || YourPhoneNumber.length > 11) {
        isValid = false;
        YourPhoneNumberError.textContent = 'Your Phone Number must be between 8 and 11 digits.';
        YourPhoneNumberError.style.color = 'red';
    }

    //Validate Account Name
    if (AccountName.length === 0) {
        isValid = false;
        AccountNameError.textContent = 'Your Account Name is required.';
        AccountNameError.style.color = 'red';
    } else if (AccountName.length < 5 || AccountName.length > 200) {
        isValid = false;
        AccountNameError.textContent = 'Your Account Name must be between 5 and 200 characters.';
        AccountNameError.style.color = 'red';
    }

    //Validate Card Number
    if (isNaN(CardNumber) || CardNumber <= 0) {
        isValid = false;
        CardNumberError.textContent = 'Your Card Number must be a positive number.';
        CardNumberError.style.color = 'red';
    } else if (CardNumber.length === 0) {
        isValid = false;
        CardNumberError.textContent = 'Your Card Number is required.';
        CardNumberError.style.color = 'red';
    } else if (CardNumber.length != 16) {
        isValid = false;
        CardNumberError.textContent = 'Your Card Number must be 16 digits.';
        CardNumberError.style.color = 'red';
    }

    //Validate Expiry Date
    if (Expiry.length === 0) {
        isValid = false;
        ExpiryError.textContent = 'Your Expiry Date is required.';
        ExpiryError.style.color = 'red';
    }

    //Validate CVV
    if (isNaN(CVV) || CVV <= 0) {
        isValid = false;
        CVVError.textContent = 'Your CVV must be a positive number.';
        CVVError.style.color = 'red';
    } else if (CVV.length === 0) {
        isValid = false;
        CVVError.textContent = 'Your CVV is required.';
        CVVError.style.color = 'red';
    } else if (CVV.length != 3) {
        isValid = false;
        CVVError.textContent = 'Your CVV must be 3 digits.';
        CVVError.style.color = 'red';
    }

    // If all validations pass, submit the form
    if (isValid) {
        alert('You enrol successfully!');
    }
});

//search
function searchCourses() {
    const courseList = document.getElementsByClassName("cards");
    const coursesTerm = document.getElementById("searchInput").value;
    const searchResult = document.getElementById("searchResult");
    const welcome = document.getElementById("welcome");
    const tabMenu = document.getElementById("tabMenu");

    searchResult.innerHTML = "";

    var courseFound = false;

    for (var count = 0; count < courseList.length; count++) {
        var course = courseList[count];
        const courseNameSearch = course.getElementsByClassName("cardTitle")[0]

        searchResult.style.display = "none";
        welcome.style.display = "none";
        tabMenu.style.display = "none";

        if (coursesTerm === "" || coursesTerm.toLowerCase().trim() === courseNameSearch.textContent.toLowerCase().trim()) {
            course.style.display = "block";
            courseFound = true;
        } else {
            course.style.display = "none";

        }
    }

    if (courseFound === false) {
        searchResult.style.display = "block";
        searchResult.innerHTML = "<p>" + "No course found. Please search a different course." + "</p>";
    }

}