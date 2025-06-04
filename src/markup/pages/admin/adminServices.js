import React from "react";
import AdminMenu from "../../components/Admin/AdminMenu/AdminMenu";

function adminServices() {
  return (
    <div>
      <div className="container-fluid admin-pages">
        <div className="row">
          <div className="col-md-3 admin-left-side">
            <AdminMenu />
          </div>
          <div className="col-md-9 admin-right-side">
            <div className="col-md-12 admin-right-side">
              <section className="services-section">
                <div className="auto-container">
                  <div className="sec-title style-two">
                    <h2>Services We Provide</h2>
                    <div className="text">
                      Bring to the table win-win survival strategies to ensure
                      proactive domination. At the end of the day, going
                      forward, a new normal that has evolved from generation X
                      is on the runway heading towards a streamlined cloud
                      solution.
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-lg-12 service-block-one">
                      <div className="inner-box hvr-float-shadow">
                        <h2>Oil Change</h2>
                        <p>
                          Every 5,000 Killometers or so, you need to change the
                          oil your car to keep your engine in the best possible
                          shape.
                        </p>

                        <div className="icon">
                          <span className="flaticon-car-engine"></span>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-12 service-block-one">
                      <div className="inner-box hvr-float-shadow">
                        <h2>Spark Plug replacement</h2>
                        <p>
                          Spark Plugs are a small part that can cause huge
                          problems. Their job is to ignite the fuel in your
                          engine, helping it start.
                        </p>
                        <div className="icon">
                          <span className="flaticon-power"></span>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-12 service-block-one">
                      <div className="inner-box hvr-float-shadow">
                        <h2>Brake Work</h2>
                        <p>
                          We all know why brakes are important. Especially
                          because one quarter of all canadian car accidents are
                          caused by a failure to stop.
                        </p>
                        <div className="icon">
                          <span className="flaticon-brake-disc"></span>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-12 service-block-one">
                      <div className="inner-box hvr-float-shadow">
                        <h2>Tire repairs and changes</h2>
                        <p className="mr-5">
                          Without good, inflated tires, you loose speed,
                          control, and fuel efficiency. hence the need to get
                          them patched if there's a leak (for example, if you
                          run over a nail), or replaced if they're too warn.
                        </p>
                        <div className="icon">
                          <span className="flaticon-tire"></span>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-12 service-block-one">
                      <div className="inner-box hvr-float-shadow">
                        <h2>Programming the camera software</h2>
                        <p className="mr-5">
                          If your car has a camera, it needs to be programmed
                          to work with the rest of the car. This is a complex
                          process that requires specialized knowledge and
                          equipment.
                        </p>
                        <div className="icon">
                          <span className="flaticon-gearbox"></span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </section>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default adminServices;
