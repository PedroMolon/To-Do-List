import styled from 'styled-components'

export const Header = styled.header`
  height: 12.5rem;
  background: ${(props) => props.theme['gray-700']};

  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.75rem;

  img {
    width: 1.375rem;
    height: 2.25rem;
  }
`

export const TitleDivider = styled.div`
  strong {
    font-family: 'Inter', sans-serif;
    font-size: 2.5rem;
    font-weight: 900;
  }

  strong:nth-child(1) {
    color: ${(props) => props.theme['blue-300']};
  }

  strong:nth-child(2) {
    color: ${(props) => props.theme['purple-300']};
  }
`

export const Formulario = styled.form`
  margin-top: -1.5rem;
  margin-bottom: 4rem;
  display: flex;
  gap: 1rem;
`

export const Input = styled.input`
  flex: 1;
  display: flex;
  align-items: center;
  padding: 1rem;

  background: ${(props) => props.theme['gray-500']};
  border: 1px solid ${(props) => props.theme['gray-700']};
  border-radius: 8px;

  color: ${(props) => props.theme['gray-100']};
`

export const Button = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 1rem;
  gap: 0.5rem;

  background: ${(props) => props.theme['blue-700']};
  border: 0;
  border-radius: 8px;
  color: ${(props) => props.theme['gray-100']};

  &:hover {
    background: ${(props) => props.theme['blue-300']};
    cursor: pointer;
  }
`

export const Main = styled.main`
  width: 46rem;
  margin: auto;
`

export const TaskWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 1.5rem;
`

export const CreatedTask = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;

  strong {
    font-family: 'Inter', sans-serif;
    font-size: 0.875rem;
    font-weight: 700;
    color: ${(props) => props.theme['blue-300']};
  }

  div {
    display: flex;
    align-items: center;
    justify-content: center;

    padding: 2px 8px;
    background: ${(props) => props.theme['gray-400']};
    border: 0;
    border-radius: 50%;
  }

  p {
    font-size: 0.75rem;
    font-weight: 700;
    color: ${(props) => props.theme['gray-100']};
  }
`

export const DoneTask = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;

  strong {
    font-family: 'Inter', sans-serif;
    font-size: 0.875rem;
    font-weight: 700;
    color: ${(props) => props.theme['purple-300']};
  }

  div {
    display: flex;
    align-items: center;
    justify-content: center;

    padding: 2px 8px;
    background: ${(props) => props.theme['gray-400']};
    border: 0;
    border-radius: 50%;
  }

  p {
    font-size: 0.75rem;
    font-weight: 700;
    color: ${(props) => props.theme['gray-100']};
  }
`

export const Empty = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 1rem;

  border-top: 1px solid ${(props) => props.theme['gray-400']};
  border-radius: 8px;
  padding: 4rem 1.5rem;

  strong {
    font-family: 'Inter', sans-serif;
    font-size: 1rem;
    font-weight: 700;
    line-height: 1.4;
    color: ${(props) => props.theme['gray-300']};
  }

  p {
    font-family: 'Inter', sans-serif;
    font-size: 1rem;
    font-weight: 400;
    line-height: 1.4;
    color: ${(props) => props.theme['gray-300']};
  }
`

export const Tasks = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 0.75rem;
`

export const Task = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.75rem;

  padding: 1rem;
  background: ${(props) => props.theme['gray-500']};
  border: 1px solid ${(props) => props.theme['gray-400']};
  border-radius: 8px;
  box-shadow: 0px 2px 8px 0px rgba(0, 0, 0, 0.06);

  p {
    width: 100%;
    flex: 1;
  }
`

export const CheckboxContainerUnchecked = styled.div`
  width: 1.5rem;
  height: 1.5rem;
  display: flex;
  align-items: center;
  justify-content: center;

  border: 2px solid ${(props) => props.theme['blue-300']};
  border-radius: 50%;
  background: transparent;

  &:hover {
    background: rgba(30, 111, 159, 0.5);
    cursor: pointer;
  }
`

export const CheckboxContainerChecked = styled.div`
  width: 1.5rem;
  height: 1.5rem;
  display: flex;
  align-items: center;
  justify-content: center;

  border-radius: 50%;
  background: ${(props) => props.theme['purple-300']};

  &:hover {
    background: rgba(94, 96, 206, 0.5);
    cursor: pointer;
  }
`

export const Checkbox = styled.input.attrs({ type: 'checkbox' })`
  border: 0;
  height: 0;
  margin: -1px;
  overflow: hidden;
  padding: 0;
  position: absolute;
  width: 0;
`

export const DeleteButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 5px;

  border: 0;
  background: transparent;
  border-radius: 4px;

  color: ${(props) => props.theme['gray-300']};

  &:hover {
    background: ${(props) => props.theme['gray-400']};
    color: ${(props) => props.theme['red-300']};
    cursor: pointer;
  }
`
