import React from "react";

export const Features = (props) => {
  return (
    <div id="features" className="text-center">
      <div className="container">
        <div className="col-md-10 col-md-offset-1 section-title">
          <h2>Особенности</h2>
        </div>
        <div className="row">
          {/* {props.data
            ? props.data.map((d, i) => (
                <div key={`${d.title}-${i}`} className="col-xs-6 col-md-3">
                  {" "}
                  <i className={d.icon}></i>
                  <h3>{d.title}</h3>
                  <p>{d.text}</p>
                </div>
              ))
            : "Loading..."} */}

          <div className="col-xs-6 col-md-3">
            <i className="fa fa-comments-o"></i>
            <h3>Мы общаемся</h3>
            <p>
              Мы всегда остаёмся открытыми для диалога и конструктивной критики
            </p>
          </div>
          <div className="col-xs-6 col-md-3">
            <i className="fa fa-bullhorn"></i>
            <h3>Мы заявили о себе</h3>
            <p>
              Развивая свой бренд, мы привлекаем лучших специалистов в своей
              области
            </p>
          </div>
          <div className="col-xs-6 col-md-3">
            <i className="fa fa-group"></i>
            <h3>Мы команда</h3>
            <p>
              Хорошо сработанная команда может обеспечить стабильный результат в
              любых условиях
            </p>
          </div>
          <div className="col-xs-6 col-md-3">
            <i className="fa fa-magic"></i>
            <h3>Мы творим чудеса</h3>
            <p>
              Качество разработанных нами продуктов находится на высочайшем
              уровне
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
