import classNames from 'classnames';
import { DefaultPropsWithChildren } from 'components';
import Container from 'components/atoms/Container';
import Flex from 'components/atoms/Flex';
import Text from 'components/atoms/Text';
import Title from 'components/atoms/Title';
import { Todo } from 'index';
import { CSSProperties, FC } from 'react';
import { IconCheckbox, IconTrashX } from '@tabler/icons';

import './todocard.css';
import Button from 'components/atoms/Button';

interface Props extends DefaultPropsWithChildren {
  todo: Todo;
  onDone: (id: number) => void;
  onDelete: (id: number) => void;
}

const TodoCard: FC<Props> = ({ todo, onDone, onDelete, className = null, styles = {} }) => {
  const compiledClassNames = classNames('todo', { todo_done: todo.done }, className);

  const compiledStyles: CSSProperties = {
    ...styles,
  };

  const onDoneClick = () => {
    onDone(todo.id);
  };

  const onDeleteClick = () => {
    onDelete(todo.id);
  };

  return (
    <Container size="sm" className={compiledClassNames} styles={compiledStyles}>
      <Flex gap={15} justify="start">
        <Title>#{todo.id}</Title>
        <Text styles={{ textDecorationLine: todo.done ? 'line-through' : 'none' }}>{todo.content}</Text>
      </Flex>
      {!todo.done ? (
        <Button
          size="sm"
          label="Done"
          color="success"
          leftIcon={<IconCheckbox size={18} />}
          onClick={onDoneClick}
          className="todo_hidden"
          styles={{ position: 'absolute', top: 5, right: 5, cursor: 'pointer' }}
        />
      ) : (
        <Button
          size="sm"
          label="Delete"
          color="error"
          leftIcon={<IconTrashX size={18} />}
          onClick={onDeleteClick}
          className="todo_hidden"
          styles={{ position: 'absolute', top: 5, right: 5, cursor: 'pointer' }}
        />
      )}
    </Container>
  );
};

export default TodoCard;
