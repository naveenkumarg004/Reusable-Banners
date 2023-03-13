import './index.css'

const BannerCardItem = props => {
  const {bannerDet} = props
  const {headerText, description, className} = bannerDet

  return (
    <li className={`card ${className}`}>
      <div>
        <h1 className="heading">{headerText}</h1>
        <p className="description">{description}</p>
        <button className="btn" type="button">
          Show more
        </button>
      </div>
    </li>
  )
}

export default BannerCardItem
