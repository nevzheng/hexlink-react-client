export const PostShortenUrl = async (url: string): Promise<Response> => {
  const route = `${process.env.REACT_APP_API_URL}/api/shorten`;
  const req = await fetch(route, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ url: url }),
  });
  return req;
};