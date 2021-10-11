function Person ({ name, age, hobbies }) {
    
    return (
        <div>
            <h2>{name.length > 8 ? name.substring(0,6) : name }</h2>
            <p>Learn some information about this person.</p>
            <h3 className="alert alert-primary" role="alert">{age > 18 ? "Please go vote!": "You must be 18!"}</h3>
            <ul>
                { hobbies.map(h => <li>{h}</li>)}
            </ul>
        </div>
    )
}