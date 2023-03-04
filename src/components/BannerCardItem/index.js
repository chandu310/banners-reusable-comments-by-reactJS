// Write your code here.
import './index.css'

const BannerList = props => {
  const {bannerCard} = props
  const {headerText, description, className} = bannerCard
  return (
    <li className={`${className} banner-card-item`}>
      <div>
        <h1 className="head">{headerText}</h1>
        <p className="para">{description}</p>
        <button type="button" className="button">
          Show More
        </button>
      </div>
    </li>
  )
}
export default BannerList
