import { useState } from "react";
function Benform() {
    const [benefit_name, setbenefitname] = useState('');
    const [description, setdescription] = useState('');
    const [elegibility_criteria, setelegibilitycriteria] = useState('');
    const [coverage_amount, setcoverageamount] = useState('');
    const [image, setimage] = useState('');
    const handleForm = async () => {
        try {
            const response = await fetch('https://benefits-ldpd.onrender.com/api/v1/admin/addbenefits', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ benefit_name, description, elegibility_criteria, coverage_amount, image }),
            })
            console.log("success")
        }
        catch (error) {
            console.log(error);
        }
    }
    return (
        <div className="benform">
            <form>
                <table className="benformtable">
                    <tr>
                        <td>
                            <label>Benefit name: </label></td>
                        <td>
                            <input type="text"
                                id="benefit_name"
                                name="benefit_name"
                                value={benefit_name}
                                onChange={(e) => setbenefitname(e.target.value)}
                                required /></td>
                    </tr>
                    <tr>
                        <td>
                            <label>Description </label></td>
                        <td><input type="text"
                            id="description"
                            name="description"
                            value={description}
                            onChange={(e) => setdescription(e.target.value)}
                            required /></td>
                    </tr>
                    <tr>
                        <td>
                            <label>Elegibility criteria </label></td>
                        <td><input type="text"
                            id="elegibility_criteria"
                            name="elegibility_criteria"
                            value={elegibility_criteria}
                            onChange={(e) => setelegibilitycriteria(e.target.value)}
                            required /></td>
                    </tr>
                    <tr>
                        <td>
                            <label>coverage amount:  </label></td>
                        <td><input type="text"
                            id="coverage_amount"
                            name="coverage_amount"
                            value={coverage_amount}
                            onChange={(e) => setcoverageamount(e.target.value)}
                            required /></td>
                    </tr>
                    <tr>
                        <td>
                            <label>Image </label></td>
                        <td><input type="text" className="input"
                            id="image"
                            name="image"
                            value={image}
                            onChange={(e) => setimage(e.target.value)}
                            required /></td>
                    </tr>
                    <tr>
                        <td colSpan={2}>
                        <input type="button" className="btn" value="Register" onClick={handleForm} /></td>
                    </tr>
                </table>
            </form>
        </div>
    )
}
export default Benform;