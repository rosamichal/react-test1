import { useState } from "react";
import Filters from "./filters";
export default function Parent() {
    const products = [{ name: "jabłko" }, { name: "dynia" }, { name: "śliwka" }];

    const [filteredProducts, setFilteredProducts] = useState(products);

    const refresh = () => {
        filter();
    };

    const filter = name => {
        console.log(name);
        setFilteredProducts(products.filter(p => p.name.startsWith(name)));
    };

    return (
        <>
            <Filters filter={filter}></Filters>
            <button onClick={refresh}>Odśwież</button>
            {filteredProducts.map(p => (
                <p key={p.name}>{p.name}</p>
            ))}
        </>
    );
}
