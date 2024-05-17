import './module.css'
function RegBenefits(props) {
    const { data } = props;
    console.log(data);
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
                            <button style={{
                                backgroundColor: 'rgb(244, 210, 163)', border: '0px', padding: '15px', borderRadius: '5px', fontWeight: 'bold',
                            }}>Registered</button>
                        </div>
                    </div>
                </div>
            ))
            }
        </div>
    )
}
export default RegBenefits;