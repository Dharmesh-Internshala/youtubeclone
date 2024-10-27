// mockData.js

export const mockChannelData = {
    channelId: "channel01",
    channelName: "Code with John",
    owner: "user01",
    description: "Coding tutorials and tech reviews by John Doe.",
    channelBanner: "https://example.com/banners/john_banner.png",
    subscribers: 5200,
    videos: [
      {
        videoId: "video01",
        title: "JavaScript Basics",
        thumbnails: [{ url: "https://example.com/thumbnails/video01.png" }],
        author: { avatar: [{ url: "https://example.com/avatars/john.png" }], title: "Code with John" },
        lengthSeconds: 600,
        stats: { views: 12500 },
        publishedTimeText: "1 week ago",
      },
      {
        videoId: "video02",
        title: "Understanding React Hooks",
        thumbnails: [{ url: "https://example.com/thumbnails/video02.png" }],
        author: { avatar: [{ url: "https://example.com/avatars/john.png" }], title: "Code with John" },
        lengthSeconds: 900,
        stats: { views: 22000 },
        publishedTimeText: "2 weeks ago",
      },
    ],
  };
  