import React from "react";
import emoji from "./data/flag-emojis";

export default class Sort extends React.Component {
    state = {
        emoji: emoji,
      };

  render() {
    const { emoji } = this.state;

 
    console.log(emoji);

    let content = emoji.map((emoji) => (
      <div className="mapData">
        {emoji.code}
        <span className=" lvalue">{emoji.unicode}</span>
      </div>
    ));

    return (
      <>
        <div className="card bottom">
          <div className="card-header">
            <div className="float-right">
              <button>
                <i className="fas fa-ellipsis-v"></i>
              </button>
            </div>
          </div>
          <div className="card-body">

          {content}
          </div>
        </div>
      </>
    );
  }
}
