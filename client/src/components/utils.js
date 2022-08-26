export function setLocalStorage(userdetails) {
	//const withoutLiterals = JSON.stringify(userToken).replaceAll('"', "");
	localStorage.setItem("token", JSON.stringify(userdetails));
}

export function getLocalStorage() {
	return JSON.parse(localStorage.getItem("token"));
	// const tokenString = localStorage.getItem("token");
	// try {
	// 	const userToken = JSON.parse(tokenString);
	// 	return userToken.token;
	// } catch (e) {
	// 	return "";
	// }
}

export function clearLocalStorage() {
	localStorage.setItem("token", "");
}
