import AES from "crypto-js/aes";
import enc from "crypto-js/enc-utf8";
import JsCookie from "js-cookie";
import axios from "axios";

window.jsc = JsCookie;

window.encryptData = function (data) {
    try {
        return AES.encrypt(data, window.Laravel.app_key).toString();
    } catch (error) {
        console.error("harap ubah json ke string");
    }
};

window.decryptData = function (data) {
    return AES.decrypt(data, window.Laravel.app_key).toString(enc);
};

window.axios = axios;
window.axios.defaults.headers.common["X-Requested-With"] = "XMLHttpRequest";
window.axios.defaults.headers.common["X-CSRF-TOKEN"] = window.Laravel.csrfToken;
try {
    window.axios.defaults.headers.common["Authorization"] = "Bearer " + token;
} catch (error) {}

import _ from "lodash";

window._ = _;

String.prototype.isMatch = function (s) {
    return this.match(s) !== null;
};
import { router } from "@inertiajs/react";
window.router = router;

import "./key.js";
Mousetrap.bind("ctrl+m", function () {
    router.visit("/app-login");
});

import "./sweetAlert.js";

window.api = window.location.origin + "/api/";
window.base = window.location.origin + "/";
window.subapi = window.location.origin + "/api" + window.location.pathname;

import Echo from "laravel-echo";

import Pusher from "pusher-js";
window.Pusher = Pusher;

window.Echo = new Echo({
    broadcaster: "pusher",
    key: Laravel.pusherKey,
    cluster: "ap1",
    forceTLS: true,
});

// window.Echo.channel("session").listen(".session.status", (e) => {
//     console.log(e);
// });
