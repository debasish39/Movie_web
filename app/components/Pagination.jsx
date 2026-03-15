"use client";

export default function Pagination({
  currentPage,
  setCurrentPage,
  totalItems,
  itemsPerPage
}) {

  const totalPages = Math.ceil(totalItems / itemsPerPage);

  const handlePrev = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const handleNext = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  return (
    <div className="flex justify-center items-center mt-10 gap-4">

      <button
        onClick={handlePrev}
        disabled={currentPage === 1}
        className="bg-gray-700 px-4 py-2 rounded disabled:opacity-40"
      >
        Prev
      </button>

      <span className="text-sm">
        Page {currentPage} / {totalPages}
      </span>

      <button
        onClick={handleNext}
        disabled={currentPage === totalPages}
        className="bg-gray-700 px-4 py-2 rounded disabled:opacity-40"
      >
        Next
      </button>

    </div>
  );
}