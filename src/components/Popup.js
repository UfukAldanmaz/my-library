
import '../style/popup.css'

function Popup(props) {
    return (props.trigger) ? (
        <div className='popup'>
            <div className='popup-inner'>
                <button className='close-btn' onClick={() => props.setTrigger(false)}>Close</button>
                {props.children}
                <div className='popup-box'>
                    <img className='popup-img' src={props.book.volumeInfo.imageLinks && props.book.volumeInfo.imageLinks.smallThumbnail} />
                    <h1 className='popup-title'>{props.book.volumeInfo.title}</h1>
                    <h2 className='popup-authors'>{props.book.volumeInfo.authors}</h2>
                </div>
                <h3 className='popup-desc' >{props.book.volumeInfo.description}</h3>
                <a className='popup-more' href={props.book.volumeInfo.previewLink}>More</a>
            </div>
        </div>
    ) : "";
}

export default Popup;