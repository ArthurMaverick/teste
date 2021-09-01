export const fetchJson = async(url: string, option?: RequestInit ): Promise<Response> => {
  const data = await fetch(url, option);
  const parseData = await data.json();
  return parseData
}

