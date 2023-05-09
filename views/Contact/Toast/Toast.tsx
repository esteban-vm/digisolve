import type { Component, PropsWithChildren } from '@/types'
import { useRef, useEffect } from 'react'
import { Button, Icon } from '@/components'
import { styled, mediaQuery } from '@/styles'

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
      <div className='content'>
        <h2>Submitted successfully</h2>
        <Icon
          name='envelope-circle-check'
          size={3}
          className='animate__animated animate__heartBeat animate__infinite icon'
        />
        {children}
        <Button text='ok' isClose onClose={closeToast} className='btn' />
      </div>
    </dialog>
  )
}

const Toast = styled(ToastComponent)`
  text-align: center;
  color: var(--color-secondary);
  background-color: var(--color-light);
  border: 2px solid var(--color-primary);
  border-radius: 5px;
  max-width: 60%;

  ${mediaQuery('xs')} {
    max-width: 90%;
  }

  h2 {
    margin: 0;
    color: var(--color-primary);
  }

  .content {
    padding: 2rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  .icon {
    color: inherit;
    margin: 10px auto;
  }

  .btn {
    margin-top: 10px;
  }
`

export default Toast
