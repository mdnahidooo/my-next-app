import Link from 'next/link';

export default function NotFound() {
    return (
        <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 px-6">
            {/* 404 Badge */}
            <div className="text-center">
                <h1 className="text-9xl font-extrabold text-red-500 mb-4">404</h1>
                <h2 className="text-3xl text-gray-600 md:text-4xl font-bold mb-2">Page Not Found</h2>
                <p className="text-gray-600 mb-6">
                    Oops! The page you are looking for does not exist.
                </p>

                {/* Button */}
                <Link href="/">
                    <button className="btn btn-primary btn-lg">
                        Go Back Home
                    </button>
                </Link>
            </div>


        </div>
    );
}