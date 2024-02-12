interface CaseStudyProps {
  about: string;
  designer?: string;
  webpage?: any;
  direction?: string;
  number?: string;
  video?: any;
  website?: string;
  showDetail?: boolean;
}

export const CaseStudy: React.FC<CaseStudyProps> = ({
  about,
  designer,
  webpage,
  direction,
  number,
  video,
  website,
  showDetail,
}) => {
  return (
    <article>
      <div className="number">
        <h2>No.</h2>
        <p className="font-thin">{number}</p>
      </div>

      {direction === "left" && webpage ? (
        <a href={website} className="website-image large-column">
          <div className="website-image-container">
            <img className="website-image-image" src={webpage} alt="chorus" />
          </div>
        </a>
      ) : null}
      {direction === "left" && video ? (
        <a href={website} className="website-image  large-column-left">
          <div className="website-image-container">
            <video
              className="website-image-image"
              src={video}
              autoPlay
              loop
              muted
            ></video>
          </div>
        </a>
      ) : null}

      <div className="website-info large-column">
        <div className="website-info-about">
          <h2>About</h2>
          <p className="font-thin">{about}</p>

          {designer && (
            <>
              <h2>Designer</h2>
              <p className="font-thin">{designer}</p>
            </>
          )}
        </div>
        {showDetail && (
          <p className="font-thin show-detail">
            Show detail <span className="font-thin antialiased"> &#8594;</span>
          </p>
        )}
      </div>
      {direction === "right" && !video ? (
        <a href={website} className="website-image  large-column-right">
          <div className="website-image-container">
            <img className="website-image-image" src={webpage} alt="chorus" />
          </div>
        </a>
      ) : direction === "right" && video ? (
        <a href={website} className="website-image  large-column">
          <div className="website-image-container">
            <video
              className="website-image-image"
              src={video}
              autoPlay
              loop
              muted
            ></video>
          </div>
        </a>
      ) : null}
    </article>
  );
};

export default CaseStudy;
