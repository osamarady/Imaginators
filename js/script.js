/* eslint-env browser */
/* eslint-disable no-console, no-unused-vars */
/*global $, console, alert*/

/* Start Header */
/* Responsive Height for Header */
if ($(window).height() === 500) {
    $(".header").height($(window).height() + 200);
} else {
    $(".header").height($(window).height() + 200);
}

/* Header Content Height */
var windowLingth = $("nav").innerHeight();
$(".content").height($(".header").height() - windowLingth);
// niceScroll Style
$(function () {
    "use strict";
    $("html, body").niceScroll({
        cursorcolor: "#F22D64",
        horizrailenabled: false,
        cursorborder: "none"
    });
});