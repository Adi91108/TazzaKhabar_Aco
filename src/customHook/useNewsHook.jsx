import { useState, useEffect } from "react";
import axios from "axios";

// const API_KEY = "757e6178eb3b7d347457b54acbb10322";
const API_KEY = "a0c1df04e92b068264521fbda735e753";

const useNewsHook = (
  category = "general",
  language = "en",
  country = "us",
  searchQuery = ""
) => {
  const [news, setNews] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchNews = async () => {
      setLoading(true);
      setError(null);
      try {
        let url;
        let params = {
          lang: language,
          country: country,
          apikey: API_KEY,
        };

        if (searchQuery) {
          url = "https://gnews.io/api/v4/search";
          params.q = searchQuery;
        } else {
          url = "https://gnews.io/api/v4/top-headlines?category=general";
          params.category = category;
        }

        const response = await axios.get(url, { params });
        setNews(response.data.articles);
      } catch (err) {
        setError(err.message || "An error occurred while fetching news");
      } finally {
        setLoading(false);
      }
    };

    fetchNews();
  }, [category, language, country, searchQuery]);

  return { news, loading, error };
};

export default useNewsHook;
