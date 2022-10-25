import ReactPaginate from 'react-paginate';
import s from "./Pagination.module.scss";


const Pagination = ({ onChangePage }) => {
  return <ReactPaginate className={s.root} breakLabel="..." nextLabel=">" onPageChange={(event) => onChangePage(event.selected)} pageRangeDisplayed={4} pageCount={3} previousLabel="<" renderOnZeroPageCount={null} />;
};
 export default Pagination;