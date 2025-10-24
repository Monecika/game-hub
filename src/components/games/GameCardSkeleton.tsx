const GameCardSkeleton = () => {
  return (
    <div className="card h-100 w-100 overflow-hidden">
      <div
        className="card-img-top placeholder-glow"
        style={{ height: "180px" }}
      >
        <span className="placeholder col-12 h-100"></span>
      </div>
      <div className="card-body">
        <h5 className="card-title placeholder-glow mb-3">
          <span className="placeholder col-8"></span>
        </h5>
        <div className="d-flex justify-content-between align-items-center placeholder-glow">
          <div className="d-flex g-0">
            <span className="placeholder col-4 m-2"></span>
            <span className="placeholder col-4 m-2"></span>
            <span className="placeholder col-4 m-2"></span>
          </div>
          <span className="placeholder col-1"></span>
        </div>
      </div>
    </div>
  );
};

export default GameCardSkeleton;
