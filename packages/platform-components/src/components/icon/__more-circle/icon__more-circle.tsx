import React from 'react';

import Icon, { SingleIconProps } from '../icon';

import './icon__more-circle.scss';

const IconMoreCircle = (props: SingleIconProps) => {
    return (
        <Icon ico="more-circle" {...props}>
            <svg viewBox="0 0 30 30">
                <path d="M2.50024 14.9997C2.50024 8.106 8.10774 2.49975 15.0002 2.49975C21.8927 2.49975 27.5002 8.106 27.5002 14.9997C27.5002 21.8922 21.8927 27.4997 15.0002 27.4997C11.0902 27.4997 7.47899 25.721 5.09149 22.6222C4.78524 22.2235 4.85899 21.6522 5.25649 21.3472C5.65399 21.0397 6.22399 21.116 6.53149 21.5122C8.57149 24.1622 11.659 25.6822 15.0002 25.6822C20.8902 25.6822 25.6815 20.891 25.6815 14.9997C25.6815 9.10975 20.8902 4.31725 15.0002 4.31725C9.11024 4.31725 4.31774 9.10975 4.31774 14.9997C4.31774 15.5472 4.35899 16.091 4.44024 16.6235C4.51524 17.1185 4.17399 17.5822 3.67899 17.6585C3.18024 17.741 2.71899 17.3947 2.64274 16.8985C2.54774 16.276 2.50024 15.6372 2.50024 14.9997ZM9.40049 13.5047C10.2267 13.5047 10.898 14.176 10.898 14.9997C10.898 15.8247 10.2267 16.496 9.40049 16.496C8.57549 16.496 7.90299 15.8247 7.90299 14.9997C7.90299 14.176 8.57549 13.5047 9.40049 13.5047ZM14.9999 13.5047C15.8249 13.5047 16.4974 14.176 16.4974 14.9997C16.4974 15.8247 15.8249 16.496 14.9999 16.496C14.1736 16.496 13.5024 15.8247 13.5024 14.9997C13.5024 14.176 14.1736 13.5047 14.9999 13.5047ZM22.0961 14.9997C22.0961 14.176 21.4249 13.5047 20.5986 13.5047C19.7736 13.5047 19.1011 14.176 19.1011 14.9997C19.1011 15.8247 19.7736 16.496 20.5986 16.496C21.4249 16.496 22.0961 15.8247 22.0961 14.9997Z" />
            </svg>

        </Icon>
    );
};

export default IconMoreCircle;
