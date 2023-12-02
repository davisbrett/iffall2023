/* Dropdown menu derived from https://www.w3schools.com/howto/howto_js_dropdown.asp */

/* When the user clicks on the button, toggle between hiding and showing the dropdown content */
function myFunction() {
    document.getElementById("myDropdown").classList.toggle("show");

    var dots4 = document.getElementById("dots4");
    var dots5 = document.getElementById("dots5");

    if (dots4.style.display === "none") {
        dots4.style.display = "inline";
        dots5.style.display = "none";
    } else {
        dots4.style.display = "none";
        dots5.style.display = "inline";
    }
}


// Close the dropdown
$(document).ready(function () {

    $(".m-more-less-content .m-show-more").click(function () {
        $(this).parent().addClass("m-display-more");
    });
    $(".m-more-less-content .m-show-less").click(function () {
        $(this).parent().removeClass("m-display-more");
    });

    $(".m-more-less-content").each(function (i, e) {
        var html = $(e).html();
        console.log(html);
        var contentArray = html.split("<more>");
        console.log(contentArray);
        if (contentArray.length == 2) {
            html = contentArray[0] + '<span class="m-show-more"></span><span class="m-more-text">' + contentArray[1] + '</span><span class="m-show-less"></span>';
            console.log(html);
            $(e).html(html);
            $(e).find(".m-show-more").click(function () {
                $(this).parent().addClass("m-display-more");
            });
            $(e).find(".m-show-less").click(function () {
                $(this).parent().removeClass("m-display-more");
            });
        }
    });
});

/* See more derived from https://www.w3schools.com/howto/howto_js_read_more.asp */
function myFunction2() {
    var dots = document.getElementById("dots");
    var moreText = document.getElementById("more");
    var btnText = document.getElementById("myBtn");

    if (dots.style.display === "none") {
        dots.style.display = "inline";
        btnText.innerHTML = "See More ↓";
        moreText.style.display = "none";
    } else {
        dots.style.display = "none";
        btnText.innerHTML = "See Less ↑";
        moreText.style.display = "inline";
    }
}

/* When the user clicks on the button, toggle between hiding and showing the dropdown content */
function myFunction3() {
    document.getElementById("myDropdown2").classList.toggle("show");

    var dots2 = document.getElementById("dots2");
    var dots3 = document.getElementById("dots3");

    if (dots2.style.display === "none") {
        dots2.style.display = "inline";
        dots3.style.display = "none";
    } else {
        dots2.style.display = "none";
        dots3.style.display = "inline";
    }
}

// Close the dropdown
$(document).ready(function () {

    $(".m-more-less-content .m-show-more").click(function () {
        $(this).parent().addClass("m-display-more");
    });
    $(".m-more-less-content .m-show-less").click(function () {
        $(this).parent().removeClass("m-display-more");
    });

    $(".m-more-less-content").each(function (i, e) {
        var html = $(e).html();
        console.log(html);
        var contentArray = html.split("<more>");
        console.log(contentArray);
        if (contentArray.length == 2) {
            html = contentArray[0] + '<span class="m-show-more"></span><span class="m-more-text">' + contentArray[1] + '</span><span class="m-show-less"></span>';
            console.log(html);
            $(e).html(html);
            $(e).find(".m-show-more").click(function () {
                $(this).parent().addClass("m-display-more");
            });
            $(e).find(".m-show-less").click(function () {
                $(this).parent().removeClass("m-display-more");
            });
        }
    });
});