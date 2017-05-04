import React from 'react';

const Gallery = () => {

    const contents = [
        {description: 'me', file: 'images/me/me-real.png'},
        {description: 'Blog Logo', file: 'images/me/ForXDevelopersLogo.png'},
        {description: '2D', file: 'images/me/8bit-me.png'},
        {description: '3D', file: 'images/me/8bit-me-3d.png'},
        {description: 'santa/snow', file: 'images/me/8bit-me-santa.png'},
        {description: 'sheep suit', file: 'images/me/8bit-me-sheep-suit.png'},
        {description: 'sheep', file: 'images/me/8bit-me-sheep.png'},
        {description: 'block me clear', file: 'images/me/8bit_me_clear.jpg'},
        {description: 'block me no cap', file: 'images/me/8bit_me_nocap.png'},
        {description: 'MacBook', file: 'images/me/mac_sq.png'},
        {description: 'me', file: 'images/me/me-pixel-all.png'},
        {description: 'my face', file: 'images/me/me-pixel-face.png'},
        {description: 'Santa 2015', file: 'images/me/8bit-me-santa-2015.png'},
        {description: 'Saru Costume 2016', file: 'images/me/8bit-me-mon-2016-costume.png'},
        {description: 'Saru me 2016', file: 'images/me/8bit-me-mon-2016.png'},
        {description: 'GIF.me', file: 'images/me/me-deformed-16fr.gif'},
        {description: 'Tori me 2017', file: 'images/me/me-2017-tori-v1.0.0.500.png'},
        {description: 'Fly up 2017', file: 'images/me/me-2017-tori-fly-up.500.gif'},
        {description: 'Sequential Human', file: 'images/me/CharacterAnimationGIF-1.gif'},
    ].map((c, i) => {
        return <div className="thumbnail" key={i}>
            <img className="gallery-icon" src={c.file}/>
            <p className="description">{c.description}</p>
        </div>
    });

    return <div id="gallery">{contents}</div>;
};

export default Gallery;
