// import { connectDB } from "@/util/database";
// import { MongoDBAdapter } from "@next-auth/mongodb-adapter";
import NextAuth from "next-auth";
import GithubProvider from "next-auth/providers/github";

export const authOptions = {
    providers: [
        GithubProvider({
            clientId: 'db3e298dc5e4bb4ce621',
            clientSecret: '0a1f372679db90e47c5bfd1e4b914e8e155da16a',
        }),
    ],
    secret: 'coconut',
};
export default NextAuth(authOptions); 