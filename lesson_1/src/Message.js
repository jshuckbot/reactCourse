import './Message.css';
function Message(props) {
    return (
        <div className='container'>
            <h1 className='title'>Переданный текст</h1>
            <p>{props.text}</p>
        </div>
    );
}

export default Message;