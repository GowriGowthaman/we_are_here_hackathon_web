import React from 'react';

import Image from 'next/image';

export const Login = () => {
    return (
        <div>
            <Image src="/images/LoginLogo.png" alt="Picture of the author" width={500} height={500} />
            <p className="welcome_text color-primary font-20 font-bold">WELCOME TO GROWER</p>
            <p className="login_text">Login</p>
        </div>
    );
};
