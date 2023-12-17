import {useState} from "react";
import "../styles/Pagination.css"

export default function Pagination(props) {

    const [currentPage, setCurrentPage] = useState(1);

    const goodsPerPage = 3;

    const lastIndex= currentPage * goodsPerPage;
    const firstIndex = lastIndex - goodsPerPage;

    const goods = props.goods.slice(firstIndex, lastIndex);


    const pages = Math.ceil(props.goods.length / goodsPerPage);

    const pageNumbers = [...(new Array(pages).keys())].map(i => i + 1);

    const handleClick = (number) => {
        setCurrentPage(number);
    }


    return(
        <div>

            <div className={"pagination-container"}>
                {goods.map(good => {
                    return(
                        <div className={"smartphone-container"} key={good.id}>
                            <img src={`data:image/jpeg;base64,${good.photo}`} alt="phone" className={"photos"}/>
                            <h3>{good.model}</h3>
                            <h3>{good.brand}</h3>
                            <h3>{good.price}</h3>
                        </div>
                    )
                })}
        </div>
            <div className={"whole-pagination"}>
                {pages>1 && (
                    <div className={"pagination"}>
                        {pageNumbers.map(number => (
                            <div
                                className={`page-number ${currentPage === number ? "active" : ''}`}
                                onClick={() => handleClick(number)}
                                key={number}>
                                <div>{number}</div>
                            </div>
                        ))}
                    </div>
                )}
            </div>

</div>
    )
}

