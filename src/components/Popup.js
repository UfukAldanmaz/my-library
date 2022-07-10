
import '../style/popup.css'

function Popup(props) {
    return (props.trigger) ? (
        <div className='popup'>
            <div className='popup-inner'>
                <button className='close-btn' onClick={() => props.setTrigger(false)}>X</button>
                {props.children}
                <div className='popup-box'>
                    <img className='popup-img' src={props.book.volumeInfo.imageLinks && props.book.volumeInfo.imageLinks.smallThumbnail} />
                    <h1 className='popup-title'>{props.book.volumeInfo.title}</h1>
                    <h2 className='popup-authors'>{props.book.volumeInfo.authors}</h2>
                    <a className='popup-more' target='_blank' href={props.book.volumeInfo.previewLink}>More</a>
                </div>
                <h3 className='popup-desc' >{props.book.volumeInfo.description}</h3>

            </div>
        </div>
    ) : "";
}

export default Popup;