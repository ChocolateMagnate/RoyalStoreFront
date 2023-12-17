export function getDefaultProducts(category, setProducts) {
    let query = ""
    switch (category) {
        case "smartphones":
            query = "http://localhost:8080/get-random-smartphones"
            break
        case "laptops":
            query = "http://localhost:8080/get-random-laptops"
            break
        default:
        case "products":
            query = "http://localhost:8080/get-random-products"
            break
    }
    fetch(query)
        .then(response => response.json())
        .then(respondedGoods => {
            console.log(respondedGoods)
            setProducts(respondedGoods)
        })
        .catch(() => setProducts([]))
}

export function getProductsFromSearch(category, setProducts) {
    let query = ""
    switch (category) {
        case "smartphones":
            query = "http://localhost:8080/get-smartphones-by-text"
            break
        case "laptops":
            query = "http://localhost:8080/get-laptops-by-text"
            break
        default:
        case "products":
            query = "http://localhost:8080/get-products-by-text"
            break
    }
    fetch(query, { method: "POST" })
        .then(response => response.json())
        .then(respondedGoods => {
            console.log(respondedGoods)
            setProducts(respondedGoods)
        })
        .catch(() => setProducts([]))
}

export function getProductsFromParameters(query, parameters, setProducts) {
    for (const parameter in parameters)
        query += "&" + parameter + "=" + parameters[parameter]
    fetch(query, { method: "POST" })
        .then(response => response.json())
        .then(respondedGoods => {
            console.log(respondedGoods)
            setProducts(respondedGoods)
        })
        .catch(() => setProducts([]))
}

export default function selectProducts(goods, category, setProducts) {
    let query = ""
    switch (category) {
        case "smartphones":
            query = "http://localhost:8080/get-smartphones"
            break
        case "laptops":
            query = "http://localhost:8080/get-laptops"
            break
        default:
        case "products":
            query = "http://localhost:8080/get-products"
            break
    }
    if (goods.isSearching) getProductsFromSearch(goods.text, setProducts)
    else if (goods.parameters != null && goods.parameters.length !== 0)
        getProductsFromParameters(query, goods.parameters, setProducts)
    else getDefaultProducts(category, setProducts)
}