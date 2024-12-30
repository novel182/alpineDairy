export type CardsProps = {
    imgSrc: string,
    headline: string,
    details: string
}

const Cards = ({imgSrc, headline, details}: CardsProps) => {
    return(
        <div>
            <img src={imgSrc} className="circular"/>
            <h3>{headline}</h3>
            <span>{details}</span>
        </div>
    )
}

export default Cards