import "./link-card.scss";


const LinkCard = ({linkName,url,id,refed}) => {
  return (
    <div className='link-card'>
      <a href={!refed ? url : `${url}/python-for-beginners?hussein_miracle`} className="link-card__url" id={id ? id : null}target="_blank">{linkName}</a>
    </div>
  )
}

export default LinkCard;