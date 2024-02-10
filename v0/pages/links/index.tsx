import Layout from '@/components/layout';
import Link from 'next/link';

export default function Links() {
  return (
    <Layout>
      <div className="mx-auto grid max-w-lg grid-cols-1 gap-2.5">
        <Link href="https://linkedin.com/in/ilhamprabaswara">
          <div className="relative flex h-[75px] items-center justify-center rounded bg-[#2867B2] px-[20px]">
            <div className="absolute left-5">
              <svg
                width="45"
                height="45"
                viewBox="0 0 45 45"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M35.625 5.625C36.6196 5.625 37.5734 6.02009 38.2766 6.72335C38.9799 7.42661 39.375 8.38044 39.375 9.375V35.625C39.375 36.6196 38.9799 37.5734 38.2766 38.2766C37.5734 38.9799 36.6196 39.375 35.625 39.375H9.375C8.38044 39.375 7.42661 38.9799 6.72335 38.2766C6.02009 37.5734 5.625 36.6196 5.625 35.625V9.375C5.625 8.38044 6.02009 7.42661 6.72335 6.72335C7.42661 6.02009 8.38044 5.625 9.375 5.625H35.625ZM34.6875 34.6875V24.75C34.6875 23.1289 34.0435 21.5741 32.8972 20.4278C31.7509 19.2815 30.1961 18.6375 28.575 18.6375C26.9812 18.6375 25.125 19.6125 24.225 21.075V18.9938H18.9938V34.6875H24.225V25.4437C24.225 24 25.3875 22.8188 26.8313 22.8188C27.5274 22.8188 28.1951 23.0953 28.6874 23.5876C29.1797 24.0799 29.4563 24.7476 29.4563 25.4437V34.6875H34.6875ZM12.9 16.05C13.7354 16.05 14.5366 15.7181 15.1274 15.1274C15.7181 14.5366 16.05 13.7354 16.05 12.9C16.05 11.1563 14.6438 9.73125 12.9 9.73125C12.0596 9.73125 11.2536 10.0651 10.6594 10.6594C10.0651 11.2536 9.73125 12.0596 9.73125 12.9C9.73125 14.6438 11.1563 16.05 12.9 16.05ZM15.5063 34.6875V18.9938H10.3125V34.6875H15.5063Z"
                  fill="white"
                />
              </svg>
            </div>
            <p className="text-white">LINKEDIN</p>
          </div>
        </Link>
        <Link href="https://github.com/IlhamPrabaswara">
          <div className="relative flex h-[75px] items-center justify-center rounded bg-black px-[20px]">
            <div className="absolute left-5">
              <svg
                width="45"
                height="45"
                viewBox="0 0 45 45"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M22.5 3.75C20.0377 3.75 17.5995 4.23498 15.3247 5.17726C13.0498 6.11953 10.9828 7.50065 9.24175 9.24175C5.72544 12.7581 3.75 17.5272 3.75 22.5C3.75 30.7875 9.13125 37.8187 16.575 40.3125C17.5125 40.4625 17.8125 39.8812 17.8125 39.375V36.2062C12.6188 37.3312 11.5125 33.6937 11.5125 33.6937C10.65 31.5187 9.43125 30.9375 9.43125 30.9375C7.725 29.775 9.5625 29.8125 9.5625 29.8125C11.4375 29.9437 12.4313 31.7437 12.4313 31.7437C14.0625 34.5937 16.8187 33.75 17.8875 33.3C18.0562 32.0812 18.5438 31.2562 19.0688 30.7875C14.9063 30.3187 10.5375 28.7062 10.5375 21.5625C10.5375 19.4812 11.25 17.8125 12.4688 16.4812C12.2813 16.0125 11.625 14.0625 12.6562 11.5312C12.6562 11.5312 14.2313 11.025 17.8125 13.4437C19.2938 13.0312 20.9062 12.825 22.5 12.825C24.0938 12.825 25.7062 13.0312 27.1875 13.4437C30.7687 11.025 32.3438 11.5312 32.3438 11.5312C33.375 14.0625 32.7188 16.0125 32.5313 16.4812C33.75 17.8125 34.4625 19.4812 34.4625 21.5625C34.4625 28.725 30.075 30.3 25.8938 30.7687C26.5688 31.35 27.1875 32.4937 27.1875 34.2375V39.375C27.1875 39.8812 27.4875 40.4812 28.4438 40.3125C35.8875 37.8 41.25 30.7875 41.25 22.5C41.25 20.0377 40.765 17.5995 39.8227 15.3247C38.8805 13.0498 37.4994 10.9828 35.7583 9.24175C34.0172 7.50065 31.9502 6.11953 29.6753 5.17726C27.4005 4.23498 24.9623 3.75 22.5 3.75Z"
                  fill="white"
                />
              </svg>
            </div>
            <p className="text-white">GITHUB</p>
          </div>
        </Link>
      </div>
    </Layout>
  );
}