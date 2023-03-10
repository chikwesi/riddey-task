import { useMemo } from 'react'
import { progressBar, progressInfo, progressTrack } from './Progress.css'

type ProgressT = {
  currValue?: number
  maxValue?: number
}

function ProgressBar({ currValue, maxValue }: ProgressT) {
  const styles = useMemo(() => {
    const percent = Math.round((currValue / maxValue) * 100)
    const style = { width: `${percent}%`, transition: 'ease-out 200ms' }
    return style
  }, [currValue, maxValue])
  return (
    <div>
      <p className={progressInfo}>
        {currValue} out of {maxValue} boards in use
      </p>
      <div className={progressBar}>
        <div className={progressTrack} style={styles}></div>
      </div>
    </div>
  )
}

export default ProgressBar
