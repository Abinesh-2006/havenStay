import './Pagination.css';
function Pagination({currentPage,setCurrentPage,totalPages}){
    return(
<div className="pagination">
    <button onClick={()=>setCurrentPage(currentPage-1)}
        disabled={currentPage===1}>
            previous

    </button>
    {Array.from({length:totalPages},(_,index)=> (
        <button key={index}
        className={currentPage===index+1?"active":""}
        onClick={()=>setCurrentPage(index+1)}>
            {index+1}
        </button>
    ))}
    <button
    onClick={()=>setCurrentPage(currentPage+1)}
    disabled={currentPage===totalPages}>
        next
    </button>

</div>
    );
}
export default Pagination;