import { useState } from "react";
export default function Filters({ filter }) {
    const [name, setName] = useState([]);

    const submitHandler = e => {
        e.preventDefault();

        filter(name);
    };

    return (
        <form onSubmit={submitHandler}>
            <input type='text' value={name} onChange={e => setName(e.target.value)}></input>
            <button type='submit'>Filtruj</button>
        </form>
    );
}
