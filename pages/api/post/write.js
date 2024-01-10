import { connectDB } from "@/utils/database";

export default async function write(req, res) {
    if (req.method === "POST") {
        try {
            const db = (await connectDB).db('forum');
            let result = await db.collection('post').insertOne(req.body);
            return res.status(200).json("저장완료");
        } catch (err) {
            console.log(err);
        }
    }
}
