import React from "react";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";
import DroppableSection from "./droppableSection";
class Section extends React.Component {
  getSectionStyle(snapshot) {
    return {
      // width: 50,
      // backgroundColor:'green'
    };
  }
  render() {
    return (
      <Draggable
        draggableId={`draggable-${this.props.id}`}
        index={this.props.index}
        key={this.props.id}
        type={"SECTION"}
      >
        {(provided, snapshot) => (
          <div
            ref={provided.innerRef}
            {...provided.draggableProps}
            className="section"
          >
            <div className="section-draghandle" {...provided.dragHandleProps}>
              {this.props.id}
            </div>
            <DroppableSection
              items={this.props.items}
              index={this.props.index}
              id={this.props.id}
            />
          </div>
        )}
      </Draggable>
    );
  }
}

export default Section;
