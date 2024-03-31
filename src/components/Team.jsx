import React from "react";

export const Team = (props) => {
  return (
    <div id="team" className="text-center">
      <div className="container">
        <div className="col-md-8 col-md-offset-2 section-title">
          <h2>Команда</h2>
          <p>Слаженные профессионалы, каждый день берущие новые вершины.</p>
        </div>
        <div id="row">
          <div className="col-md-3 col-sm-6 team">
            <div className="thumbnail">
              <img src="img/team/01.jpg" alt="..." className="team-img" />
              <div className="caption">
                <h4>Гоген Солнцев</h4>
                <p>Генеральный директор</p>
              </div>
            </div>
          </div>
          <div className="col-md-3 col-sm-6 team">
            <div className="thumbnail">
              <img src="img/team/02.jpg" alt="..." className="team-img" />
              <div className="caption">
                <h4>Прохор Шаляпин</h4>
                <p>Исполнительный директор</p>
              </div>
            </div>
          </div>
          <div className="col-md-3 col-sm-6 team">
            <div className="thumbnail">
              <img src="img/team/03.jpg" alt="..." className="team-img" />
              <div className="caption">
                <h4>Анфиса Чехова</h4>
                <p>Финансовый директор</p>
              </div>
            </div>
          </div>
          <div className="col-md-3 col-sm-6 team">
            <div className="thumbnail">
              <img src="img/team/04.jpg" alt="..." className="team-img" />
              <div className="caption">
                <h4>Ольга Вузова</h4>
                <p>Руководитель отдела маркетинга</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
