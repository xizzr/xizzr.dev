const SECRET = '386779861b1b69cf5c4eaaaba99fc562'

export async function onRequest(context) {
  const {request, env} = context;
  const url = new URL(request.url);
  console.log(url)

  if(url.pathname === '/agent/poll'){
    if(request.headers.get('agentSecret') !== SECRET)
      return new Response('Forbidden', {status: 403});

    const command = await env.SERVER_KV.get('server:command') || '';
    const config = await env.SERVER_KV.get('server:config') || '{}';
    await env.SERVER_KV.put('server:command', '');
    return Response.json({command, config: JSON.parse(config)});
  }

  if(url.pathname === '/agent/status' && request.method === 'POST') {
    if(request.headers.get('agentSecret') !== SECRET)
      return new Response('Forbidden', {status:403});
    
    const {status, ip} = await request.json();
    await env.SERVER_KV.put('server:ip', ip || '');
    await env.SERVER_KV.put('server:status', status || 'unknown');
    return Response.json({ok:true});
  }

  if(url.pathname === '/server/status'){
    const status = await env.SERVER_KV.get('server:status') || 'offline';
    const ip = await env.SERVER_KV.get('server:ip') || null;
    return Response.json({status, ip});
  }

  if(url.pathname === '/server/command' && request.method === 'POST'){
    const {command, config} = await request.json();
    await env.SERVER_KV.put('server:command', command);
    await env.SERVER_KV.put('server:config', JSON.stringify(config));
    await env.SERVER_KV.put('server:status', command === 'start' ? 'starting' : 'stopping');
    return Response.json({ok:true});
  }

  //   try {
  //   const url = new URL(context.request.url);
  //   const params = Object.fromEntries(url.searchParams);

  //   console.log("Incoming params:", params);

  //   if (!params["openid.mode"]) {
  //     return new Response("No OpenID data received");
  //   }

  //   params["openid.mode"] = "check_authentication";

  //   const body = new URLSearchParams(params);

  //   const steamRes = await fetch("https://steamcommunity.com/openid/login", {
  //     method: "POST",
  //     headers: {
  //       "Content-Type": "application/x-www-form-urlencoded"
  //     },
  //     body
  //   });

  //   const text = await steamRes.text();

  //   console.log("Steam response:", text);

  //   if (!text.includes("is_valid:true")) {
  //     return new Response("Invalid Login", { status: 401 });
  //   }

  //   const claimedId = params["openid.claimed_id"];
  //   const steamId = claimedId.split("/").pop();

  //   return new Response(`Logged in as SteamID: ${steamId}`);
  // } catch (err) {
  //   console.error("ERROR:", err);
  //   return new Response("Internal Error", { status: 500 });
  // }

  return Response.json({error: "Not found"}, {status: 404});
}