export function Video() {
    return (
      <video width="320" height="240" controls preload="none">
        <source src="/final2.mp4" type="video/mp4" />
        <track
          src="/final2.mp4"
          kind="subtitles"
          srcLang="en"
          label="English"
        />
        Your browser does not support the video tag.
      </video>
    )
  }