import { useUpdateCursorify } from '@cursorify/react'
import React, { FC, ReactNode } from 'react'
import { toast } from 'react-toastify'
import styles from './styles.module.css'

type Props = {
  cursor: ReactNode
  name: string
}

const CursorCard: FC<Props> = ({ cursor, name }) => {
  const { updateCursor } = useUpdateCursorify()
  const notify = () => toast(`⚡ copied '${name}'`)

  const handleClick = () => {
    updateCursor(cursor)
    notify()
  }

  return (
    <div
      className="card shadow--md"
      style={{ cursor: 'pointer' }}
      onClick={handleClick}
    >
      <div className={styles.cursor}>{cursor}</div>
      <div className="card__header">
        <h4>{name}</h4>
      </div>
    </div>
  )
}

export default CursorCard
