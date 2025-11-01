const GameDetailsSkeleton = () => {
  return (
    <div className="container py-3">
      <h1>
        <span className="placeholder col-6 d-block placeholder-glow bg-secondary"></span>
      </h1>

      <div className="row g-3">
        {/* Left Column */}
        <div className="col-12 col-md-6">
          {Array.from({ length: 6 }).map((_, idx) => (
            <span
              key={idx}
              className="placeholder col-12 d-block mb-2 placeholder-glow bg-secondary"
              style={{ height: "1rem" }}
            ></span>
          ))}

          {Array.from({ length: 4 }).map((_, idx) => (
            <div key={idx} className="mb-2">
              <span
                className="placeholder col-4 d-block placeholder-glow bg-secondary"
                style={{ height: "1rem" }}
              ></span>
            </div>
          ))}
        </div>

        {/* Right Column */}
        <div className="col-12 col-md-6">
          <div
            className="placeholder-glow bg-secondary mb-3"
            style={{ width: "100%", height: "200px", borderRadius: "0.25rem" }}
          ></div>

          <div className="row g-2">
            {Array.from({ length: 6 }).map((_, idx) => (
              <div key={idx} className="col-6">
                <div
                  className="placeholder-glow bg-secondary w-100"
                  style={{ height: "100px", borderRadius: "0.25rem" }}
                ></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default GameDetailsSkeleton;
