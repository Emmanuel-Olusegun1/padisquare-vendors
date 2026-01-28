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
    <div className="flex justify-center gap-2 mt-10 dark:text-white">
      {Array.from({ length: totalPages }).map((_, i) => {
        const page = i + 1;
        const active = page === currentPage;

        return (
          <button
            key={page}
            onClick={() => onPageChange(page)}
            className={`px-3 py-1.5 rounded-md text-sm border transition ${
              active
                ? "bg-primary text-white border-primary"
                : "border-white/10 text-white/60 hover:border-primary/40"
            }`}
          >
            {page}
          </button>
        );
      })}
    </div>
  );
}
