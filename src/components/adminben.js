import './module.css'
function AdminBen(props) {
    const { data } = props;
    return (
        <div>
            
            {data.map((benefit, index) => (
                <div className="car" key={index}>
                    <div style={{ display: 'flex', backgroundColor: 'rgb(181, 181, 225)', padding: '5px' }}>
                        <img src={process.env.PUBLIC_URL + benefit.image} style={{ width: '300px', height: '300px' }}></img>
                        <div style={{ padding: '10px', fontSize: '25px' }}>
                            <h3 style={{ fontWeight: 'bold', fontSize: 'larger' }}>{benefit.benefit_name}</h3>
                            <p>Description: {benefit.description}</p>
                            <p>Elegibility: {benefit.elegibility_criteria}</p>
                        </div>
                    </div>
                </div>
            ))}

        </div>
    )
}
export default AdminBen;