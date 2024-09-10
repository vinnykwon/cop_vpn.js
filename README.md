# cop_vpn.js
Mobile-API for [CopVpn](https://play.google.com/store/apps/details?id=com.copvpn.android) application a Secure, Fast, Reliable, and the ultimate VPN for Android, providing you with a secure, fast, and reliable internet connection. With CopVPN, you can encrypt your online traffic, protect your IP address, and unblock geo-restricted content.

## Example
```JavaScript
async function main() {
	const { CopVpn } = require("./cop_vpn.js")
	const copVpn = new CopVpn()
	await copVpn.login("email", "password")
}

main()
```
