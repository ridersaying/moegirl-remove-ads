// ==UserScript==
// @name        MoeGirl 广告去除
// @homepage
// @icon
// @version     0.1
// @description 自动点击 MoeGirl 页面上的广告关闭按钮
// @author      ridersaying
// @license     MIT
// @grant       none
// @match       https://*.moegirl.org.cn/*
// @namespace https://greasyfork.org/users/1185853
// ==/UserScript==

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

async function remove_ads() {
    let clicked = 0
    while (true) {
        await sleep(500);
        let ads = document.getElementsByTagName("a")
        for (let j = 0; j < ads.length; j++) {
            if (ads[j].text.search("推广") != -1) {
                ads[j].click()
                clicked++
                console.log(`clicked ${clicked}`)
            }
        }
    }
}

remove_ads()
