import React from "react";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";

class Item extends React.Component {
  render() {
    return (
      <Draggable
        draggableId={`draggable-${this.props.id}`}
        index={this.props.index}
        key={this.props.id}
        type={"ITEM"}
      >
        {(provided, snapshot) => {
          return (
            <div
              ref={provided.innerRef}
              {...provided.dragHandleProps}
              {...provided.draggableProps}
              className="item"
            >
            {this.props.id}
            </div>
          );
        }}
      </Draggable>
    );
  }
}

export default Item;
