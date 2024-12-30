type FeatureSlipProps = {
    imgSrc: string,
    headline: string,
    details: string,
    buttonText:string
}

const FeatureSlip = ({imgSrc, headline, details, buttonText} : FeatureSlipProps) => {
    return (
        <div className="columns360">
            <img src={imgSrc}/>
            <div>
                <h2>{headline}</h2>
                {details}
                <button
                    className="button-reset ttu br0 bg-yellow hover-bg-orange"
                >
                    {buttonText}
                </button>
            </div>
        </div>
    )
}

export default FeatureSlip