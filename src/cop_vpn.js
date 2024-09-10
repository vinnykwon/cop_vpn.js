class CopVpn {
	constructor() {
		this.api = "https://api.copaccount.com/api"
		this.headers = {
			"User-Agent": "OkHttp Kotlin",
			"Content-Type": "application/json",
			"Authorization": "Bearer"
		}
	}

	async login(email, password) {
		const response = await fetch(
			`${this.api}/login`, {
				method: "POST",
				body: JSON.stringify({
					email: email,
					password: password,
					password_confirmation: password,
					device_brand: "samsung",
					device_os: "ubuntu",
					device_model: "SM-N9860",
					device_os_version: "Android 9"
				}),
				headers: this.headers
			})
		const data = await response.json()
		this.token = data.data.token
		this.headers["Authorization"] = `Bearer ${this.token}`;
		return data
	}

	async signUp(email, password) {
		const response = await fetch(
			`${this.api}/signup`, {
				method: "POST",
				body: JSON.stringify({
					email: email,
					password: password,
					password_confirmation: password
				}),
				headers: this.headers
			})
		return response.json()
	}

	async getServers() {
		const response = await fetch(
			`${this.api}/servers`, {
				method: "GET",
				headers: this.headers
			})
		return JSON.stringify(await response.json())
	}

	async getSubscriptionPlans() {
		const response = await fetch(
			`${this.api}/subscription-plans`, {
				method: "GET",
				headers: this.headers
			})
		return JSON.stringify(await response.json())
	}

	async getSubscriptionInfo() {
		const response = await fetch(
			`${this.api}/subscription-plans`, {
				method: "GET",
				headers: this.headers
			})
		return JSON.stringify(await response.json())
	}
}

module.exports = {CopVpn}
