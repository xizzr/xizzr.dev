export async function onRequest(context) {
  try {
    const url = new URL(context.request.url);
    const params = Object.fromEntries(url.searchParams);

    console.log("Incoming params:", params);

    if (!params["openid.mode"]) {
      return new Response("No OpenID data received");
    }

    params["openid.mode"] = "check_authentication";

    const body = new URLSearchParams(params);

    const steamRes = await fetch("https://steamcommunity.com/openid/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded"
      },
      body
    });

    const text = await steamRes.text();

    console.log("Steam response:", text);

    if (!text.includes("is_valid:true")) {
      return new Response("Invalid Login", { status: 401 });
    }

    const claimedId = params["openid.claimed_id"];
    const steamId = claimedId.split("/").pop();

    return new Response(`Logged in as SteamID: ${steamId}`);
  } catch (err) {
    console.error("ERROR:", err);
    return new Response("Internal Error", { status: 500 });
  }
}