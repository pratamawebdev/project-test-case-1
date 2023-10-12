import { Link } from "react-router-dom";
import useFetch from "../hooks/useFetch";
import { useState, useEffect } from "react";

const Blogs = () => {
  const [news, setNews] = useState([]);
  const [visibleNews, setVisibleNews] = useState(6);
  useEffect(() => {
    const getNews = async () => {
      try {
        const newsData = await useFetch("bitcoin");
        setNews(newsData);
      } catch (error) {
        console.error("Error fetching news:", error);
        throw error;
      }
    };

    getNews();
  }, []);

  const loadMoreNews = () => {
    setVisibleNews((prevVisibleNews) => prevVisibleNews + 6);
  };
  return (
    <div className="w-full bg-[#f9f9f9] py-[50px]">
      <div className="max-w-[1240px] mx-auto">
        <div className="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-2 ss:grid-cols-1 gap-8 px-4 text-black">
          {news.slice(0, visibleNews).map((item) => (
            <Link key={item.source.id} to={`/blogs/${item.source.id}`}>
              <div className="bg-white rounded-xl overflow-hidden drop-shadow-md ">
                <img
                  className="h-56 w-full object-cover"
                  src={item.urlToImage}
                />
                <div className="p-8">
                  <h3 className="font-bold text-2xl my-1">{item.title}</h3>
                  <p className="text-gray-600 text-xl">{item.description}</p>
                </div>
              </div>
            </Link>
          ))}
        </div>
        <div className="flex items-center justify-center">
          {visibleNews < news.length && (
            <button
              className="my-10 bg-blue-400 py-2 px-5 items-center justify-center flex rounded"
              type="primary"
              onClick={loadMoreNews}
            >
              More
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default Blogs;
