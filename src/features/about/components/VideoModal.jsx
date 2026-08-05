"use client";
import { useEffect } from "react";

export default function VideoModal({ open, onClose, videoRef }) {
  useEffect(() => {
    if (open) {
      videoRef.current?.play().catch(() => {});
    } else if (videoRef.current) {
      videoRef.current.pause();
      videoRef.current.currentTime = 0;
    }
  }, [open, videoRef]);

  useEffect(() => {
    const onKeyDown = (e) => {
      if (e.key === "Escape" && open) onClose();
    };
    document.addEventListener("keydown", onKeyDown);
    return () => document.removeEventListener("keydown", onKeyDown);
  }, [open, onClose]);

  return (
    <div
      className={`video-modal-overlay${open ? " active" : ""}`}
      id="video-modal"
      aria-hidden={!open}
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
    >
      <div className="video-modal-container">
        <button className="video-modal-close" id="close-video-modal" aria-label="Close Video Modal" onClick={onClose}>
          ×
        </button>
        <div className="video-wrapper">
          <video ref={videoRef} id="director-video-player" controls poster="/assets/director-poster.jpg">
            <source
              src="https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4"
              type="video/mp4"
            />
            Your browser does not support the video tag.
          </video>
        </div>
        <div className="video-modal-caption">
          <h3>Keynote Message — Managing Director</h3>
          <p>PT EXP Digital Solution • Building Future-Proof Business Engines</p>
        </div>
      </div>
    </div>
  );
}
