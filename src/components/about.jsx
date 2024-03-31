import React from "react";

export const About = (props) => {
  return (
    <div id="about">
      <div className="container">
        <div className="row">
          <div className="col-xs-12 col-md-6">
            {" "}
            <img src="img/about.png" className="img-responsive" alt="" />{" "}
          </div>
          <div className="col-xs-12 col-md-6">
            <div className="about-text">
              <h2>О Нас</h2>
              <p>
                ООО «ПродактИнвест» предоставляет услуги по разработке
                информационных систем, облачных решений, автоматизации и
                роботизации бизнес-процессов, созданию мобильных приложений,
                интеграции продуктов и решений для интеллектуальной инженерной
                инфраструктуры, обслуживанию банковского оборудования
                самообслуживания, а также оказывает услуги по обучению,
                повышению квалификации и переподготовке специалистов в области
                информационных технологий и бизнес‐администрирования, по
                обучению иностранным языкам.
              </p>
              <h3>Отрасли, с которыми работаем:</h3>
              <div className="list-style">
                <div className="col-lg-6 col-sm-6 col-xs-12">
                  <ul>
                    <li>Государственный сектор</li>
                    <li>Энергетика</li>
                    <li>Промышленность</li>
                  </ul>
                </div>
                <div className="col-lg-6 col-sm-6 col-xs-12">
                  <ul>
                    <li>Транспорт и логистика</li>
                    <li>Банки и финансы</li>
                    <li>Нефть и газ</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
