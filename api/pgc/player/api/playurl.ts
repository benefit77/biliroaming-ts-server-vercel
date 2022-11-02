import type { VercelRequest, VercelResponse } from '@vercel/node';
import * as env from '../../../_config'
import * as data_parse from './_data'

const api = env.api_playurl

const main = async (req: VercelRequest, res: VercelResponse) => {
  //res.json(req.headers)
  const continue_execute = await data_parse.middleware(req.url as string, req.headers)
  if (continue_execute[0] == false)  res.json(env.block(continue_execute[1])) 
  else res.json(await data_parse.main(req.url as string))
  /*fetch(api + req.url, {
    method: req.method,
    body: req.body
  }).then(response => response.json())
    .then(response => {
      res.json(response)
    })*/
}

export default main