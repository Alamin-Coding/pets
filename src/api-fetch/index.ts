import axios from "axios";

const api = axios.create({
	baseURL: "https://fakestoreapi.com",
	headers: {
		"Content-Type": "application/json",
	},
	withCredentials: true,
});

const getAllProducts = async () => {
	const response = await api.get("/products");
	const data = await response.data;
	return data;
};
const getSingleProduct = async (id: number) => {
	const response = await api.get(`/products/${id}`);
	const data = await response.data;
	return data;
};

export { getAllProducts, getSingleProduct };
