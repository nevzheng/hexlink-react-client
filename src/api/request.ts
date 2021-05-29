export const PostShortenUrl = async (url: string): Promise<Response> => {
  const req = await fetch((url = `${process.env.BACKEND_URL}/api/shorten`), {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ url: url }),
  });
  return req;
};
