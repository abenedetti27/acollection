import React from 'react';
import { Link } from 'react-router-dom';

const BlogPage = () => {
  // Array of blog articles
  const blogArticles = [
    {
      id: 1,
      title: 'Spotlight on Local Artist: Exploring the Vibrancy of Community Art',
      content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam in mauris ut ante dapibus fringilla...',
      author: 'John Doe',
      date: 'February 15, 2023',
    },
    {
      id: 2,
      title: 'Navigating the Art Industry: Challenges and Opportunities',
      content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam in mauris ut ante dapibus fringilla...',
      author: 'Jane Smith',
      date: 'March 5, 2023',
    },
    // Add more articles as needed
  ];

  return (
    <div className="blog-page">
      <h1>Art Blog</h1>

      <div className="blog-articles">
        {blogArticles.map((article) => (
          <div key={article.id} className="blog-article">
            <h2>{article.title}</h2>
            <p>{article.content}</p>
            <p className="meta-info">
              By {article.author} | {article.date}
            </p>
            <Link to={`/blog/${article.id}`} className="read-more-link">
              Read More
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BlogPage;
