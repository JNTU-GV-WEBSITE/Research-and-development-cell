import React from 'react';
import './Marquee.css';

const Marquee = () => {
  return (
    <section className="slide-content">
      <div className="container-fluid">
        <div className="row">
          <div className="col-xs-20 col-sm-2" style={{ padding: 0 }}>
            <div className="breakingnews bn-bordernone bn-red">
              <div className="bn-title" style={{ width: 'auto' }}>
                <span>
                  Flash News
                </span>
              </div>
            </div>
          </div>
          <div className="col-xs-20 col-sm-8">
            <div className="marquee-container">
              <span className="marquee-content">
              Welcome Online Ph.D
              </span>
            </div>
          </div>
          <div className="col-xs-20 col-sm-1">
            <i className="bi bi-envelope d-flex align-items-right">
              <a href="mailto:contact@example.com" class="marquee-email">drnd@jntugv.edu.in</a>
            </i>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Marquee;
