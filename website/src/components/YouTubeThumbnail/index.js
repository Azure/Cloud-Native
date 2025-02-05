import { useState } from "react";

const YouTubeThumbnail = ({ videoId, customThumbnail }) => {
  const [isPlaying, setIsPlaying] = useState(false);

  // Extract video ID and query parameters separately
  const [id, params] = videoId.split("?");

  // Default to YouTube's thumbnail if no custom one is provided
  const thumbnailUrl = customThumbnail || `https://img.youtube.com/vi/${id}/maxresdefault.jpg`;

  return (
    <div style={{ position: "relative", width: "100%", paddingBottom: "56.25%" }}>
      {isPlaying ? (
        <iframe
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            borderRadius: "1.5rem",
          }}
          src={`https://www.youtube.com/embed/${id}?autoplay=1&${params}`}
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      ) : (
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            cursor: "pointer",
          }}
          onClick={() => setIsPlaying(true)}
        >
          <img
            src={thumbnailUrl}
            alt=""
            role="presentation"
            style={{ width: "100%", height: "100%", display: "block", borderRadius: "1.5rem" }}
          />
          {/* YouTube-Style Play Button */}
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/f/fd/YouTube_full-color_icon_%282024%29.svg"
            alt="Play Button"
            style={{
              position: "absolute",
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
              width: "68px",
              height: "48px",
              opacity: "1",
            }}
          />
        </div>
      )}
    </div>
  );
};

export default YouTubeThumbnail;
