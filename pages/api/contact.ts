// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import axios, {AxiosResponse} from "axios";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<AxiosResponse>
) {
  const data = req.body;
  // data.isTestingStatus = "true";
  const response = await axios({
    url: 'http://kashanshah.000webhostapp.com/kashanshah.com/email.php',
    method: 'POST',
    data,
    params: data,
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Content-Type': 'multipart/form-data',
      'Accept': 'application/json, text/plain, */*'
    },
  }).catch((error)=>{
    return error.response;
  });

  // console.log('find response', response)

  res.status(response.status).json(response?.data)
}
