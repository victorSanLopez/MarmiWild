import MenuItem from "./MenuItems";

type foodItemsType = {
	id: number;
	itemName: string;
	description: string;
	foodImage: string;
	price: number;
	isFavorite: boolean;
};

function MenuList({ foodItems }: { foodItems: foodItemsType[] }) {
	console.log(foodItems);
	return (
		<>
			{foodItems.map((foodItem) => (
				<MenuItem
					key={foodItem.id}
					itemName={foodItem.itemName}
					description={foodItem.description}
					foodImage={foodItem.foodImage}
					price={foodItem.price}
					isFavorite={foodItem.isFavorite}
				/>
			))}
		</>
	);
}

export default MenuList;
