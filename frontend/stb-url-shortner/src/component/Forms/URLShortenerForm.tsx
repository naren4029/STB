import { useState } from "react";
import serviceManager from "../../util/serviceManager";

const URLShortenerForm = () => {

    const eventHandler = () => {

        let pattern: any = "(www.)?[a-zA-Z0-9@:%._\\+~#?&//=]{2,256}\\.[a-z]{2,6}\\b([-a-zA-Z0-9@:%._\\+~#?&//=]*)";

        if (urlValue.match(pattern)) {

            setIsUrlValid(true);

            serviceManager.api('POST', '/generateShortUrl', { url: urlValue }).then((data: any) => {

                if (data) {

                    setDisplayShortUrl(data.url);

                    setIsError(false);

                }

            }, (err: any) => {

                setIsError(true);

            });

        } else {

            setIsUrlValid(false);

        }
    }

    const inputHandler = (e: any) => {

        setUrlValue(e.target.value);

    }

    const diaplayValidationError = () => {

        if (!isUrlValid) {

            return <small className="error__block">Invalid URL!</small>

        }

        return '';
    }

    const loadShortUrl = () => {

        if (displayShortUrl) {

            return <div className="success-wrapper">
                <span className="form__label">Generated URL: </span>
                <a href={displayShortUrl}>{displayShortUrl}</a>
            </div>

        }
        return '';
    }

    const displayAPIErrors = () => {
        if (isError) {

            return <div className="error-notification">
                Error while generating short url!
                <span className="close-error-pnl" onClick={() => { setIsError(false) }}>×</span>
            </div>

        }

        return '';
    }

    const [urlValue, setUrlValue] = useState('');

    const [isUrlValid, setIsUrlValid] = useState(true);

    const [isError, setIsError] = useState(false);

    const [displayShortUrl, setDisplayShortUrl] = useState('');

    return (
        <>
            {displayAPIErrors()}
            <div className="form">
                <label>
                    <span className="form__label">Enter Actual URL: </span>
                    <input type="text" className="form__input-text" placeholder="Enter Actual URL here" defaultValue={urlValue} onChange={(e) => { inputHandler(e) }} />
                </label>
                <button className="btn btn--primary" disabled={!urlValue} onClick={() => eventHandler()}>Generate</button>
                <div className="error-wrapper">{diaplayValidationError()}</div>
                {loadShortUrl()}
            </div>
        </>
    );
}

export default URLShortenerForm;