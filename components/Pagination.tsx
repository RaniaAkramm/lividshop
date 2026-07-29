type PaginationProps = {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
};

export default function Pagination({
  currentPage,
  totalPages,
  onPageChange,
}: PaginationProps) {
  if (totalPages <= 1) {
    return null;
  }

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        gap: "12px",
        marginTop: "50px",
        flexWrap: "wrap",
      }}
    >
      <button
        className="btn-outline"
        disabled={currentPage === 1}
        onClick={() => onPageChange(currentPage - 1)}
      >
        Previous
      </button>

      {Array.from(
        { length: totalPages },
        (_, index) => (
          <button
            key={index}
            onClick={() => onPageChange(index + 1)}
            className={
              currentPage === index + 1
                ? "btn-primary"
                : "btn-outline"
            }
          >
            {index + 1}
          </button>
        )
      )}

      <button
        className="btn-outline"
        disabled={currentPage === totalPages}
        onClick={() => onPageChange(currentPage + 1)}
      >
        Next
      </button>
    </div>
  );
}
