import React from 'react'

interface RightCardProps {
    key: number,
    name: string,
    album: {
        images: Array<{
            height: number;
            url: string;
            width: number;
        }>
    }

}

export const RightCard: React.FC<RightCardProps> = ({ name, album }) => {
    return (
        <>
            <div className="artistCard">
                <img src={album.images[0].url} alt={name} />
                <p className='trackText'>{name}</p>
            </div>
        </>
    );
}