import Link from "next/link";


export const metadata = {
    title: "Blogs",
    description: "",
};

const Blogs = () => {

    const blogs = [
        {
            id: 1,
            title: "Getting Started with JavaScript",
            author: "Alice Johnson",
            date: new Date("2026-01-15"),
            tags: ["JavaScript", "Programming", "Web Development"],
            content: "JavaScript is one of the most popular programming languages used for building interactive web applications...",
            views: 1245,
            isPublished: true
        },
        {
            id: 2,
            title: "A Guide to Healthy Living",
            author: "Michael Smith",
            date: new Date("2026-02-10"),
            tags: ["Health", "Lifestyle", "Wellness"],
            content: "Healthy living involves more than just eating vegetables. It includes regular exercise, mental health care...",
            views: 980,
            isPublished: true
        },
        {
            id: 3,
            title: "Top 10 Travel Destinations in 2026",
            author: "Sophia Lee",
            date: new Date("2026-03-05"),
            tags: ["Travel", "Adventure", "Destinations"],
            content: "Looking for your next adventure? Here are the top 10 travel destinations you should consider in 2026...",
            views: 2100,
            isPublished: true
        },
        {
            id: 4,
            title: "Understanding Artificial Intelligence",
            author: "David Brown",
            date: new Date("2026-03-20"),
            tags: ["AI", "Technology", "Machine Learning"],
            content: "Artificial Intelligence (AI) is transforming industries by enabling machines to learn from data...",
            views: 1750,
            isPublished: false
        },
        {
            id: 5,
            title: "Beginner’s Guide to Personal Finance",
            author: "Emma Wilson",
            date: new Date("2026-04-01"),
            tags: ["Finance", "Money", "Budgeting"],
            content: "Managing your finances effectively is key to achieving long-term stability and success...",
            views: 1430,
            isPublished: true
        }
    ];


    return (
        <div className="w-10/12 mx-auto bg-base-500 p-10">
            <h2 className='text-3xl mb-5 text-center '>Here is all blogs:</h2>

            <div className="grid grid-cols-1 gap-5">

                {
                    blogs.map((blog) => (
                        <div
                            key={blog.id}
                            className="card bg-base-100 shadow-lg hover:shadow-xl transition duration-300 p-5 rounded-2xl"
                        >
                            <h2 className="text-xl font-semibold mb-1">
                                {blog.title}
                            </h2>

                            <p className="text-sm text-gray-500 mb-2">
                                By {blog.author}
                            </p>

                            <p className="text-sm text-gray-600">
                                {blog.content.slice(0, 70)}...
                            </p>

                            <div className="mt-4 flex justify-between items-center">
                                <span className="text-xs text-gray-400">
                                    👁 {blog.views}
                                </span>

                                <Link href={`/blogs/${blog.id}`}>
                                    <button className="btn btn-primary btn-sm rounded-full">
                                    Show Details
                                    </button>
                                </Link>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    );
};

export default Blogs;