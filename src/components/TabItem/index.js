// Write your code here
import './index.css'

const TabItem = props => {
  const {eachTabData, selectedTab} = props
  const {tabId, displayText} = eachTabData

  const onSelectTab = () => {
    selectedTab(tabId)
  }

  return (
    <li onClick={onSelectTab} className="tab-item">
      <button type="button" className="tab-button">
        {displayText}
      </button>
    </li>
  )
}

export default TabItem
