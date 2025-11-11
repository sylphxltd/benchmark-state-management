/**
 * Test registry for 13-todo-list group
 * Tests real-world todo list / task management operations
 */

export interface TestDefinition {
  name: string;
  method: string; // Required method name for this test
  execute: (store: any) => void | any;
}

export const TESTS = {
  ADD_TODO: {
    name: 'Add Todo',
    method: 'addTodo',
    execute: (store) => {
      // Add a new todo item
      store.addTodo({
        id: Date.now().toString(),
        text: 'Buy groceries',
        completed: false,
        priority: 'medium'
      });
    }
  },
  TOGGLE_TODO: {
    name: 'Toggle Todo Completion',
    method: 'toggleTodo',
    execute: (store) => {
      // Toggle completion status
      store.toggleTodo('123');
    }
  },
  DELETE_TODO: {
    name: 'Delete Todo',
    method: 'deleteTodo',
    execute: (store) => {
      // Remove a todo
      store.deleteTodo('123');
    }
  },
  EDIT_TODO: {
    name: 'Edit Todo Text',
    method: 'editTodo',
    execute: (store) => {
      // Update todo text
      store.editTodo('123', 'Updated task description');
    }
  },
  FILTER_TODOS: {
    name: 'Filter Todos (Active/Completed)',
    method: 'filterTodos',
    execute: (store) => {
      // Get filtered todos
      const activeTodos = store.filterTodos('active');
      return activeTodos;
    }
  },
  GET_ACTIVE_COUNT: {
    name: 'Get Active Todo Count',
    method: 'getActiveTodoCount',
    execute: (store) => {
      // Count incomplete todos
      const count = store.getActiveTodoCount();
      return count;
    }
  },
  CLEAR_COMPLETED: {
    name: 'Clear Completed Todos',
    method: 'clearCompleted',
    execute: (store) => {
      // Remove all completed todos
      store.clearCompleted();
    }
  },
  TOGGLE_ALL_TODOS: {
    name: 'Toggle All Todos',
    method: 'toggleAllTodos',
    execute: (store) => {
      // Mark all as complete/incomplete
      store.toggleAllTodos(true);
    }
  },
  SET_TODO_PRIORITY: {
    name: 'Set Todo Priority',
    method: 'setTodoPriority',
    execute: (store) => {
      // Update priority (low/medium/high)
      store.setTodoPriority('123', 'high');
    }
  },
  REORDER_TODOS: {
    name: 'Reorder Todos (Drag & Drop)',
    method: 'reorderTodos',
    execute: (store) => {
      // Move todo from index 0 to index 2
      store.reorderTodos(0, 2);
    }
  },
  BULK_ADD_TODOS: {
    name: 'Bulk Add Todos',
    method: 'bulkAddTodos',
    execute: (store) => {
      // Add multiple todos at once
      store.bulkAddTodos([
        { id: '1', text: 'Task 1', completed: false },
        { id: '2', text: 'Task 2', completed: false },
        { id: '3', text: 'Task 3', completed: true }
      ]);
    }
  },
  SEARCH_TODOS: {
    name: 'Search Todos',
    method: 'searchTodos',
    execute: (store) => {
      // Search todos by text
      const results = store.searchTodos('grocery');
      return results;
    }
  },
  ADD_TODO_TAG: {
    name: 'Add Tag to Todo',
    method: 'addTodoTag',
    execute: (store) => {
      // Add a tag/label to todo
      store.addTodoTag('123', 'urgent');
    }
  },
  FILTER_BY_TAG: {
    name: 'Filter Todos by Tag',
    method: 'filterTodosByTag',
    execute: (store) => {
      // Get todos with specific tag
      const tagged = store.filterTodosByTag('urgent');
      return tagged;
    }
  }
} as const satisfies Record<string, TestDefinition>;

export type TodoListTestKey = keyof typeof TESTS;
