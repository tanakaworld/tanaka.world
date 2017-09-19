import React from 'react';

const Gallery = () => {

    const contents = [
        {
            description: 'me',
            file: 'https://firebasestorage.googleapis.com/v0/b/tanaka-world.appspot.com/o/lp%2Fme%2Fme-real.png?alt=media&token=ea3353e4-38cd-4b63-873f-0ace262202e6'
        },
        {
            description: 'Blog Logo',
            file: 'https://firebasestorage.googleapis.com/v0/b/tanaka-world.appspot.com/o/lp%2Fme%2FForXDevelopersLogo.png?alt=media&token=33b665ad-2db3-43f8-893d-2293b376720e'
        },
        {
            description: '2D',
            file: 'https://firebasestorage.googleapis.com/v0/b/tanaka-world.appspot.com/o/lp%2Fme%2F8bit-me.png?alt=media&token=d8b509a9-2e09-414d-9056-a469387b21dd'
        },
        {
            description: '3D',
            file: 'https://firebasestorage.googleapis.com/v0/b/tanaka-world.appspot.com/o/lp%2Fme%2F8bit-me-3d.png?alt=media&token=97fb8cfd-a02c-41b5-a94d-a8211121450d'
        },
        {
            description: 'santa/snow',
            file: 'https://firebasestorage.googleapis.com/v0/b/tanaka-world.appspot.com/o/lp%2Fme%2F8bit-me-santa.png?alt=media&token=1b3e7532-193d-4621-9f0e-4655f1a711d7'
        },
        {
            description: 'sheep suit',
            file: 'https://firebasestorage.googleapis.com/v0/b/tanaka-world.appspot.com/o/lp%2Fme%2F8bit-me-sheep-suit.png?alt=media&token=31f5bdd7-b8d1-4b01-83cc-dade3a79a806'
        },
        {
            description: 'sheep',
            file: 'https://firebasestorage.googleapis.com/v0/b/tanaka-world.appspot.com/o/lp%2Fme%2F8bit-me-sheep.png?alt=media&token=f498ca9c-6460-4aca-aa6e-124596b69395'
        },
        {
            description: 'block me clear',
            file: 'https://firebasestorage.googleapis.com/v0/b/tanaka-world.appspot.com/o/lp%2Fme%2F8bit_me_clear.jpg?alt=media&token=165e056b-d97b-4a15-81fd-1c8dbb1bdc51'
        },
        {
            description: 'block me no cap',
            file: 'https://firebasestorage.googleapis.com/v0/b/tanaka-world.appspot.com/o/lp%2Fme%2F8bit_me_nocap.png?alt=media&token=fd35ab83-1fa7-4590-9e7c-f600cf0480e4'
        },
        {
            description: 'MacBook',
            file: 'https://firebasestorage.googleapis.com/v0/b/tanaka-world.appspot.com/o/lp%2Fme%2Fmac_sq.png?alt=media&token=d052159e-eb7b-4004-999a-66b2ea2ac9f2'
        },
        {
            description: 'me',
            file: 'https://firebasestorage.googleapis.com/v0/b/tanaka-world.appspot.com/o/lp%2Fme%2Fme-pixel-all.png?alt=media&token=7535bf4e-2266-4068-b513-9e7d3611c633'
        },
        {
            description: 'my face',
            file: 'https://firebasestorage.googleapis.com/v0/b/tanaka-world.appspot.com/o/lp%2Fme%2Fme-pixel-face.png?alt=media&token=8cc7ed09-aa3d-47e2-9777-8fb8932e3d5e'
        },
        {
            description: 'Santa 2015',
            file: 'https://firebasestorage.googleapis.com/v0/b/tanaka-world.appspot.com/o/lp%2Fme%2F8bit-me-santa-2015.png?alt=media&token=87f3bd96-f787-44c8-a47f-e2e021f002b0'
        },
        {
            description: 'Saru Costume 2016',
            file: 'https://firebasestorage.googleapis.com/v0/b/tanaka-world.appspot.com/o/lp%2Fme%2F8bit-me-mon-2016-costume.png?alt=media&token=75042b67-615f-4ec4-a5e7-fa14a91541bc'
        },
        {
            description: 'Saru me 2016',
            file: 'https://firebasestorage.googleapis.com/v0/b/tanaka-world.appspot.com/o/lp%2Fme%2F8bit-me-mon-2016.png?alt=media&token=a439ab14-adac-4462-922d-019df8d3f60c'
        },
        // {
        //     description: 'GIFme',
        //     file: 'https://firebasestorage.googleapis.com/v0/b/tanaka-world.appspot.com/o/lp%2Fme%2Fme-deformed-16fr.gif?alt=media&token=f012eb59-9ea7-403c-b445-bf488e74fca1'
        // },
        {
            description: 'Tori me 2017',
            file: 'https://firebasestorage.googleapis.com/v0/b/tanaka-world.appspot.com/o/lp%2Fme%2Fme-2017-tori-v1.0.0.500.png?alt=media&token=cef64a6e-afe6-433b-ae0b-a7ac6ef96257'
        },
        // {
        //     description: 'Fly up 2017',
        //     file: 'https://firebasestorage.googleapis.com/v0/b/tanaka-world.appspot.com/o/lp%2Fme%2Fme-2017-tori-fly-up.500.gif?alt=media&token=dbecf16f-e281-4b6c-836c-e7e8dc97c043'
        // },
        // {
        //     description: 'Sequential Human',
        //     file: 'https://firebasestorage.googleapis.com/v0/b/tanaka-world.appspot.com/o/lp%2Fme%2FCharacterAnimationGIF-1.gif?alt=media&token=553a4017-3b03-4dbf-a3d7-b60f20900e7a'
        // },
    ].map((c, i) => {
        return <div className="thumbnail" key={i}>
            <img className="gallery-icon" src={c.file}/>
            <p className="description">{c.description}</p>
        </div>
    });

    return <div id="gallery">{contents}</div>;
};

export default Gallery;
