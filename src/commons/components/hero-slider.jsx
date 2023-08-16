import React from "react";
import Textra from "react-textra";

const HeroSlider = ({ moreUrl = "#" }) => {
  const [current, setCurrent] = React.useState(0);

  const headingClasses =
    "text-3xl  sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white";
  const firstLetterClasses = "text-teal-500";

  React.useEffect(() => {
    console.log(current);
  }, [current]);

  return (
    <div className="container overflow-hidden">
      <div className="flex flex-col items-start gap-10 max-w-full">
        <div>
          <h4 className={headingClasses}>
            <span className={firstLetterClasses}>C</span>ommunication &
          </h4>
          <h4 className={headingClasses}>
            <span className={firstLetterClasses}>S</span>trategic
          </h4>
          <h4 className={headingClasses}>
            <span className={firstLetterClasses}>C</span>onsulting
          </h4>
        </div>
        <div className="flex flex-col lg:flex-row items-start w-full">
          <a
            className="bg-orange-600 text-white py-2 px-5 rounded-lg transition duration-300 hover:bg-orange-700 flex-grow-0"
            href={moreUrl}
          >
            Xem thêm
          </a>
          <blockquote className="ml-auto mt-10 lg:mt-0 text-white font-bold text-sm md:text-base lg:text-lg w-full lg:w-auto">
            <Textra
              effect="rightLeft"
              data={[
                <>
                  Chúng tôi mang lại 1 gải pháp toàn diện
                  <br />
                  hiệu quả tuyệt vời cho khách hàng
                  <br />
                  và hơn thế nữa ...
                </>,
                <>
                  Xây dựng thương hiệu uy tín
                  <br />
                  Tiếp cận đối tượng khách hàng phù hợp,
                  <br />
                  Tỷ suất hoàn vốn (ROI) cao
                </>,
                <>
                  Xác định đúng mục tiêu và tiêu chí đo lường
                  <br />
                  Thấu hiểu mọi vấn đề của hàng
                  <br />
                  Lựa chọn kênh phân phối hiệu quả
                </>,
              ]}
            />
          </blockquote>
        </div>
      </div>
    </div>
  );
};

export default HeroSlider;
