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

const RegisterAccount = (Firstname, Lastname, Username, Password) => {
    const submitForm = { "userName": Username, "password": Password, "Role": "guest", "firstName": Firstname, "lastName": Lastname };
    const post = http.post('https://localhost:7024/api/users', submitForm);
    return post.data;
};

const Login = (Username, Password) => {
    return http.get(`https://localhost:7024/api/users/login/${Username}/${Password}`);
};

const GetShoppingcart = (User) => {
    return http.get(`https://localhost:7024/api/shoppingcart/${String(User)}`);
};

export default { GetAllCategories, GetProductsByCategory, GetProductById, RegisterAccount, Login, GetShoppingcart };