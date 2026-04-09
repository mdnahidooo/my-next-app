import Link from "next/link";

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

const BlogDetailPage = async ({ params }) => {
    const { blogId } = await params;
    const blog = blogs.find((blog) => blog.id === parseInt(blogId))

    console.log(blog, 'Show me params');

    return (
        <div className="bg-base-200">
            <h2 className='text-3xl m-10 text-center'>Detail of Blog</h2>

            {
                blog && <div className="max-w-10/12 mx-auto bg-base-200 min-h-screen flex flex-col">
                    <div className=" bg-base-200">
                        <div className="card bg-base-100 shadow-xl h-100 p-6 rounded-2xl">

                            <h1 className="text-2xl font-bold mb-2">
                                {blog.title}
                            </h1>

                            <p className="text-sm text-purple-500 mb-4">
                                By {blog.author}
                            </p>

                            <p className="text-gray-700 leading-relaxed">
                                {blog.content}
                            </p>

                            <div className="mt-6 flex justify-between items-center">
                                <span className="text-xs text-gray-400">
                                    👁 {blog.views} views
                                </span>

                                <Link href="/blogs" className="btn btn-outline btn-sm rounded-full">
                                    ← Back
                                </Link>
                            </div>

                        </div>
                    </div>
                </div>
            }
        </div>
    );
};

export default BlogDetailPage;