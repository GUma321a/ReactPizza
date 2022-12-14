import ReactPaginate from 'react-paginate';
import s from "./Pagination.module.scss";


const Pagination = ({ pageCount, onChangePage }) => {
  return <ReactPaginate 
  className={s.root} 
  breakLabel="..." 
  nextLabel=">" 
  onPageChange={(event) => onChangePage(event.selected + 1)} 
  pageRangeDisplayed={4} 
  pageCount={3} 
  forcePage={pageCount - 1} 
  previousLabel="<" 
  renderOnZeroPageCount={null} />;
};
 export default Pagination;