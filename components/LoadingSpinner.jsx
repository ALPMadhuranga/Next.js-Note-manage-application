// LoadingSpinner.js

const LoadingSpinner = () => {
  return (
    <div className="flex justify-center items-center min-h-screen flex-col p-0">
      <div className="relative w-16 h-16">
        <div className="absolute top-0 w-full h-full rounded-full bg-teal-200 opacity-50"></div>
        <div className="absolute top-0 w-16 h-16 border-4 border-teal-500 rounded-full animate-spin"></div>
      </div>
    </div>
  );
};

export default LoadingSpinner;