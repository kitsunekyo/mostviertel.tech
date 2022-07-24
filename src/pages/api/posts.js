import { getPosts } from "src/lib/blog";

export default function handler(req, res) {
  const page = req.query.page || 1;
  const payload = getPosts({ page });

  res.status(200).json(payload);
}
