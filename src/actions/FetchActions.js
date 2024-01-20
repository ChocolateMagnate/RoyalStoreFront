const server = process.env.SERVER_ADDRESS || "http://localhost:8080"
export async function fetchCart(email, token) {
    return await fetch(server + "/get-cart?email=" + email, {headers: {"Authorization": "Bearer " + token}})
        .then(response => response.json())
        .catch(() => [])
}

export async function fetchRandomProducts() {
    return await fetch(server + "/get-random-products")
        .then(response => response.json())
        .catch(() => [])
}

export async function fetchProductsByParameters(parameters) {
    let query = server + "/get-products"
    for (const parameter in parameters)
        query += "&" + parameter + "=" + parameters[parameter]
    return await fetch(query)
        .then(response => response.json())
        .catch(() => [])
}
export async function fetchProductsFromSearch(search) {
    return await fetch(server + "/search-products-by-search&search=" + search)
        .then(response => response.json())
        .catch(() => [])
}

export async function addProductToCart(product, token) {
    return await fetch(server + "/add-product-to-cart?email=" + product.email + "&id=" + product.id,
        {method: "PUT", headers: {"Authorization": "Bearer " + token}, body: JSON.stringify(product)})
        .then(response => response.status)
        .catch(error => console.log(error))
}

export async function addProductToLiked(product, token) {
    return await fetch(server + "/add-product-to-liked?email=" + product.email + "&id=" + product.id,
        {method: "PUT", headers: {"Authorization": "Bearer " + token}, body: JSON.stringify(product)})
        .then(response => response.status)
        .catch(error => console.log(error))

}

export async function removeProductFromCart(user, good) {
    await fetch(server + "/remove-product-from-cart?email=" + user.email + "&id=" + good.id,
        {method: "DELETE", headers: {"Authorization": "Bearer " + user.token}, body: JSON.stringify(good)})
        .catch(error => console.log(error))
}

export async function submitSmartphone(smartphone, token) {
    const requestBody = new FormData()
    requestBody.append("model", smartphone.model)
    requestBody.append("brand", smartphone.brand)
    requestBody.append("price", smartphone.price)
    requestBody.append("memory", smartphone.memory)
    requestBody.append("os", smartphone.os)
    requestBody.append("description", smartphone.description)
    requestBody.append("photo", smartphone.photo)
    return await fetch(server + "/create-smartphone", {method: "POST", headers: {"Authorization": "Bearer " + token}, body: requestBody})
        .then(response => response.status)
        .catch(error => console.log(error))
}

export async function tryAuthenticateUser(user) {
    return await fetch(server + "/login",
        {method: "POST", headers: {"Content-Type": "application/json"}, body: JSON.stringify(user)})
        .then(response => response.json())
        .catch(null)
}

export async function tryRegisterUser(user) {
    return await fetch(server + "/register",
        {method: "POST", headers: {"Content-Type": "application/json"}, body: JSON.stringify(user)})
        .then(response => response.json())
}

export async function fetchLiked(user) {
    return await fetch(server + "/get-liked?email=" + user.email,
        {headers: {"Authorization": "Bearer " + user.token}})
        .then(response => response.json())
        .catch(() => [])
}