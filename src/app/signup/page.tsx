import myImage from "@/src/assets/banner-1.jpg";
import Count from "@/src/components/Count";
import Image from "next/image";
const SignUpPage = () => {
	return (
		<div>
			<h1 className="font-[400]">SignUpPage</h1>
			<p>
				Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nam excepturi
				ipsam quod earum laborum animi, aspernatur cum maxime illo modi nemo rem
				dolor ipsa veniam vel. Quod eligendi ad soluta!
			</p>
			<Image width={600} height={600} src={myImage} alt="hero image" />
			<Count />
		</div>
	);
};

export default SignUpPage;
