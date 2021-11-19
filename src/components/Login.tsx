import React from 'react';

import Image from 'next/image';

export const Login = () => {
    return (
        <div className="flex-center black_bg">
            <div className=" bg-white p-5 rounded text-center">
                <Image src="/images/LoginLogo.png" alt="Picture of the author" width={147} height={100} />
                <p className="welcome_text color-primary font-20 font-bold">WELCOME TO GROWER</p>
                <p className="login_text">Login</p>
                <form>
                    <div className="form-group">
                        <label>Email address</label>
                        <input
                            type="email"
                            className="form-control ring-pink-300"
                            id="exampleInputEmail1"
                            aria-describedby="emailHelp"
                            placeholder="Enter email"
                        />
                    </div>
                    <div className="form-group">
                        <label>Password</label>
                        <input
                            type="password"
                            className="form-control"
                            id="exampleInputPassword1"
                            placeholder="Password"
                        />
                    </div>

                    <button type="submit" className="btn btn-primary">
                        Login
                    </button>
                </form>
            </div>
        </div>
    );
};
