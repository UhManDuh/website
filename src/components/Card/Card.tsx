import "./styles.css";

function Card() {
  return (
    <section className="styled-section">
      <div className="card-container">
        <div className="card">
          <div className="card-background1"></div>
          <div className="content">
            <div className="card-category"> testing card</div>
            <h3 className="card-heading"> card header</h3>
          </div>
        </div>
        <div className="card">
          <div className="card-background2"></div>
          <div className="content">
            <div className="card-category"> testing card</div>
            <h3 className="card-heading"> card header</h3>
          </div>
        </div>
        <div className="card">
          <div className="card-background3"></div>
          <div className="content">
            <div className="card-category"> testing card</div>
            <h3 className="card-heading"> card header</h3>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Card;
