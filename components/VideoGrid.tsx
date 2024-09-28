"use client";
import { useEffect, useRef } from 'react';

const VideoGrid: React.FC = () => {
  const videoRefs = useRef<(HTMLVideoElement | null)[]>([]); // Type as an array of HTMLVideoElement or null

  useEffect(() => {
    const options: IntersectionObserverInit = {
      root: null, // Use the viewport as the root
      threshold: 0.5, // Trigger when 50% of the video is in view
    };

    const handleIntersection: IntersectionObserverCallback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          (entry.target as HTMLVideoElement).play(); // Play video when in view
        } else {
          (entry.target as HTMLVideoElement).pause(); // Pause video when out of view
        }
      });
    };

    const observer = new IntersectionObserver(handleIntersection, options);

    // Attach observer to each video element
    videoRefs.current.forEach((video) => {
      if (video) {
        observer.observe(video);
      }
    });

    // Clean up the observer on component unmount
    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4 justify-center items-center">
      <video
        ref={(el) => {
          videoRefs.current[0] = el; // Assign the element without returning anything
        }}
        controls
        className="w-full md:w-1/2 h-[70vh] rounded-lg shadow-lg object-cover"
      >
        <source src="/video.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      <video
        ref={(el) => {
          videoRefs.current[1] = el; // Assign the element without returning anything
        }}
        controls
        className="w-full md:w-1/2 h-[70vh] rounded-lg shadow-lg object-cover"
      >
        <source src="/video1.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
  );
};

export default VideoGrid;
