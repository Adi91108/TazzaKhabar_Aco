import React from "react";
import { FiExternalLink } from "react-icons/fi";
import { formatISODate } from "../utils/UtilsFunctions";
import { IoMdClose } from "react-icons/io";

const NewsDetailsPage = ({ newsDetails, setShowModal }) => {
  return (
    <>
      <div className="relative bg-white w-[85%] md:w-[40rem] lg:w-[60rem] min-[600px] p-6 md:p-9 flex flex-col gap-8 rounded-xl bg-Page-pattern">
        <div className="absolute top-2 md:top-4 right-2 md:right-4 bg-none">
          <IoMdClose
            className="cursor-pointer text-[18px] md:text-[22px] bg-none"
            onClick={() => setShowModal(false)}
          />
        </div>

        <div className="w-full flex flex-col lg:flex-row gap-3 md:gap-8 bg-none">
          <div className="w-full lg:w-[300px] lg:h-[300px] flex-shrink-0 rounded-xl bg-blue-600/10 overflow-hidden bg-none">
            <img
              src={newsDetails?.image}
              alt=""
              width={1000}
              height={1000}
              className="w-full h-full object-cover"
            />
          </div>
          <div className="bg-none">
            <a
              onClick={(e) => e.stopPropagation()}
              href={`${newsDetails?.url}`}
              target="_blank"
              className="px-6 py-2 font-semibold text-[12px] rounded-full cursor-pointer active:scale-[0.9] duration-500 bg-none
                            w-fit bg-blue-700 text-white mb-1.5 md:mb-3 flex items-center gap-2"
            >
              Read Post
              <FiExternalLink className="text-[18px] bg-none" />
            </a>
            <h1 className="font-bold text-[16px] md:text-[25px] lg:text-[35px] mb-2 md:mb-4 bg-none">
              {newsDetails?.title}
            </h1>
            <h1 className="text-gray-600 text-[12px] line-clamp-3 md:line-clamp-none md:text-[14px] lg:text-[16px] font-medium mb-1 md:mb-2 lg:mb-6 bg-none">
              {newsDetails?.description}
            </h1>
            <h1 className="text-[12px] md:text-[15px] font-normal line-clamp-2 mb-2 md:mb-3 lg:mb-4 bg-none">
              {newsDetails?.content}
            </h1>
            <div className="w-full flex flex-col items-end text-[12px] md:text-[14px] text-gray-400 font-medium bg-none">
              <h1 className="bg-none">{newsDetails?.source?.name}</h1>
              <h1 className="bg-none">{formatISODate(newsDetails?.publishedAt)}</h1>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default NewsDetailsPage;
