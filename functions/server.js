export async function onRequest(params) {
    console.log(params);
    const url = new URL(params.request.url);
    console.log(url);
    const parameters = Object.fromEntries(url.searchParams);
    params['openid.mode'] = 'check_authentication';

    const body = new URLSearchParams(params);
    const steamRes = await fetch('https://steamcommunity.com/openid/login', {method: 'POST', headers:{'Content-Type': 'application/x-www-form-urlencoded'}, body});
    const text = await steamRes.text;

    if(!text.includes('is_valid:true')) {
        return new Response('Invalid Login', {status: 401});
    }

    const claimedid = params['openid.claimed_id'];
    const steamid = claimedid.split('/').pop();

    return new Response(`Logged in as SteamID: ${steamid}`);
}