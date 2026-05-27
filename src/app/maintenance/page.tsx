export default function MaintenancePage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-900 to-slate-800">
      <div className="text-center px-6 py-12">
        <div className="mb-8">
          <h1 className="text-6xl font-bold text-white mb-4">
            Website Temporarily Unavailable
          </h1>
          <p className="text-xl text-gray-300">
            Please contact support.
          </p>
        </div>

        <div className="mt-12 space-y-4">
          <div className="inline-block">
            <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-t-blue-500 border-gray-600"></div>
          </div>
          <p className="text-gray-500 text-sm">
            We're performing scheduled maintenance.
          </p>
        </div>
      </div>
    </div>
  );
}
