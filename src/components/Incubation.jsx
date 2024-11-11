import React, { useState } from "react";
import { Link } from "react-router-dom";

export default function Incubation() {
    const initialPosts = [
        {
            id: 1,
            title: "Swiggy Kitchen Innovations",
            founder: "Aditi Sharma",
            summary: `
                Swiggy Kitchen Innovations aims to revolutionize the cloud kitchen industry in India by integrating cutting-edge AI technologies 
                into the operational and logistical aspects of food delivery. The company focuses on improving the efficiency of cloud kitchen 
                operations, which are becoming increasingly popular across urban and semi-urban areas due to the growing demand for food delivery services.
                
                One of the core offerings of Swiggy Kitchen Innovations is its AI-powered inventory management system. This technology ensures 
                that ingredients are ordered based on real-time demand, minimizing waste and ensuring that stock levels are optimized. The system 
                also uses predictive analytics to forecast demand patterns and adjust inventory in real-time, which significantly reduces food wastage.
                
                Additionally, the startup offers real-time order optimization, which routes delivery drivers more efficiently based on live traffic 
                data and customer locations. By implementing machine learning models, Swiggy Kitchen Innovations is able to cut delivery times, 
                reduce fuel consumption, and lower delivery costs while providing customers with faster and more reliable service.
                
                The target market for Swiggy Kitchen Innovations includes tier-2 and tier-3 cities, where demand for cloud kitchens is growing 
                rapidly. The startup’s goal is to tap into the under-served markets, providing affordable, efficient, and sustainable food delivery 
                services in smaller towns across India, where traditional dine-in restaurants may not be as viable.
            `,
            upvotes: 0,
            downvotes: 0,
            comments: [],
        },
        {
            id: 2,
            title: "EduXpress",
            founder: "Rajesh Kumar",
            summary: `
                EduXpress is a revolutionary online learning platform aimed at upskilling working professionals in smaller towns across India. 
                The platform offers affordable, flexible, and industry-relevant courses in areas such as IT, digital marketing, data science, and 
                entrepreneurship, catering to the growing demand for practical knowledge and technical expertise among India's workforce.
                
                The primary goal of EduXpress is to bridge the skills gap by providing affordable education to individuals who may not have access 
                to expensive coaching institutes or universities. The platform's courses are designed to be completed in short, digestible modules 
                that can be easily integrated into a professional's busy schedule. 
                
                One of the standout features of EduXpress is its support for regional languages. Many of India's professionals in smaller towns or 
                rural areas have limited access to high-quality learning resources in their local languages. By offering courses in Hindi, Tamil, 
                Bengali, and other major regional languages, EduXpress ensures that it reaches a wider audience and is more inclusive.
                
                EduXpress also uses interactive learning techniques, including live workshops, peer discussions, and AI-powered mentoring, to create 
                an engaging and effective learning environment. The platform allows users to upskill at their own pace while offering certifications 
                that enhance employability and career advancement prospects.
            `,
            upvotes: 0,
            downvotes: 0,
            comments: [],
        },
        {
            id: 3,
            title: "MediCare Plus",
            founder: "Priya Deshmukh",
            summary: `
                MediCare Plus is a health-tech startup that aims to make healthcare accessible and affordable for people in rural areas of India 
                through the power of telemedicine. The startup has developed a mobile app that connects patients in remote areas with doctors and 
                specialists in urban centers, allowing them to receive medical consultations without having to travel long distances. 
                
                The app is designed with the rural user in mind, providing a simple and intuitive interface that can be used by individuals with 
                limited access to technology. The app supports video consultations, voice calls, and text messaging, enabling patients to seek medical 
                advice from professionals across various specializations, such as general medicine, pediatrics, gynecology, and mental health.
                
                MediCare Plus also uses AI-driven algorithms to help with diagnostics and treatment suggestions. The AI system analyzes patient 
                symptoms and medical history to recommend potential treatments or flag symptoms that require immediate attention. This feature helps 
                ensure that users receive timely medical advice and appropriate interventions, even if a doctor is not available for an immediate consultation.
                
                One of the primary objectives of MediCare Plus is to address the shortage of healthcare professionals in rural India, where many 
                areas suffer from a lack of medical facilities and expertise. By offering affordable and scalable telemedicine services, MediCare 
                Plus is helping to bridge the healthcare gap and improve health outcomes for underserved populations.
            `,
            upvotes: 0,
            downvotes: 0,
            comments: [],
        },
        {
            id: 4,
            title: "GreenKart",
            founder: "Vivek Reddy",
            summary: `
                GreenKart is an innovative e-commerce platform that focuses on delivering eco-friendly products across India. With the increasing 
                awareness around environmental issues, GreenKart aims to provide consumers with sustainable alternatives to traditional products, 
                ranging from biodegradable packaging materials to organic food and sustainable fashion.
                
                The platform curates a wide range of environmentally friendly products from local manufacturers and artisans, promoting a circular 
                economy that minimizes waste and promotes sustainable production practices. GreenKart’s product offerings include reusable household 
                items, organic beauty products, eco-friendly gadgets, and green fashion, helping individuals and businesses reduce their environmental 
                footprint.
                
                The startup also emphasizes education and awareness, offering resources and guides on sustainable living through its blog and social 
                media channels. GreenKart encourages users to make more responsible purchasing decisions, with an emphasis on products that have 
                minimal impact on the planet.
                
                By providing an online marketplace for eco-friendly products, GreenKart is creating a solution to the growing demand for sustainable 
                consumer goods in India. The platform not only targets environmentally conscious urban dwellers but also aims to spread sustainable 
                consumption habits in smaller cities and towns, where eco-friendly options are often hard to come by.
            `,
            upvotes: 0,
            downvotes: 0,
            comments: [],
        },
        {
            id: 5,
            title: "ChaiBot",
            founder: "Arjun Patel",
            summary: `
                ChaiBot is a unique AI-powered assistant designed specifically for the chai vendor community in India. Chai vendors across the country 
                often face challenges related to inventory management, sales tracking, and ordering supplies. ChaiBot addresses these issues by offering 
                a voice-activated point-of-sale (POS) system that helps vendors streamline their business operations without requiring advanced technical 
                skills.
                
                The ChaiBot system is powered by AI and designed to understand and respond to voice commands in regional languages, making it easy 
                for vendors to track daily sales, manage inventory levels, and reorder supplies with simple voice commands. The system can also generate 
                reports on sales performance, helping vendors optimize their operations and make data-driven decisions.
                
                In addition to inventory and sales management, ChaiBot also helps vendors with customer engagement. The system can send automated 
                reminders to loyal customers, manage delivery orders, and even suggest promotions based on local preferences. By automating these 
                tasks, ChaiBot allows vendors to focus on their core business of making and serving tea while improving customer satisfaction and 
                increasing sales.
                
                ChaiBot is particularly beneficial for small-scale chai vendors in India’s local markets, who may not have the resources or expertise 
                to invest in traditional point-of-sale systems. The system’s affordability and ease of use make it a perfect fit for India’s vast 
                chai vendor community, empowering them to modernize their operations and increase efficiency.
            `,
            upvotes: 0,
            downvotes: 0,
            comments: [],
        },
    ];
    
    const formatSummary = (summary) => {
        return summary
            .trim()
            .split(/(?:\r?\n){2,}/)
            .filter(para => para.trim() !== '')
            .map((para, index) => (
                <p key={index} className="mb-2">
                    {para.replace(/(?:\r?\n)+/g, ' ')}
                </p>
            ));
    };

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
                            comments: [...post.comments, { text: commentText, replies: [] }],
                        }
                        : post
                )
            );
            setCommentInputs({ ...commentInputs, [id]: "" });
        }
    };

    return (
        <>
            <div className="inset-0 flex flex-col items-center justify-center text-white bg-black py-5 opacity-80 rounded-lg mb-8 mx-16 mt-4">
                <h1 className="font-serif text-3xl font-bold mb-4">Startup Pitches</h1>
                <p className="font-serif text-xl text-center max-w-5xl">
                    Check out the latest startup ideas and innovations from our incubation program. Upvote your favorites and leave feedback for the founders.
                </p>
            </div>
            <div className="container mx-auto p-4 px-60">
                {posts
                    .sort((a, b) => b.upvotes - a.upvotes)
                    .map((post) => (
                        <div
                            key={post.id}
                            className="bg-white rounded shadow p-4 mb-6 hover:shadow-lg transition-shadow"
                        >
                            <h2 className="text-2xl font-bold mb-2">{post.title}</h2>
                            <p className="text-gray-600 mb-4">Founder: {post.founder}</p>
                            <div>{formatSummary(post.summary)}</div>
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
                                    onChange={(e) =>
                                        handleCommentChange(post.id, e.target.value)
                                    }
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