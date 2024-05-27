import React from 'react';

const Register = (props) => {
    return (
        <div>
            <h1>Please Register Here .......</h1>
            <form>
                
                <input type="email" name="" id="" placeholder='Type your email' /><br></br><br/>
                
                <input type="password" name="" id="" placeholder='Type your password' /><br></br><br/>
              
                <input className='sub-btn' type="submit" value="Register" />
                
            </form>
        </div>
    );
};

export default Register;