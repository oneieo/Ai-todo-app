const MypageTap = ({ isSelected }: { isSelected: boolean }) => {
  return (
    <>
      {isSelected ? (
        <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M5.73317 12.2505C4.75857 12.8596 4.1665 13.9278 4.1665 15.0771V31.6672C4.1665 33.5081 5.65889 35.0005 7.49984 35.0005H32.4998C34.3408 35.0005 35.8332 33.5081 35.8332 31.6672V15.0771C35.8332 13.9278 35.2411 12.8596 34.2665 12.2505L21.7665 3.84066C21.226 3.50288 20.6129 3.33398 19.9998 3.33398C19.3867 3.33398 18.7736 3.50288 18.2332 3.84066L5.73317 12.2505ZM10.4165 30.0006C9.72615 30.0006 9.1665 30.5602 9.1665 31.2506C9.1665 31.9409 9.72615 32.5006 10.4165 32.5006H29.5832C30.2735 32.5006 30.8332 31.9409 30.8332 31.2506C30.8332 30.5602 30.2735 30.0006 29.5832 30.0006H10.4165Z"
            fill="white"
          />
          <path
            d="M9.1665 31.25C9.1665 30.5596 9.72615 30 10.4165 30H29.5832C30.2735 30 30.8332 30.5596 30.8332 31.25V31.25C30.8332 31.9404 30.2735 32.5 29.5832 32.5H10.4165C9.72615 32.5 9.1665 31.9404 9.1665 31.25V31.25Z"
            fill="url(#paint0_linear_2463_60542)"
          />
          <defs>
            <linearGradient
              id="paint0_linear_2463_60542"
              x1="12.4998"
              y1="30.041"
              x2="12.8554"
              y2="33.4971"
              gradientUnits="userSpaceOnUse"
            >
              <stop offset="0.1" stopColor="#FF9524" />
              <stop offset="0.9" stopColor="#5B4DFF" />
            </linearGradient>
          </defs>
        </svg>
      ) : (
        <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M5.73317 12.2505C4.75857 12.8596 4.1665 13.9278 4.1665 15.0771V31.6672C4.1665 33.5081 5.65889 35.0005 7.49984 35.0005H32.4998C34.3408 35.0005 35.8332 33.5081 35.8332 31.6672V15.0771C35.8332 13.9278 35.2411 12.8596 34.2665 12.2505L21.7665 3.84066C21.226 3.50288 20.6129 3.33398 19.9998 3.33398C19.3867 3.33398 18.7736 3.50288 18.2332 3.84066L5.73317 12.2505ZM10.4165 30.0006C9.72615 30.0006 9.1665 30.5602 9.1665 31.2506C9.1665 31.9409 9.72615 32.5006 10.4165 32.5006H29.5832C30.2735 32.5006 30.8332 31.9409 30.8332 31.2506C30.8332 30.5602 30.2735 30.0006 29.5832 30.0006H10.4165Z"
            fill="#A5A4A7"
          />
        </svg>
      )}
    </>
  );
};

export default MypageTap;
