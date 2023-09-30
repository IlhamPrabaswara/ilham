import React, { useState } from 'react';

const DarkModeToggle: React.FC = () => {
  const [isDarkMode, setIsDarkMode] = useState<boolean>(false);

  const toggleDarkMode = () => {
    setIsDarkMode((prev) => !prev);
    document.documentElement.classList.toggle('dark');
  };

  return (
    <button
      aria-label="toggleDarkMode"
      className="rounded-full p-2 outline outline-1 outline-sys-light-outline dark:outline-sys-dark-outline"
      onClick={toggleDarkMode}
    >
      <svg
        className="fill-sys-light-on-background dark:fill-sys-dark-on-background"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        {isDarkMode ? (
          <>
            <mask
              id="mask0_48_99"
              style={{ maskType: 'alpha' }}
              maskUnits="userSpaceOnUse"
              x="0"
              y="0"
              width="24"
              height="24"
            >
              <rect width="24" height="24" fill="#D9D9D9" />
            </mask>
            <g mask="url(#mask0_48_99)">
              <path d="M12 15C12.8333 15 13.5417 14.7083 14.125 14.125C14.7083 13.5417 15 12.8333 15 12C15 11.1667 14.7083 10.4583 14.125 9.875C13.5417 9.29167 12.8333 9 12 9C11.1667 9 10.4583 9.29167 9.875 9.875C9.29167 10.4583 9 11.1667 9 12C9 12.8333 9.29167 13.5417 9.875 14.125C10.4583 14.7083 11.1667 15 12 15ZM12 17C10.6167 17 9.4375 16.5125 8.4625 15.5375C7.4875 14.5625 7 13.3833 7 12C7 10.6167 7.4875 9.4375 8.4625 8.4625C9.4375 7.4875 10.6167 7 12 7C13.3833 7 14.5625 7.4875 15.5375 8.4625C16.5125 9.4375 17 10.6167 17 12C17 13.3833 16.5125 14.5625 15.5375 15.5375C14.5625 16.5125 13.3833 17 12 17ZM2 13C1.71667 13 1.47917 12.9042 1.2875 12.7125C1.09583 12.5208 1 12.2833 1 12C1 11.7167 1.09583 11.4792 1.2875 11.2875C1.47917 11.0958 1.71667 11 2 11H4C4.28333 11 4.52083 11.0958 4.7125 11.2875C4.90417 11.4792 5 11.7167 5 12C5 12.2833 4.90417 12.5208 4.7125 12.7125C4.52083 12.9042 4.28333 13 4 13H2ZM20 13C19.7167 13 19.4792 12.9042 19.2875 12.7125C19.0958 12.5208 19 12.2833 19 12C19 11.7167 19.0958 11.4792 19.2875 11.2875C19.4792 11.0958 19.7167 11 20 11H22C22.2833 11 22.5208 11.0958 22.7125 11.2875C22.9042 11.4792 23 11.7167 23 12C23 12.2833 22.9042 12.5208 22.7125 12.7125C22.5208 12.9042 22.2833 13 22 13H20ZM12 5C11.7167 5 11.4792 4.90417 11.2875 4.7125C11.0958 4.52083 11 4.28333 11 4V2C11 1.71667 11.0958 1.47917 11.2875 1.2875C11.4792 1.09583 11.7167 1 12 1C12.2833 1 12.5208 1.09583 12.7125 1.2875C12.9042 1.47917 13 1.71667 13 2V4C13 4.28333 12.9042 4.52083 12.7125 4.7125C12.5208 4.90417 12.2833 5 12 5ZM12 23C11.7167 23 11.4792 22.9042 11.2875 22.7125C11.0958 22.5208 11 22.2833 11 22V20C11 19.7167 11.0958 19.4792 11.2875 19.2875C11.4792 19.0958 11.7167 19 12 19C12.2833 19 12.5208 19.0958 12.7125 19.2875C12.9042 19.4792 13 19.7167 13 20V22C13 22.2833 12.9042 22.5208 12.7125 22.7125C12.5208 22.9042 12.2833 23 12 23ZM5.65 7.05L4.575 6C4.375 5.81667 4.27917 5.58333 4.2875 5.3C4.29583 5.01667 4.39167 4.775 4.575 4.575C4.775 4.375 5.01667 4.275 5.3 4.275C5.58333 4.275 5.81667 4.375 6 4.575L7.05 5.65C7.23333 5.85 7.325 6.08333 7.325 6.35C7.325 6.61667 7.23333 6.85 7.05 7.05C6.86667 7.25 6.6375 7.34583 6.3625 7.3375C6.0875 7.32917 5.85 7.23333 5.65 7.05ZM18 19.425L16.95 18.35C16.7667 18.15 16.675 17.9125 16.675 17.6375C16.675 17.3625 16.7667 17.1333 16.95 16.95C17.1333 16.75 17.3625 16.6542 17.6375 16.6625C17.9125 16.6708 18.15 16.7667 18.35 16.95L19.425 18C19.625 18.1833 19.7208 18.4167 19.7125 18.7C19.7042 18.9833 19.6083 19.225 19.425 19.425C19.225 19.625 18.9833 19.725 18.7 19.725C18.4167 19.725 18.1833 19.625 18 19.425ZM16.95 7.05C16.75 6.86667 16.6542 6.6375 16.6625 6.3625C16.6708 6.0875 16.7667 5.85 16.95 5.65L18 4.575C18.1833 4.375 18.4167 4.27917 18.7 4.2875C18.9833 4.29583 19.225 4.39167 19.425 4.575C19.625 4.775 19.725 5.01667 19.725 5.3C19.725 5.58333 19.625 5.81667 19.425 6L18.35 7.05C18.15 7.23333 17.9167 7.325 17.65 7.325C17.3833 7.325 17.15 7.23333 16.95 7.05ZM4.575 19.425C4.375 19.225 4.275 18.9833 4.275 18.7C4.275 18.4167 4.375 18.1833 4.575 18L5.65 16.95C5.85 16.7667 6.0875 16.675 6.3625 16.675C6.6375 16.675 6.86667 16.7667 7.05 16.95C7.25 17.1333 7.34583 17.3625 7.3375 17.6375C7.32917 17.9125 7.23333 18.15 7.05 18.35L6 19.425C5.81667 19.625 5.58333 19.7208 5.3 19.7125C5.01667 19.7042 4.775 19.6083 4.575 19.425Z" />
            </g>
          </>
        ) : (
          <>
            <mask
              id="mask0_48_93"
              style={{ maskType: 'alpha' }}
              maskUnits="userSpaceOnUse"
              x="0"
              y="0"
              width="25"
              height="25"
            >
              <rect
                x="0.600159"
                y="0.905518"
                width="24"
                height="24"
                fill="#D9D9D9"
              />
            </mask>
            <g mask="url(#mask0_48_93)">
              <path
                d="M12.6002 21.9055C10.1002 21.9055 7.97516 21.0305 6.22516 19.2805C4.47516 17.5305 3.60016 15.4055 3.60016 12.9055C3.60016 10.4055 4.47516 8.28052 6.22516 6.53052C7.97516 4.78052 10.1002 3.90552 12.6002 3.90552C12.8335 3.90552 13.0627 3.91385 13.2877 3.93052C13.5127 3.94718 13.7335 3.97218 13.9502 4.00552C13.2668 4.48885 12.721 5.11802 12.3127 5.89302C11.9043 6.66802 11.7002 7.50552 11.7002 8.40552C11.7002 9.90552 12.2252 11.1805 13.2752 12.2305C14.3252 13.2805 15.6002 13.8055 17.1002 13.8055C18.0168 13.8055 18.8585 13.6014 19.6252 13.193C20.3918 12.7847 21.0168 12.2389 21.5002 11.5555C21.5335 11.7722 21.5585 11.993 21.5752 12.218C21.5918 12.443 21.6002 12.6722 21.6002 12.9055C21.6002 15.4055 20.7252 17.5305 18.9752 19.2805C17.2252 21.0305 15.1002 21.9055 12.6002 21.9055ZM12.6002 19.9055C14.0668 19.9055 15.3835 19.5014 16.5502 18.693C17.7168 17.8847 18.5668 16.8305 19.1002 15.5305C18.7668 15.6139 18.4335 15.6805 18.1002 15.7305C17.7668 15.7805 17.4335 15.8055 17.1002 15.8055C15.0502 15.8055 13.3043 15.0847 11.8627 13.643C10.421 12.2014 9.70016 10.4555 9.70016 8.40552C9.70016 8.07218 9.72516 7.73885 9.77516 7.40552C9.82516 7.07218 9.89183 6.73885 9.97516 6.40552C8.67516 6.93885 7.62099 7.78885 6.81266 8.95552C6.00433 10.1222 5.60016 11.4389 5.60016 12.9055C5.60016 14.8389 6.28349 16.4889 7.65016 17.8555C9.01683 19.2222 10.6668 19.9055 12.6002 19.9055Z"
                fill="#1C1B1F"
              />
            </g>
          </>
        )}
      </svg>
    </button>
  );
};

export default DarkModeToggle;