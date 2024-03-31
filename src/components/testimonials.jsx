import React from "react";

export const Testimonials = (props) => {
  return (
    <div id="testimonials">
      <div className="container">
        <div className="section-title text-center">
          <h2>Что о нас говорят</h2>
        </div>
        <div className="row">
          <div className="col-md-4">
            <div className="testimonial">
              <div className="testimonial-image">
                <img src="img/testimonials/01.jpg" alt="" />{" "}
              </div>
              <div className="testimonial-content">
                <p>
                  Профессиональная компания по разработке ПО. Быстро и
                  качественно выполнили наш проект. Очень рекомендую!
                </p>
                <div className="testimonial-meta"> - Богдан Прогибов </div>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="testimonial">
              <div className="testimonial-image">
                <img src="img/testimonials/02.jpg" alt="" />{" "}
              </div>
              <div className="testimonial-content">
                <p>
                  Отличная команда разработчиков ПО. Результаты превзошли наши
                  ожидания. Будем сотрудничать и дальше.
                </p>
                <div className="testimonial-meta"> - Владимир Шебебеков </div>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="testimonial">
              <div className="testimonial-image">
                <img src="img/testimonials/03.jpg" alt="" />{" "}
              </div>
              <div className="testimonial-content">
                <p>
                  Надежный партнер в разработке программного обеспечения.
                  Высокий уровень экспертизы и отзывчивый подход к нашим
                  требованиям. Довольны результатом!
                </p>
                <div className="testimonial-meta"> - Иван Иванов </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
