import Cards, { CardsProps } from "./Cards"

type CardsContainerProps = {
    CardsInfo: CardsProps[]
}

const CardsContainer = ({CardsInfo}: CardsContainerProps) => {
    return(
        <div>
            {CardsInfo.map((info) => 
                <Cards {...info}/>
            )}
        </div>
    )
}

export default CardsContainer