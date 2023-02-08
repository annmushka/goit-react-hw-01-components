export function Profile({
    username,
    tag,
    location,
    avatar,
    stats,
}) {
    return (
        <div>
            <div>
                <img src={avatar} alt={username}>
                </img>
                <p>{username}</p>
                <p>{tag}</p>
                <p>{location}</p>
            </div>
            <div>
                <ul>{stats}</ul>
            </div>
        </div>
    )
}