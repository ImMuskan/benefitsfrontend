function Users(props) {
    const { data } = props;
    return (
        <div>
            <h1>Users</h1>
            <div className="cars">
                {data.map((user, index) => (
                    <li className="car" key={index}>
                        <div>
                            <h3 className="car-title">{user.username}</h3>
                        </div>
                        <div className="car-link-wrapper">
                            <a href="#" className="car-link">Register</a>
                        </div>
                    </li>
                ))}
            </div>
        </div>
    )
}
export default Users;