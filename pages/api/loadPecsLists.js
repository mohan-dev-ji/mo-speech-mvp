import { pecsLists } from '../../data/pecslists';

export default function handler(req, res) {
  console.log("load pecs list");
  console.log(pecsLists)
    
  res.status(200).json(pecsLists);
}
