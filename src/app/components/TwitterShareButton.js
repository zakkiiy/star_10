import React from 'react';
import TwitterIcon from '@mui/icons-material/Twitter';

const TwitterShareButton = ({ time }) => {
  const tweetText =`おめでとうございます！ ${time} 秒で全てのスターを集めました。`
  const pageUrl ="https://star-10.vercel.app/";

  return (
    <button className="icon"
      onClick={() => {
        window.open(
          `https://twitter.com/share?url=${encodeURIComponent(pageUrl)}&text=${encodeURIComponent(tweetText)}`,
          '_blank'
        );
      }}
    >
      <TwitterIcon />
    </button>
  );
};

export default TwitterShareButton;