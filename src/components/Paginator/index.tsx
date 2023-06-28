interface PaginatorProps {
  items_per_page: number;
  total_items: number;
  currentPage: number;
  onPageChange: (page: number) => void;
}

import styles from "./styles.module.scss";

export const Paginator = ({
  items_per_page,
  total_items,
  currentPage,
  onPageChange,
}: PaginatorProps) => {
  const totalPages = Math.ceil(total_items / items_per_page);

  const onNext = () => {
    onPageChange(currentPage + 1);
  };

  const onPrevious = () => {
    onPageChange(currentPage - 1);
  };

  const disablePreviousBtn = currentPage === 1;
  const disableNextBtn = currentPage === totalPages;

  return (
    <div className={styles.container}>
      <button onClick={onPrevious} disabled={disablePreviousBtn}>
        {"<"}
      </button>

      {Array(totalPages)
        .fill("")
        .map((_, index) => (
          <button
            className={currentPage === index + 1 ? styles.active : ""}
            onClick={() => onPageChange(index + 1)}
            key={index}
          >
            {index + 1}
          </button>
        ))}
      <button disabled={disableNextBtn} onClick={onNext}>
        {">"}
      </button>
    </div>
  );
};
