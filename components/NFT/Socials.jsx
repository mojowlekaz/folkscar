import React from "react";

export default function Socials() {
  const FooterItems = ["Twitter", "Discord", "Medium", "Whitepaper", "Faq"];

  return (
    <div className="bg-black h-full flex flex-col gap-10 justify-center items-center">
      <div className="fline"></div>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="116"
        height="28"
        viewBox="0 0 116 28"
        fill="none"
      >
        <path
          d="M6.4 26.68H0V1.36H18.8V6.56H6.4V12.36H18V17.56H6.4V26.68Z"
          fill="white"
        />
        <path
          d="M20.9969 14C20.9969 10.7733 21.3569 8.21333 22.0769 6.32C22.8235 4.42667 24.0902 3.06667 25.8769 2.24C27.6902 1.41333 30.2102 1 33.4369 1C35.8635 1 37.8769 1.22667 39.4769 1.68C41.0769 2.13333 42.3435 2.86667 43.2769 3.88C44.2102 4.89333 44.8635 6.24 45.2369 7.92C45.6369 9.57333 45.8369 11.6 45.8369 14C45.8369 16.4267 45.6369 18.48 45.2369 20.16C44.8635 21.8133 44.2102 23.1467 43.2769 24.16C42.3435 25.1733 41.0769 25.9067 39.4769 26.36C37.8769 26.8133 35.8635 27.04 33.4369 27.04C31.0102 27.04 28.9969 26.8133 27.3969 26.36C25.7969 25.9067 24.5302 25.1733 23.5969 24.16C22.6635 23.1467 21.9969 21.8133 21.5969 20.16C21.1969 18.48 20.9969 16.4267 20.9969 14ZM33.4369 21.44C35.1435 21.44 36.4235 21.2267 37.2769 20.8C38.1302 20.3733 38.7035 19.6267 38.9969 18.56C39.2902 17.4667 39.4369 15.9467 39.4369 14C39.4369 12.08 39.2902 10.5867 38.9969 9.52C38.7035 8.45333 38.1302 7.70667 37.2769 7.28C36.4235 6.82667 35.1435 6.6 33.4369 6.6C31.7569 6.6 30.4769 6.82667 29.5969 7.28C28.7435 7.70667 28.1569 8.45333 27.8369 9.52C27.5435 10.5867 27.3969 12.08 27.3969 14C27.3969 15.9467 27.5435 17.4667 27.8369 18.56C28.1569 19.6267 28.7435 20.3733 29.5969 20.8C30.4769 21.2267 31.7569 21.44 33.4369 21.44Z"
          fill="white"
        />
        <path
          d="M68.2438 21.24V26.68H49.8438V1.36H56.2438V21.24H68.2438Z"
          fill="white"
        />
        <path
          d="M77.4547 26.68H71.0547V1.36H77.4547V11.96C77.508 11.96 77.548 11.96 77.5747 11.96C77.8414 11.96 78.148 11.7467 78.4947 11.32C78.868 10.8933 79.2014 10.4667 79.4947 10.04L84.8547 1.36H91.8147V1.48L87.2547 8.84C86.8547 9.50667 86.4014 10.2267 85.8947 11C85.388 11.7467 84.8814 12.4133 84.3747 13C83.8947 13.56 83.468 13.9067 83.0947 14.04V14.16C83.468 14.32 83.8947 14.6667 84.3747 15.2C84.8814 15.7067 85.388 16.3067 85.8947 17C86.428 17.6667 86.9347 18.3333 87.4147 19L92.7347 26.56V26.68H85.3747L80.3747 19V19.04C80.2147 18.7733 79.9613 18.4267 79.6147 18C79.2947 17.5467 78.948 17.1333 78.5747 16.76C78.228 16.3867 77.9214 16.2 77.6547 16.2C77.6013 16.2 77.5614 16.2 77.5347 16.2C77.508 16.2 77.4814 16.2 77.4547 16.2V26.68Z"
          fill="white"
        />
        <path
          d="M94.6725 20.16C95.8458 20.56 97.1258 20.88 98.5125 21.12C99.9258 21.3333 101.326 21.44 102.713 21.44C104.606 21.44 106.006 21.36 106.912 21.2C107.846 21.0133 108.459 20.7333 108.753 20.36C109.046 19.9867 109.192 19.5067 109.192 18.92C109.192 18.4133 109.086 18.0133 108.872 17.72C108.659 17.4267 108.246 17.2 107.632 17.04C107.019 16.8533 106.112 16.7067 104.912 16.6L102.272 16.36C100.299 16.1733 98.7392 15.76 97.5925 15.12C96.4725 14.48 95.6725 13.6267 95.1925 12.56C94.7392 11.4667 94.5125 10.16 94.5125 8.64C94.5125 6.82667 94.8725 5.36 95.5925 4.24C96.3392 3.12 97.5392 2.30667 99.1925 1.8C100.846 1.26667 103.046 1 105.793 1C109.366 1 112.312 1.46667 114.632 2.4L114.512 7.84L114.393 8C111.753 7.06667 108.993 6.6 106.113 6.6C104.726 6.6 103.659 6.68 102.912 6.84C102.166 6.97333 101.646 7.2 101.353 7.52C101.059 7.84 100.912 8.29333 100.912 8.88C100.912 9.46667 101.006 9.90667 101.192 10.2C101.406 10.4933 101.819 10.72 102.433 10.88C103.046 11.0133 103.939 11.1467 105.113 11.28L107.632 11.56C109.766 11.8 111.406 12.2267 112.552 12.84C113.699 13.4533 114.486 14.28 114.912 15.32C115.366 16.3333 115.592 17.5733 115.592 19.04C115.592 20.8267 115.206 22.32 114.433 23.52C113.686 24.6933 112.459 25.5733 110.753 26.16C109.046 26.7467 106.766 27.04 103.912 27.04C102.046 27.04 100.366 26.9467 98.8725 26.76C97.3792 26.5467 95.9258 26.2667 94.5125 25.92V20.28L94.6725 20.16Z"
          fill="white"
        />
      </svg>
      <div className="px-10">
        <div className="flex gap-5">
          {FooterItems.map((item, index) => (
            <div key={index}>
              <p className="uppercase helvetica font-bold text-[16px] leading-[24px]">
                {item}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}