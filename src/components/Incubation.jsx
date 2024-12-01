import React, { useState } from "react";
import { Link } from "react-router-dom";

export default function Incubation() {
  const initialPosts = [
    {
      id: 1,
      title: "Swiggy Kitchen Innovations",
      founder: "Aditi Sharma",
      summary: (
        <>
          <div className="flex flex-col gap-5 my-5">
            <p>
              Swiggy Kitchen Innovations aims to revolutionize the cloud kitchen
              industry in India by integrating cutting-edge AI technologies into
              the operational and logistical aspects of food delivery. The
              company focuses on improving the efficiency of cloud kitchen
              operations, which are becoming increasingly popular across urban
              and semi-urban areas due to the growing demand for food delivery
              services.
            </p>
            <p>
              One of the core offerings of Swiggy Kitchen Innovations is its
              AI-powered inventory management system. This technology ensures
              that ingredients are ordered based on real-time demand, minimizing
              waste and ensuring that stock levels are optimized. The system
              also uses predictive analytics to forecast demand patterns and
              adjust inventory in real-time, which significantly reduces food
              wastage.
            </p>
            <p>
              Additionally, the startup offers real-time order optimization,
              which routes delivery drivers more efficiently based on live
              traffic data and customer locations. By implementing machine
              learning models, Swiggy Kitchen Innovations is able to cut
              delivery times, reduce fuel consumption, and lower delivery costs
              while providing customers with faster and more reliable service.
            </p>
            <p>
              The target market for Swiggy Kitchen Innovations includes tier-2
              and tier-3 cities, where demand for cloud kitchens is growing
              rapidly. The startup's goal is to tap into the under-served
              markets, providing affordable, efficient, and sustainable food
              delivery services in smaller towns across India, where traditional
              dine-in restaurants may not be as viable.
            </p>
          </div>
        </>
      ),
      upvotes: 0,
      downvotes: 0,
      comments: [],
    },
    {
      id: 2,
      title: "Sustainable AgriTech Solutions",
      founder: "Ravi Patel",
      summary: (
        <>
          <div className="flex flex-col gap-5 my-5">
            <p>
              Sustainable AgriTech Solutions is a pioneering startup focused on
              transforming India's agricultural landscape by integrating
              advanced technologies to optimize farming practices and ensure
              environmental sustainability. With a growing population and
              increasing pressure on natural resources, the startup aims to make
              farming more efficient, eco-friendly, and profitable for
              smallholder farmers across the country.
            </p>
            <p>
              The company's flagship offering is its AI-powered crop management
              system, which uses machine learning algorithms and satellite data
              to analyze soil health, weather patterns, and crop conditions in
              real-time. This system provides actionable insights to farmers on
              optimal planting times, irrigation schedules, and pest control,
              leading to improved crop yields and reduced input costs.
            </p>
            <p>
              In addition to crop management, Sustainable AgriTech Solutions
              provides a sustainable irrigation system that uses sensors to
              monitor moisture levels in the soil and automate irrigation based
              on real-time data. This system not only conserves water but also
              improves crop quality by ensuring that crops receive the right
              amount of water at the right time.
            </p>
            <p>
              The target market for the startup includes farmers in rural and
              semi-rural regions, where traditional farming methods are still
              prevalent. By providing affordable, technology-driven solutions,
              the startup aims to help farmers increase their productivity,
              reduce resource wastage, and ultimately increase their income.
            </p>
          </div>
        </>
      ),
      upvotes: 0,
      downvotes: 0,
      comments: [],
    },
    {
      id: 3,
      title: "CleanEnergy Innovations",
      founder: "Anjali Rao",
      summary: (
        <>
          <div className="flex flex-col gap-5 my-5">
            <p>
              CleanEnergy Innovations is a green tech startup that focuses on
              harnessing renewable energy sources, particularly solar and wind,
              to provide clean and affordable power solutions to underserved
              regions in India. With India's ambitious renewable energy goals
              and growing demand for clean energy, CleanEnergy Innovations aims
              to bridge the energy access gap in remote and rural areas while
              contributing to a cleaner, sustainable future.
            </p>
            <p>
              One of the key offerings of CleanEnergy Innovations is its modular
              solar power systems, which are designed to provide affordable
              electricity to off-grid households and small businesses. These
              systems are equipped with advanced energy storage solutions,
              allowing users to store energy for use during the night or cloudy
              days, ensuring reliable power supply year-round.
            </p>
            <p>
              In addition to solar solutions, the company has developed a wind
              energy system that can be deployed in coastal and hilly regions
              where wind resources are abundant. The system is compact,
              cost-effective, and designed to work in remote locations with
              limited infrastructure, making it an ideal solution for rural
              electrification.
            </p>
            <p>
              The target market includes rural and semi-rural households, small
              businesses, and industries in areas with limited access to the
              grid. CleanEnergy Innovations aims to provide affordable, off-grid
              renewable energy solutions that not only reduce reliance on fossil
              fuels but also improve the quality of life for people living in
              energy-poor regions.
            </p>
          </div>
        </>
      ),
      upvotes: 0,
      downvotes: 0,
      comments: [],
    },
  ];

  const [posts, setPosts] = useState(initialPosts);
  const [commentInputs, setCommentInputs] = useState({});

  const handleUpvote = (id) => {
    setPosts(
      posts.map((post) =>
        post.id === id ? { ...post, upvotes: post.upvotes + 1 } : post
      )
    );
  };

  const handleDownvote = (id) => {
    setPosts(
      posts.map((post) =>
        post.id === id ? { ...post, downvotes: post.downvotes + 1 } : post
      )
    );
  };

  const handleCommentChange = (id, text) => {
    setCommentInputs({ ...commentInputs, [id]: text });
  };

  const handleAddComment = (id) => {
    const commentText = commentInputs[id];
    if (commentText) {
      setPosts(
        posts.map((post) =>
          post.id === id
            ? {
                ...post,
                comments: [
                  ...post.comments,
                  { text: commentText, replies: [] },
                ],
              }
            : post
        )
      );
      setCommentInputs({ ...commentInputs, [id]: "" });
    }
  };

  return (
    <>
      <div className="inset-0 flex flex-col items-center justify-center text-white bg-black py-5 opacity-80 rounded-lg mb-8 mx-2 md:mx-16 mt-4">
        <h1 className="font-serif md:text-3xl font-bold mb-4">
          Startup Pitches
        </h1>
        <p className="font-serif md:text-xl text-center max-w-5xl">
          Check out the latest startup ideas and innovations from our incubation
          program. Upvote your favorites and leave feedback for the founders.
        </p>
      </div>
      <div className="container mx-auto p-4 md:px-28 lg:px-60">
        {posts
          .sort((a, b) => b.upvotes - a.upvotes)
          .map((post) => (
            <div
              key={post.id}
              className="bg-white rounded shadow p-4 mb-6 hover:shadow-lg transition-shadow"
            >
              <h2 className="text-2xl font-bold mb-2">{post.title}</h2>
              <p className="text-gray-600 mb-4">Founder: {post.founder}</p>
              <div>{post.summary}</div>
              <div className="flex items-center mb-4">
                <button
                  onClick={() => handleUpvote(post.id)}
                  className="mr-2 text-green-500"
                >
                  <i className="fas fa-arrow-up"></i> Upvote
                </button>
                <span className="mr-4">{post.upvotes}</span>
                <button
                  onClick={() => handleDownvote(post.id)}
                  className="mr-2 text-red-500"
                >
                  <i className="fas fa-arrow-down"></i> Downvote
                </button>
                <span>{post.downvotes}</span>
              </div>
              <div className="border-t pt-4">
                <h3 className="font-semibold mb-2">Comments</h3>
                {post.comments.map((comment, index) => (
                  <div key={index} className="mb-2">
                    <p>{comment.text}</p>
                  </div>
                ))}
                <textarea
                  className="w-full border rounded p-2 mb-2"
                  rows="2"
                  placeholder="Add a comment..."
                  value={commentInputs[post.id] || ""}
                  onChange={(e) => handleCommentChange(post.id, e.target.value)}
                ></textarea>
                <button
                  onClick={() => handleAddComment(post.id)}
                  className="bg-orange-700 text-white px-4 py-2 rounded hover:bg-orange-800"
                >
                  Comment
                </button>
              </div>
            </div>
          ))}
      </div>
    </>
  );
}
