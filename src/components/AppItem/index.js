// Write your code here
import './index.css'

const AppItem = props => {
  const {tabDataDetails} = props
  const {appName, imageUrl} = tabDataDetails
  return (
    <li className="li-container">
      <img className="app-image" src={imageUrl} alt={`${appName}-avatar`} />
      <p className="app-heading">{appName}</p>
    </li>
  )
}

export default AppItem
