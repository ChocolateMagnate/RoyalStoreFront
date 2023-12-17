import {useState} from "react";
import "../styles/Pagination.css"

export default function Pagination() {

    const [currentPage, setCurrentPage] = useState(1);

    const goodsPerPage = 10;
    const lastIndex= currentPage * goodsPerPage;



    return(
        <div className={"pagination-buttons"}>
            <button className={"page"}>1</button>
            <button className={"page"}>2</button>
        </div>
    )
}