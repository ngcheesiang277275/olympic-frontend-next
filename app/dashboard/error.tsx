"use client";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <div className="flex min-h-screen items-center justify-center">
      <div className="max-w-md rounded-lg bg-red-50 p-6 text-center">
        <h2 className="mb-2 text-lg font-semibold text-red-700">Error</h2>
        <p className="text-red-600">Failed to fetch dashboard data</p>
        <p className="mt-4 text-sm text-gray-600">
          Please make sure your API server is running at http://127.0.0.1:8000
        </p>
        <button
          onClick={reset}
          className="mt-4 rounded-lg bg-red-600 px-4 py-2 text-sm font-medium text-white hover:bg-red-700"
        >
          Try again
        </button>
      </div>
    </div>
  );
}
