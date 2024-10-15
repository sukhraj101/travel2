import React from 'react';

const articles = [
  {
    id: 1,
    title: 'How to travel with paper map',
    date: 'June 6, 2019',
    imageUrl: 'https://transvelo.github.io/mytravel-html/assets/img/410x300/img1.jpg',
    link: '../blog/blog-single.html'
  },
  {
    id: 2,
    title: 'Change your place and get fresh air',
    date: 'June 6, 2019',
    imageUrl: 'https://transvelo.github.io/mytravel-html/assets/img/410x300/img2.jpg',
    link: '../blog/blog-single.html'
  },
  {
    id: 3,
    title: 'Pityful a rethoric question ran',
    date: 'June 6, 2019',
    imageUrl: 'https://transvelo.github.io/mytravel-html/assets/img/410x300/img3.jpg',
    link: '../blog/blog-single.html'
  }
];

const RecentArticles = () => {
  return (
    <div className="recent-article-block recent-article-v1">
      <div className="container space-1 mt-3 mb-lg-4">
        <div className="w-md-80 w-lg-50 text-center mx-md-auto mb-5">
          <h2 className="section-title text-black font-size-30 font-weight-bold mb-0">Recent Blog Article</h2>
        </div>
        <div className="row">
          {articles.map((article) => (
            <div key={article.id} className="col-md-6 col-lg-4">
              <div className="mb-4 mb-lg-0 text-md-center text-lg-left">
                <a className="d-block mb-3" href={article.link}>
                  <img className="img-fluid rounded-xs w-100" src={article.imageUrl} alt="Image-Description" />
                </a>
                <h6 className="font-size-17 pt-xl-1 font-weight-bold font-weight-bold mb-1">
                  <a href={article.link}>{article.title}</a>
                </h6>
                <a className="text-gray-1" href={article.link}>
                  <span>{article.date}</span>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default RecentArticles;
