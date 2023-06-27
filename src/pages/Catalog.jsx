import { useParams } from "react-router-dom";

export function Catalog ({
    isCategory = false
}) {
    const {name} = useParams();
    return <>
        {isCategory && <h1>Каталог товаров категории "{name}"</h1>}
        {!isCategory && <h1>Каталог товаров</h1>}
    </>
}