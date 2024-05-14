import { Router } from 'express';

import { createTodo, getTodos, updateTodo, deleteTodo } from '../controllers/todos';

const router = Router();

router.post('/', createTodo);

router.get('/all', getTodos);

router.patch('/:id', updateTodo);

router.delete('/delete/:id', deleteTodo);

export default router;