import React from 'react';
import { Link } from 'react-scroll';

export default function ScrollBtn(props){
    return(
        <div>
            <Link to = "1" spy={true} smooth={true} duration={500}>
                <span>first</span>
            </Link>
            <Link to = "2" spy={true} smooth={true} duration={500}>
                <span>second</span>
            </Link>
            <Link to = "3" spy={true} smooth={true} duration={500}>
                <span>third</span>
            </Link>
        </div>
    )
}

