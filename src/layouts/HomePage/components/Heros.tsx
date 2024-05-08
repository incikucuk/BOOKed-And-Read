export const Heros = () => {
  return (
    <div>
      <div className="d-none d-lg-block">
        <div className="row g-0 mt-5">
          <div className="col-sm-6 col-md-6">
            <div className="col-image-left"></div>
          </div>
        </div>
        <div className="col-4 col-md-4 container d-flex justify-content-center align-items-center">
          <div className="ml-2">
            <h1>What have you been reading?</h1>
            <p className="lead">
              The library team would love to know what you have been reading.
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem,
              quibusdam. Sed iure similique obcaecati eius ullam maiores
              blanditiis quaerat reiciendis.
            </p>
            <a className="btn main-color btn-lg text-white" href="#">
              Sign up</a>
          </div>
        </div>
      </div>
      <div className="row g-0">
        <div
          className="col-4 col-md-4 container d-flex
                justify-content-center align-items-center"
        >
          <div className="ml-2">
            <h1>Our collection is always changing!</h1>
            <p className="lead">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid
              hic voluptatibus nisi et blanditiis repudiandae exercitationem a
              voluptatum iste magnam.
            </p>
          </div>
        </div>
        <div className="col-sm-6 col-md-6">
          <div className="col-image-right"></div>
        </div>
      </div>
      {/* Mobile Heros */}
      <div className="d-lg-none">
        <div className="container">
          <div className="m-2">
            <div className="col-image-left"></div>
            <div className="mt-2"></div>
            <h1>Our collection is changing</h1>
            <p className="lead">
              Collection of this seasons.. Lorem ipsum dolor sit amet
              consectetur adipisicing elit. Rem, quibusdam. Sed iure similique
              obcaecati eius ullam maiores blanditiis quaerat reiciendis.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
