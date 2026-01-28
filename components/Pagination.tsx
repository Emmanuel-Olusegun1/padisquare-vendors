import { ChevronLeft, ChevronRight } from "lucide-react";

type Props = {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
};

export default function Pagination({
  currentPage,
  totalPages,
  onPageChange,
}: Props) {
  if (totalPages <= 1) return null;

  return (
    <div className="flex justify-center items-center gap-2 mt-10 text-black dark:text-white">
      {/* Previous Button */}
      <button
        onClick={() => onPageChange(currentPage - 1)}
        disabled={currentPage === 1}
        className="p-2 rounded-full border border-black/20 dark:border-white/20 bg-white dark:bg-black text-black dark:text-white hover:bg-gray-100 dark:hover:bg-gray-900 transition disabled:opacity-40 disabled:cursor-not-allowed"
        aria-label="Previous Page"
      >
        <ChevronLeft size={18} />
      </button>

      {/* Page Numbers */}
      {Array.from({ length: totalPages }).map((_, i) => {
        const page = i + 1;
        const active = page === currentPage;

        return (
          <button
            key={page}
            onClick={() => onPageChange(page)}
            className={`w-10 h-10 flex items-center justify-center rounded-full text-sm border transition ${
              active
                ? "bg-primary text-white border-primary"
                : "border-black/20 dark:border-white/20 text-black dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-800 cursor-pointer"
            }`}
            aria-label={`Go to page ${page}`}
          >
            {page}
          </button>
        );
      })}

      {/* Next Button */}
      <button
        onClick={() => onPageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
        className="p-2 rounded-full border border-black/20 dark:border-white/20 bg-white dark:bg-black text-black dark:text-white hover:bg-gray-100 dark:hover:bg-gray-900 transition disabled:opacity-40 cursor-pointer disabled:cursor-not-allowed"
        aria-label="Next Page"
      >
        <ChevronRight size={18} />
      </button>
    </div>
  );
}
