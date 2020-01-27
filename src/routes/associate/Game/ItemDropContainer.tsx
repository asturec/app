import React from 'react';
import { useDrop } from 'react-dnd';

interface ItemDropContainerProps {
  name: string;
  image: string;
}

export const ItemDropContainer: React.FC<ItemDropContainerProps> = ({
  name,
  image
}) => {
  const [{ canDrop, isOver }, drop] = useDrop({
    accept: 'Item',
    drop: () => ({ name }),
    collect: monitor => ({
      isOver: monitor.isOver(),
      canDrop: monitor.canDrop()
    })
  });

  const isActive = canDrop && isOver;

  const labelArray = image.split('/');
  const labelDots = labelArray[labelArray.length - 1];
  const label = labelDots.split('.')[0];

  return (
    <div ref={drop} className="is-right">
      <img src={image} alt={label} height={200} width={200} />
      <p> {isActive ? label : label} </p>
    </div>
  );
};

export default ItemDropContainer;
