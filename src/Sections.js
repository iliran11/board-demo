import React from 'react';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';

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
      >
        {(provided, snapshot) => (
          <div
            ref={provided.innerRef}
            {...provided.draggableProps}
            {...provided.dragHandleProps}
          >
            {this.props.content}
          </div>
        )}
      </Draggable>
    );
  }
}

export default Section;
