"use client";

import { useState } from "react";

// Update this array with your real Medium post titles + links
const posts = [
  {
    title: "Service Before Politics: The People Behind Nnamdi Okoye’s Story",
    link: "https://medium.com/@Hon_Nnamdi_Okoye/service-before-politics-the-people-behind-nnamdi-okoyes-story-e1db41a1aade",
  },
  {
    title: "From Nnewi to Dubai: How Entrepreneurship Shaped Nnamdi Okoye",
    link: "https://medium.com/@Hon_Nnamdi_Okoye/from-nnewi-to-dubai-how-entrepreneurship-shaped-nnamdi-okoye-ef219261b348",
  },
  {
    title: "Meet Hon. Nnamdi Emmanuel Okoye: The Man, The Journey and The Vision",
    link: "https://medium.com/@Hon_Nnamdi_Okoye/meet-hon-nnamdi-emmanuel-okoye-the-man-the-journey-and-the-vision-411ccb0d63c9",
  },
  {
    title: "Before Politics: The Family and Values That Shaped Nnamdi Okoye",
    link: "https://medium.com/@Hon_Nnamdi_Okoye/before-politics-the-family-and-values-that-shaped-nnamdi-okoye-d48d1bdc8f0a",
  },
];

export default function NewsSlider() {
  const [isPaused, setIsPaused] = useState(false);

  // Duplicate the list so the marquee can loop seamlessly (translateX(-50%))
  const loopPosts = [...posts, ...posts];

  return (
    <section className="w-full py-10">
      <div className="max-w-6xl mx-auto">
        <h2 className="font-aspekta text-xl font-[650] mb-5 text-gray-800 dark:text-white">
          Latest Posts
        </h2>

        <div
          className="overflow-hidden"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          <div
            className="flex gap-4 w-max marquee-track"
            style={{ animationPlayState: isPaused ? "paused" : "running" }}
          >
            {loopPosts.map((post, i) => (
              <a
                key={i}
                href={post.link}
                target="_blank"
                rel="noopener noreferrer"
                className="shrink-0 w-72 sm:w-80 rounded-xl border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900 p-5 shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all duration-200"
              >
                <p className="text-xs font-medium text-gray-400 uppercase tracking-wide mb-2">
                  Medium
                </p>
                <h3 className="text-base font-semibold text-gray-900 dark:text-white leading-snug line-clamp-3">
                  {post.title}
                </h3>
                <span className="inline-block mt-4 text-sm text-blue-600 dark:text-blue-400 font-medium">
                  Read on Medium →
                </span>
              </a>
            ))}
          </div>
        </div>
      </div>

      <style jsx>{`
        .marquee-track {
          animation: marquee 30s linear infinite;
        }
        @keyframes marquee {
          from {
            transform: translateX(0);
          }
          to {
            transform: translateX(-50%);
          }
        }
      `}</style>
    </section>
  );
}
