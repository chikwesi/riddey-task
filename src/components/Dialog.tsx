import { useAddBoard } from '../hooks/useAddBoard'
import Button from './Button'
import { container, dialog, list, listIcon, listItem } from './Dialog.css'
import ProgressBar from './Progress'
import FeatureIcon from '../icons/feature'
import LogoIcon from '../icons/logo'
function Dialog() {
  let maxValue = 10
  const { limitReached, addBoard, noOfBoardsAdded } = useAddBoard(maxValue)
  return (
    <div className={container}>
      <div className={dialog}>
        <LogoIcon />
        <h2>
          Upgrade to Riddey PRO
          <br />
          and boost productivity!
        </h2>
        <p>Pellentesque porttitor euismod ante, accumsan consequat purus!</p>
        <ul className={list}>
          {[1, 2, 3].map((i) => (
            <li className={listItem} key={i}>
              <FeatureIcon className={listIcon}/>
              <p>
                <strong>Feature #{i}</strong> - Etiam convallis, nibh vitae dui
                risus
              </p>
            </li>
          ))}
        </ul>
        <p>
          <strong>Current usage</strong>
        </p>
        <ProgressBar currValue={noOfBoardsAdded} maxValue={maxValue} />
        <Button onClick={addBoard} disabled={limitReached}>
          Add New Board
        </Button>
      </div>
    </div>
  )
}

export default Dialog
