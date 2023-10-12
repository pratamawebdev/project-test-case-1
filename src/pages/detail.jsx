import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import useFetch from "../hooks/useFetch";

const Detail = () => {
  const { id } = useParams();
  const [news, setNews] = useState({});

  useEffect(() => {
    const getNewsDetail = async () => {
      try {
        const newsData = await useFetch("bitcoin", id);
        const selectedNews = newsData.find((item) => item.source.id === id);
        setNews(selectedNews);
      } catch (error) {
        console.error("Error fetching news:", error);
        throw error;
      }
    };

    getNewsDetail();
  }, [id]);

  return (
    <div className="w-full bg-[#f9f9f9] py-[50px]">
      <div className="max-w-[1240px] mx-auto">
        <div className="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-2 ss:grid-cols-1 gap-8 px-4 text-black">
          {news && (
            <article className="flex flex-col gap-4">
              <p>Written by {news.author}</p>
              <h2>Title: {news.title}</h2>
              <p>desc: {news.description}</p>
              <p>url: {news.url}</p>
              <img
                src={news.urlToImage}
                alt=""
                className="w-full object-cover max-w-md"
              />
              <p>Published at: {news.publishedAt}</p>
              <p>Content: {news.content}</p>
            </article>
          )}
        </div>
      </div>
    </div>
  );
};

export default Detail;
