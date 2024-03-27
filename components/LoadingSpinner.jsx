// LoadingSpinner.js

const LoadingSpinner = () => {
  return (
    <div className="flex justify-center items-center min-h-screen flex-col p-0">
      <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-gray-800 bg-opacity-75 z-50">
        <div className="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-gray-900"></div>
      </div>
    </div>
  );
};

export default LoadingSpinner;
