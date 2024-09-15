import { useState, useEffect } from "react";
import Navbar from "./Navbar/Navbar.jsx";
import CategoryBar from "./FilterBar/CategoryBar.jsx";
import useNewsHook from "../customHook/useNewsHook.jsx";
import { categoryData } from "../StaticData.jsx";
import NewsCard from "./common/NewsCard.jsx";
import Modal from "./common/Modal.jsx";
import NewsDetailsPage from "./NewsDetailsPage.jsx";
import ErrorPage from "./common/ErrorPage.jsx";
import LoadingPage from "./common/LoadingPage.jsx";
import SearchError from "../assets/SearchError.jpg";

const HomePage = () => {
  const [selectedCategory, setSelectedCategory] = useState(
    categoryData[0]?.value
  );
  const [selectedLanguage, setSelectedLanguage] = useState({
    label: "English",
    value: "en",
  });
  const [selectedCountry, setSelectedCountry] = useState({
    label: "India",
    value: "in",
  });

  const [showModal, setShowModal] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [debouncedSearchQuery, setDebouncedSearchQuery] = useState("");
  const [newsDetails, setNewsDetails] = useState({});
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

  const handleCardClick = (item) => {
    setShowModal(true);
    setNewsDetails(item);
  };

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage((prevPage) => prevPage + 1);
    }
  };

  const handlePreviousPage = () => {
    if (currentPage > 1) {
      setCurrentPage((prevPage) => prevPage - 1);
    }
  };

  /// Debounce search query
  useEffect(() => {
    const timer = setTimeout(() => {
      setDebouncedSearchQuery(searchQuery);
    }, 500);

    return () => clearTimeout(timer);
  }, [searchQuery]);

  /// Fetch news using the custom hook
  const result = useNewsHook(
    debouncedSearchQuery ? "" : selectedCategory,
    selectedLanguage?.value,
    selectedCountry?.value,
    debouncedSearchQuery
  );

  const { news = [], loading = false, error = null } = result || {};

  return (
    <div className="w-full min-h-screen">
      <div className="z-10 sticky top-0 left-0 w-full bg-white pb-2.5 md:pb-3 lg:pb-3">
        <Navbar
          searchQuery={searchQuery}
          setSearchQuery={setSearchQuery}
          selectedCountry={selectedCountry}
          setSelectedCountry={setSelectedCountry}
          selectedLanguage={selectedLanguage}
          setSelectedLanguage={setSelectedLanguage}
        />
        <CategoryBar
          selectedCategory={selectedCategory}
          setSelectedCategory={setSelectedCategory}
        />
      </div>

      <div className="w-full h-full">
        {error ? (
          <ErrorPage />
        ) : (
          <div
            className={`w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-4 md:gap-8 py-2 md:py-4 xl:py-5 bg-none`}
          >
            {/* {<h1>{news.length}</h1>} */}
            {loading ? (
              <LoadingPage />
            ) : news && news.length > 0 ? (
              news.map((item, index) => (
                <NewsCard
                  key={index}
                  title={item?.title}
                  image={item?.image}
                  content={item?.content}
                  sourceName={item?.source?.name}
                  url={item?.url}
                  date={item?.publishedAt}
                  onCardClick={() => handleCardClick(item)}
                />
              ))
            ) : (
              <div className="col-span-full text-center py-10 flex flex-col justify-center items-center">
                <img
                  src={SearchError}
                  alt="Search not found"
                  width={1000}
                  height={1000}
                  className="w-[200px] md:w-[400px] object-contain"
                />
                <h2 className="text-2xl font-bold text-gray-600">
                  No news found
                </h2>
                <p className="text-gray-500 mt-2 text-[14px] md:text-[16px]">
                  Try adjusting your search or category or filter selection
                </p>
              </div>
            )}
          </div>
        )}
      </div>

      {/* Open Modal */}
      {showModal && (
        <Modal showModal={showModal} setShowModal={setShowModal}>
          <NewsDetailsPage
            newsDetails={newsDetails}
            setShowModal={setShowModal}
          />
        </Modal>
      )}
      {/* Pagination Controls */}
      <div className="flex justify-between items-center mt-6">
        <button
          onClick={handlePreviousPage}
          disabled={currentPage === 1}
          className="px-4 py-1 bg-gray-300 text-gray-700 rounded-lg disabled:opacity-50 disabled:cursor-not-allowed"
        >
          Previous
        </button>
        <span className="text-gray-700">{` Page ${currentPage} of ${totalPages} As this is free plan Pagination can't be performed `}</span>
        <button
          onClick={handleNextPage}
          disabled={currentPage === totalPages}
          className="px-4 py-1 bg-gray-300 text-gray-700 rounded-lg disabled:opacity-50 disabled:cursor-not-allowed"
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default HomePage;
