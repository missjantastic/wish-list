import { useState, useEffect } from "react";
import WishlistItem from "./WishlistItem";

function Wishlist() {
  const [wishlistData, setWishlistData] = useState([]); //if we run setWishlistData, rerender

  useEffect(() => {
    const data = [
      {
        title: "Pack of Dogs Playing Cards",
        url: [
          "https://www.artiphany.com/products/pack-of-dogs-playing-cards",
          "https://www.amazon.com/Artiphany-Playing-Cards-Custom-Limited/dp/B07GZ6GLT8",
        ],
        price: 13.5,
        image:
          "https://m.media-amazon.com/images/I/81IyLrlw86L._AC_SL1500_.jpg",
        claimed: false,
        id: 1,
      },
      {
        title: "Disposable Cameras",
        url: [
          "https://www.amazon.com/Funsaver-Time-Film-Camera-2-pack/dp/B000HZDYAG/ref=sr_1_4?crid=1SMFRC8T4XD2J&dib=eyJ2IjoiMSJ9.JhimQOzQExqpYkoXGOoI64ZNVyw0_ZcgfXxDHmQPxgxIZs-Zg4e5Jj1qUSaw18Zs3xZqPYczSGllJR_OANTYxzx5wLlleYDmUAEoPmgXaYBX2IMsVBxkxFlNYxMrN-MeX8KUmGKLLrogGuNzIkx9oALeb0_01rw7y76pu2lW5u1vRmZWgLv8PxA6TNjgoyZZvPm-p9sonQHc7_sIaXgOgSB94EO_b1ShqvV_4VCtm6E.o0hkkHYgB07CCV7dsw2qKp1t7EwO4x2QLuowd9c1Zek&dib_tag=se&keywords=disposable+camera&qid=1733559049&sprefix=disposable+camer%2Caps%2C171&sr=8-4",
        ],
        price: 30.0,
        image:
          "https://m.media-amazon.com/images/I/717q0vUiWwL._AC_SL1500_.jpg",
        claimed: false,
        id: 2,
      },
    ];

    setWishlistData(data);
  }, []);

  return (
    <ul>
      {wishlistData.map((wishlistItem) => (
        <WishlistItem
          title={wishlistItem.title}
          image={wishlistItem.image}
          price={wishlistItem.price}
          claimed={wishlistItem.claimed}
          id={wishlistItem.id}
        />
      ))}
    </ul>
  );
}

export default Wishlist;
