import React from "react";

function Info(props) {
    return (
        <div className="infoMain">
            <div className="infoTitle">
                <span>
                    Описание товара:
                </span>
                <div className="InfoCancel"><img src="img/cancel.svg" width={32} /></div>
            </div>
            <div className="infoDescription">
                <div className="infoImage">
                    <img src={props.info.image} width={90} />
                </div>
                <div className="infoTitle">{props.info.title}</div>
                <div className="infoPrice">Цена: {props.info.price} рублей</div>
            </div>

        </div>
    )
}
export default Info