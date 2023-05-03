import type { Component, PropsWithChildren } from '@/types'
import { useRef, useEffect } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Button } from '@/components'
import { styled } from '@/styles'

type ToastProps = Required<PropsWithChildren<{ isOpen: boolean }>>

const ToastComponent: Component<ToastProps> = ({ isOpen, children, ...rest }) => {
  const toastRef = useRef<HTMLDialogElement>(null)

  useEffect(() => {
    if (isOpen) toastRef.current?.showModal()
  }, [isOpen])

  const closeToast = () => {
    toastRef.current?.close()
  }

  return (
    <dialog ref={toastRef} {...rest}>
      <h2>Submitted successfully</h2>
      <FontAwesomeIcon
        size='2x'
        icon='envelope-circle-check'
        className='animate__animated animate__heartBeat animate__infinite icon'
      />
      {children}
      <Button text='ok' isClose onClose={closeToast} className='btn' />
    </dialog>
  )
}

const Toast = styled(ToastComponent)`
  text-align: center;
  color: var(--color-secondary);
  background-color: var(--color-light);
  border: 2px solid var(--color-primary);
  border-radius: 5px;
  padding: 2rem;

  h2 {
    margin: 0;
    color: var(--color-primary);
  }

  .icon {
    display: block;
    margin: 10px auto;
    color: var(--color-secondary);
  }

  .btn {
    margin-top: 10px;
  }
`

export default Toast
