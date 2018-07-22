import React from 'react';
import Section from './Sections';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';

class List extends React.Component {
  getListStyle(snapshot) {
    return {
      backgroundColor: snapshot.isDraggingOver ? 'blue' : 'grey',
      minHeight: 200
    };
  }
  render() {
    return (
      <Draggable
        draggableId={`draggable-${this.props.id}`}
        index={this.props.index}
        key={this.props.id}
      >
        {(provided, snapshot) => {
          return (
            <div>
              <div
                ref={provided.innerRef}
                {...provided.draggableProps}
                {...provided.dragHandleProps}
              >hi</div>
              <Droppable droppableId={this.props.id} key={this.props.id}>
                {(provided, snapshot) => {
                  return (
                    <div
                      ref={provided.innerRef}
                      style={this.getListStyle(snapshot)}
                      {...provided.droppableProps}
                    >
                      {this.props.listSections.map((item, index) => {
                        return (
                          <Section
                            id={item.id}
                            content={item.content}
                            index={index}
                          />
                        );
                      })}

                      {provided.placeholder}
                    </div>
                  );
                }}
              </Droppable>
              <div style={{ height: 100 }} />
            </div>
          );
        }}
      </Draggable>
    );
  }
}
export default List;
