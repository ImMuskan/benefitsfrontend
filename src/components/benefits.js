import './module.css'
function Benefits(props) {
    const { data } = props;
    const handleRegister = async (event, benefit) => {
        const b_id = benefit._id;
        const u_id = localStorage.getItem('userid2');
        try {
            const response = await fetch('https://benefits-ldpd.onrender.com/api/v1/user/registerforbenefit', {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ u_id, b_id }),
            });
            const d = await response.json();
            console.log(d);
        } catch (error) {
            console.log(error);
        }
    }
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
                            <button style={{backgroundColor:'rgb(244, 210, 163)',border:'0px',padding:'15px',borderRadius:'5px',fontWeight:'bold', 
                            }} onClick={(event) => handleRegister(event, benefit)}>Register</button>
                        </div>
                    </div>
                    <div className="car-link-wrapper">
                        <a href="#" className="car-link">Register</a>
                    </div>
                </div>
            ))}

        </div>
    )
}
export default Benefits;