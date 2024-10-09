const crypto = require('crypto');

function auth(apiToken, telegramInitData) {
    const initData = new URLSearchParams(telegramInitData);

    initData.sort();
    const hash = initData.get("hash");
    initData.delete("hash");

    const dataToCheck = [...initData.entries()].map(([key, value]) => key + "=" + value).join("\n");
    console.log(dataToCheck);
    const secretKey = crypto.createHmac("sha256", "WebAppData").update(apiToken).digest();

    const _hash = crypto.createHmac("sha256", secretKey).update(dataToCheck).digest("hex");
    console.log(hash, _hash,hash === _hash);
    return hash === _hash;
}
const params = new URLSearchParams("tgWebAppData=user%3D%257B%2522id%2522%253A6583485575%252C%2522first_name%2522%253A%2522zhao%2522%252C%2522last_name%2522%253A%2522yangkun%2522%252C%2522language_code%2522%253A%2522zh-hans%2522%252C%2522allows_write_to_pm%2522%253Atrue%257D%26chat_instance%3D2970449520108226620%26chat_type%3Dprivate%26auth_date%3D1727668067%26hash%3Ddef6dfb738a9a9eb55cff2dfea9d122952ae9b762428c7e08696be5ecb08794e&tgWebAppVersion=7.10&tgWebAppPlatform=tdesktop&tgWebAppBotInline=1&tgWebAppThemeParams=%7B%22accent_text_color%22%3A%22%23168acd%22%2C%22bg_color%22%3A%22%23ffffff%22%2C%22bottom_bar_bg_color%22%3A%22%23ffffff%22%2C%22button_color%22%3A%22%2340a7e3%22%2C%22button_text_color%22%3A%22%23ffffff%22%2C%22destructive_text_color%22%3A%22%23d14e4e%22%2C%22header_bg_color%22%3A%22%23ffffff%22%2C%22hint_color%22%3A%22%23999999%22%2C%22link_color%22%3A%22%23168acd%22%2C%22secondary_bg_color%22%3A%22%23f1f1f1%22%2C%22section_bg_color%22%3A%22%23ffffff%22%2C%22section_header_text_color%22%3A%22%23168acd%22%2C%22section_separator_color%22%3A%22%23e7e7e7%22%2C%22subtitle_text_color%22%3A%22%23999999%22%2C%22text_color%22%3A%22%23000000%22%7D");
let jsonParams = {};
for (const [key, value] of params) {
    // console.log(key, value);
    jsonParams[key] = value;
}
auth("7183941304:AAHeaXArIfSJiK_GbaJn6Fzyc9oZ9J2BCik", jsonParams.tgWebAppData)