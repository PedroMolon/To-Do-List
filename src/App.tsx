import { ThemeProvider } from 'styled-components'

import { defaultTheme } from './styles/themes/default'
import { GlobalStyle } from './styles/global'
import {
  Header,
  TitleDivider,
  Formulario,
  Input,
  Button,
  Main,
  CreatedTask,
  DoneTask,
  TaskWrapper,
  Empty,
  DeleteButton,
  Tasks,
  Task,
  CheckboxContainerUnchecked,
  Checkbox,
  CheckboxContainerChecked,
} from './styles'
import { PlusCircle, Trash, Check } from '@phosphor-icons/react'
import { useState } from 'react'

interface Task {
  id: string
  title: string
  isComplete: boolean
}

function App() {
  const [newTaskTitle, setNewTaskTitle] = useState('')
  const [tasks, setTasks] = useState<Task[]>([])
  const [createdTask, setCreatedTask] = useState(0)
  const [doneTask, setDoneTask] = useState(0)

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setNewTaskTitle(event.target.value)
  }

  const handleCreateTask = (event: React.FormEvent) => {
    event.preventDefault()

    const newTask: Task = {
      id: new Date().toString(),
      title: newTaskTitle,
      isComplete: false,
    }

    setTasks([...tasks, newTask])
    setNewTaskTitle('')

    setCreatedTask(createdTask + 1)
  }

  const handleDeleteTask = (taskId: string) => {
    const updatedTasks = tasks.filter((task) => task.id !== taskId)
    setTasks(updatedTasks)

    setCreatedTask(createdTask - 1)
  }

  const toggleTaskCompletion = (taskId: string) => {
    const updatedTasks = tasks.map((task) => {
      if (task.id === taskId) {
        const isCompleteChanged = !task.isComplete
        if (isCompleteChanged) {
          setDoneTask(doneTask + 1)
        } else {
          setDoneTask(doneTask - 1)
        }
        return {
          ...task,
          isComplete: !task.isComplete,
        }
      }
      return task
    })

    setTasks(updatedTasks)
  }

  return (
    <ThemeProvider theme={defaultTheme}>
      <Header>
        <img src="/src/assets/rocket.svg" alt="" />
        <TitleDivider>
          <strong>to</strong>
          <strong>do</strong>
        </TitleDivider>
      </Header>

      <Main>
        <Formulario onSubmit={handleCreateTask}>
          <Input
            placeholder="Adicione uma nova tarefa"
            value={newTaskTitle}
            onChange={handleChange}
          />
          <Button type="submit">
            Criar
            <PlusCircle size={16} />
          </Button>
        </Formulario>

        <TaskWrapper>
          <CreatedTask>
            <strong>Tarefas criadas</strong>
            <div>
              <p>{createdTask}</p>
            </div>
          </CreatedTask>

          <DoneTask>
            <strong>Concluídas</strong>
            <div>
              <p>{doneTask}</p>
            </div>
          </DoneTask>
        </TaskWrapper>

        {tasks.length > 0 ? (
          <Tasks>
            {tasks.map((task) => (
              <Task key={task.id}>
                {task.isComplete === false ? (
                  <CheckboxContainerUnchecked
                    onClick={() => toggleTaskCompletion(task.id)}
                  >
                    <Checkbox />
                  </CheckboxContainerUnchecked>
                ) : (
                  <CheckboxContainerChecked
                    onClick={() => toggleTaskCompletion(task.id)}
                  >
                    <Check size={14} />
                    <Checkbox />
                  </CheckboxContainerChecked>
                )}
                <p
                  style={{
                    textDecoration: task.isComplete ? 'line-through' : 'none',
                  }}
                >
                  {task.title}
                </p>
                <DeleteButton onClick={() => handleDeleteTask(task.id)}>
                  <Trash size={24} />
                </DeleteButton>
              </Task>
            ))}
          </Tasks>
        ) : (
          <Empty>
            <img src="/src/assets/clipboard.svg" alt="" />
            <div>
              <strong>Você ainda não tem tarefas cadastradas</strong>
              <p>Crie Tarefas e organize seus itens a fazer</p>
            </div>
          </Empty>
        )}
      </Main>
      <GlobalStyle />
    </ThemeProvider>
  )
}

export default App
