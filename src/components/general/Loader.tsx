// Loader component: shows a spinning SVG icon for loading states
export default function Loader() {
  return (
    <div
      className="flex h-[35px] w-[35px] items-center justify-center"
      role="status"
      aria-label="Loading user menu"
    >
      {/* Animated spinner icon */}
      <svg className="h-6 w-6 animate-spin text-gray-400" viewBox="0 0 24 24">
        <circle
          className="opacity-25"
          cx="12"
          cy="12"
          r="10"
          stroke="currentColor"
          strokeWidth="4"
          fill="none"
        />
        <path
          className="opacity-75"
          fill="#2b7fff"
          d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"
        />
      </svg>
    </div>
  );
}
