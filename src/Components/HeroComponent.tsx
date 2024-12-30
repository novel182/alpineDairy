
type HeroComponentProps = {
    statement: string,
    details: string,
}

const HeroComponent = ({statement, details}: HeroComponentProps) => {
    <div className="tc">
        <div>
            {statement}
        </div>
        <div>
            {details}
        </div>
        <div className="dib">
            <button>LEARN MORE</button>
            <button>Join us</button>
        </div>
    </div>
}

export default HeroComponent