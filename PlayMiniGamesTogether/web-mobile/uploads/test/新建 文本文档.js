import crypto from "crypto";

function auth ( apiToken, telegramInitData ) {
    const initData = new URLSearchParams( telegramInitData );

    initData.sort();

    const hash = initData.get( "hash" );
    initData.delete( "hash" );

    const dataToCheck = [...initData.entries()].map( ( [key, value] ) => key + "=" + value ).join( "\n" );

    const secretKey = crypto.createHmac( "sha256", "WebAppData" ).update( apiToken ).digest();

    const _hash = crypto.createHmac( "sha256", secretKey ).update( dataToCheck ).digest( "hex" );

    return hash === _hash;
}