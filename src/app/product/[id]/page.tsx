import { getSingleProduct } from "@/src/api-fetch";
import React from "react";

const ProductDetails = async ({ params }: { params: number }) => {
	const { id } = await params;
	console.log(id);
	const product = await getSingleProduct(Number(id));
	console.log(product);
	return <div>ProductDetails </div>;
};

export default ProductDetails;
