import "./App.css";

function App() {
  return (
    <>
      <div className="container-fluid">
        <div className="row">
          <div className="col-12 bg-warning text-center py-3">Nav</div>
        </div>

        <div className="row">
          <div className="col-lg-3 d-none d-lg-block bg-success text-center py-3">
            Aside
          </div>

          <div className="col-12 col-lg-9 bg-primary text-center py-3 text-white">
            Main
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
