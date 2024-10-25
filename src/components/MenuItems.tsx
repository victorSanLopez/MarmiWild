import { useState } from "react";
type menuItemType = {
	itemName: string;
	description: string;
	foodImage: string;
	price: number;
	isFavorite: boolean;
};

function MenuItem({
	itemName,
	description,
	foodImage,
	price,
	isFavorite,
}: menuItemType) {
	const [isFavoriteIcon, setIsFavoriteIcon] = useState(isFavorite);
	const handleClickFavorite = () => {
		setIsFavoriteIcon((isFavoriteIcon) => !isFavoriteIcon);
	};

	return (
		<section className="itemContainer">
			<figure className="imgContainer">
				<img src={foodImage} alt={itemName} />
				<figcaption>
					<h2>{itemName}</h2>
					<p>{description}</p>
				</figcaption>
			</figure>
			<aside>{price} EUR</aside>
			<button type="button" onClick={handleClickFavorite}>
				{isFavoriteIcon ? "❤️" : "🖤"}
			</button>
		</section>
	);
}

export default MenuItem;
