import axios from "axios";
import { load } from "cheerio";
import { decode } from "iconv-lite";

import { type YahooSearchResponse } from "../type/util/janSite";

type scrapedData = {
  image: string;
  name: string;
};

export const fetchJanken = async (
  janCode: string,
): Promise<{ name: string }> => {
  // TODO: refactor
  try {
    const response = await axios.post<Buffer[]>(
      "https://www.janken.jp/gadgets/jan/JanSyohinKensaku.php",
      `dummy=&jan=${janCode}`,
      {
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
          Origin: "https://www.janken.jp",
          Referer: "https://www.janken.jp/gadgets/jan/JanSyohinKensaku.php",
          "Upgrade-Insecure-Requests": "1",
          "User-Agent":
            "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/114.0.0.0 Safari/537.36",
          "sec-ch-ua":
            '"Not.A/Brand";v="8", "Chromium";v="114", "Google Chrome";v="114"',
          "sec-ch-ua-mobile": "?0",
          "sec-ch-ua-platform": '"Windows"',
        },
        responseType: "arraybuffer",
      },
    );

    // TODO: fix this
    // @ts-ignore
    const decodedData = decode(Buffer.from(response.data, "binary"), "EUC-JP");
    const $ = load(decodedData, { xml: true });
    const data = $("td[class=goodsval] > a").text().trim();

    console.log(data);

    return {
      name: data,
    };
  } catch (error) {
    console.error("Error:", error);
    throw new Error("Unexpected error occurred in fetchJanken");
  }
};

export const fetchYahoo = async (
  janCode: string,
): Promise<{ name: string; image: string }> => {
  console.log(process.env);

  axios.interceptors.request.use((request) => {
    console.log("Starting Request: ", request);
    return request;
  });

  axios.interceptors.response.use((response) => {
    console.log("Response: ", response);
    return response;
  });

  try {
    await axios.get("https://google.com");
    const response = await axios.get<YahooSearchResponse.ResponseType>(
      "https://shopping.yahooapis.jp/ShoppingWebService/V3/itemSearch",
      {
        params: {
          appid: process.env.YAHOO_APP_ID,
          jan_code: janCode,
        },
      },
    );

    const hit = response.data.hits[0];

    if (!hit) {
      console.log(`No data: ${janCode}`);
      throw new Error("No data");
    }

    const { name, image } = hit;
    return {
      name,
      image: image.medium,
    };
  } catch (error) {
    console.log(`Error: ${janCode}`);
    throw new Error("Unexpected error occurred in fetchYahoo");
  }
};

export const fetchYahooAndJanken = async (
  janCode: string,
): Promise<scrapedData> => {
  const [yahooResult, jankenResult] = await Promise.all([
    fetchYahoo(janCode),
    fetchJanken(janCode),
  ]);

  console.log(jankenResult);
  console.log(yahooResult);

  return {
    image: yahooResult.image,
    name: jankenResult.name || yahooResult.name,
  };
};
