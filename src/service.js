import http from "../src/http-common";

const GetAllCategories = () => {
    return http.get("/api/categories");
};

const GetProductsByCategory = (id) => {
    return http.get(`/api/products/categoryproducts?CategoryId=${id}`);
};

const GetProductById = (ProductId) => {
    return http.get(`/api/products/${ProductId}`);
};

const RegisterAccount = (Firstname, Lastname, Username, Password, Role) => {
};

export default { GetAllCategories, GetProductsByCategory, GetProductById };