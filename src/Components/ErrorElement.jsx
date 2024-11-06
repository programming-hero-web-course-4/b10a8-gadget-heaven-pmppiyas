import React from 'react';
import { useRouteError } from 'react-router-dom';

export default function ErrorElement() {
  const error = useRouteError();

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 text-center">
      <h1 className="text-4xl font-bold text-red-600">
        Oops! Something went wrong.
      </h1>
      <p className="mt-4 text-lg text-gray-700">
        Sorry, an unexpected error has occurred.
      </p>
      <p className="mt-2 text-sm text-gray-500">
        {error.statusText || error.message}
      </p>
      <button
        onClick={() => window.history.back()}
        className="mt-6 px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600"
      >
        Go Back
      </button>
    </div>
  );
}
