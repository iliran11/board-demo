import React from "react";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";
import Item from "./Item";

class DroppableSection extends React.Component {
  getSectionBodyStyle = snapshot => {
    return `section-body`;
  };
  render() {
    return (
      <div>
        <Droppable
          droppableId={this.props.id}
          type="ITEM"
          index={this.props.index}
        >
          {(provided, snapshot) => {
            return (
              <div
                ref={provided.innerRef}
                {...provided.droppableProps}
                className={this.getSectionBodyStyle(snapshot)}
              >
                {this.props.items.map((item, index) => {
                  return <Item index={index} id={item.id} />;
                })}
              </div>
            );
          }}
        </Droppable>
      </div>
    );
  }
}

export default DroppableSection;
