const express = require("express");

const router = express.Router();

router.get("/", (request, resolve) => {
    resolve.render("index.html", {title: "First Web Node"});
})

router.get("/contact", (request, resolve) => {
    resolve.render("contact.html", {title: "Contact Us"})
})

module.exports = router;