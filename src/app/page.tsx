import axios from "axios";
import { getAllProducts } from "../api-fetch";

// interface Pet {
// 	ageMonths: number;
// 	createdAt: string;
// 	currency: string;
// 	goodWithKids: boolean;
// 	id: string;
// 	name: string;
// 	price: string;
// 	size: string;
// 	species: string;
// 	status: string;
// 	updatedAt: string;
// }

const HomePage = async () => {
	const pets = await getAllProducts();
	console.log(pets);
	return (
		<section className="py-24">
			<div className="container mx-auto">
				<div className="grid grid-cols-4 gap-6">
					{pets?.map((item) => (
						<div key={item.id} className="bg-gray-100 rounded-lg p-6">
							<h3 className="text-xl font-semibold mb-2">Card {item.title}</h3>
							<p className="text-gray-600">{item.description}</p>
						</div>
					))}
				</div>
			</div>
		</section>
	);
};

export default HomePage;
