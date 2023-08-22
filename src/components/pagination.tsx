import React, {useEffect, useState} from 'react';
import {useLocation, useNavigate} from 'react-router-dom';
import queryString from 'query-string';


const Pagination = ({data, setActiveItems}: any) => {
    const location = useLocation();
    const navigate = useNavigate();

    const [itemsPerPage, setItemsPerPage] = useState(18)
    const [items, setItems] = useState(data)
    const totalPage = Math.ceil(data.length / itemsPerPage)
    const [totalPages, settotalPages] = useState(totalPage)

    const queryParams = queryString.parse(location.search);
    const currentPageInUrl: any = queryParams.page ? queryParams.page : 1;
    const [currentPage, setCurrentPage] = useState(parseInt(currentPageInUrl));
    const indexOfLastItem = currentPage * itemsPerPage;

    useEffect(() => {
        const pageItems = items.slice((currentPage - 1) * itemsPerPage, ((currentPage - 1) * itemsPerPage) + itemsPerPage)
        setActiveItems(pageItems)
    }, [currentPage])

    function handlePageChange(page: number) {
        setCurrentPage(page)
        navigate(`?page=${page}`);
    }

    return (
        <div className='mb-[100px]'>
            <div className="pagination flex gap-[45px] justify-end mt-[40px]">
                <button onClick={() => handlePageChange(currentPage - 1)}
                        disabled={currentPage === 1}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                        <path
                            d="M13.384 17.9551C13.6184 17.7207 13.75 17.4028 13.75 17.0713C13.75 16.7399 13.6184 16.422 13.384 16.1876L7.19652 10.0001L13.384 3.81256C13.6117 3.57681 13.7377 3.26106 13.7349 2.93331C13.732 2.60556 13.6006 2.29205 13.3688 2.06029C13.137 1.82853 12.8235 1.69707 12.4958 1.69422C12.168 1.69137 11.8523 1.81736 11.6165 2.04506L4.54527 9.11631C4.31093 9.35072 4.17928 9.66861 4.17928 10.0001C4.17928 10.3315 4.31093 10.6494 4.54527 10.8838L11.6165 17.9551C11.8509 18.1894 12.1688 18.321 12.5003 18.321C12.8317 18.321 13.1496 18.1894 13.384 17.9551V17.9551Z"
                            fill="#F34802"/>
                    </svg>
                </button>
                {Array.from({length: totalPages}, (_, index) => (
                    <button
                        key={index}
                        onClick={() => handlePageChange(index + 1)}
                        className={currentPage === index + 1 ? 'active-btn' : `text-lg font-medium text-[#4C4C4C]`}
                    >
                        {index + 1}
                    </button>
                ))}
                <button onClick={() => handlePageChange(currentPage + 1)}
                        disabled={indexOfLastItem >= data.length}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="22" viewBox="0 0 20 22" fill="none">
                        <path
                            d="M6.61598 3.04513C6.38164 3.28021 6.25 3.59901 6.25 3.93141C6.25 4.26381 6.38164 4.58261 6.61598 4.81769L12.8035 11.0229L6.61598 17.2281C6.38829 17.4645 6.26229 17.7812 6.26514 18.1099C6.26799 18.4385 6.39945 18.753 6.63121 18.9854C6.86297 19.2178 7.17649 19.3496 7.50423 19.3525C7.83198 19.3554 8.14773 19.229 8.38348 19.0007L15.4547 11.9092C15.6891 11.6741 15.8207 11.3553 15.8207 11.0229C15.8207 10.6905 15.6891 10.3717 15.4547 10.1366L8.38348 3.04513C8.14907 2.81012 7.83119 2.6781 7.49973 2.6781C7.16828 2.6781 6.85039 2.81012 6.61598 3.04513Z"
                            fill="#F34802"/>
                    </svg>
                </button>
            </div>
        </div>
    );
};

export default Pagination;