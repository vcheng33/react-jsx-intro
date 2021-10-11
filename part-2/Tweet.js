function Tweet({ username, name, date, message }) {
    const style = {
        color: "red",
        fontSize: "15px"
    }

    return <div style={style}>
        <p>Name: { name }</p>
        <p>Username: { username }</p>
        <p>Date: { date }</p>
        <p>Message: { message }</p>
    </div>
}