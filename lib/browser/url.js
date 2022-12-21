const URI_NEWLINE = '%0A';
const URI_SPACE = '%20';
const URI_PROTOCOL = 'https://';

const createUrl = (domain, query) => URI_PROTOCOL + domain + '/?' + query;

const sliceTagText = (str, symbol = '\n') => str.split(symbol).filter(value => value.length);

const createGoogleQueryParam = (original, translate, text) => {
    const originalLang = `sl=${original}`;
    const translateLang = `tl=${translate}`;
    const endQueryString = `op=translate`;

    return sliceTagText(`${originalLang} ${translateLang} ${text} ${endQueryString}`);
};

const createGoogleUrl = (lang, translate, text) => {

    const domain = 'translate.google.com';
    // const urlTextFormat =
    const queryString = createGoogleQueryParam(lang, translate, text);

    return createUrl(domain, queryString)
}