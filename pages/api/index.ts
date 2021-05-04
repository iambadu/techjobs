import {Request, Response} from 'express';

import {JOBS_API} from '../../lib/api';

export default async({body}: Request, res:Response) => {
  const {term, fullTime, location, page} = JSON.parse(body);
  let query = '';
  if(term) {
    query += `&search=${term}`
  }
  if(fullTime) {
    query += `&full_time=true}`
  }
  if(location) {
    query += `&location=${location.replace(' ', '+')}`;
  }
  if(page) {
    query += `&page=${page}`;
  }
  if(query.length) {
    query += query.substring(1)
  }
  try {
    const data = await fetch(`${JOBS_API}.json?${query}`).then(json => json.json());
    res.status(200).json(data)
  } catch (err) {
    res.status(500).json({error: err})
  }
}