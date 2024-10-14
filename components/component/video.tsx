export function Video() {
    return (
      <video width="720" height="1200" controls preload="true" className="rounded-3xl shadow-lg">
        <source src="/video.mp4" type="video/mp4" />
        <track
          src="/video.mp4"
          kind="subtitles"
          srcLang="en"
          label="English"
        />
        Your browser does not support the video tag.
      </video>
    )
  }